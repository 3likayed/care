<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentProductStoreRequest;
use App\Http\Requests\AppointmentProductUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\AppointmentProduct;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class AppointmentProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $model = AppointmentProduct::class;
        $this->middleware(['permission:appointment-products.show'])->only(['index', 'show']);
        $this->middleware(['permission:appointment-products.edit', 'can:update,appointment_product'])->only(['update']);
        $this->middleware(['permission:appointment-products.create', "can:create,$model"])->only(['store']);
        $this->middleware(['permission:appointment-products.delete', 'can:delete,appointment_product'])->only(['destroy']);

    }

    public function index(Request $request)
    {
        $appointmentProducts = QueryBuilder::for(AppointmentProduct::class)
            ->allowedSorts('name', 'price')
            //filtering
            ->allowedFilters(AllowedFilter::exact('id'), 'name')
            ->paginate($request->get('per_page'));

        return Inertia::render('AppointmentProducts/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.appointment_products')]),
            'data' => ModelCollection::make($appointmentProducts),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AppointmentProductStoreRequest $request)
    {
        DB::beginTransaction();

        $data = $request->validated();
        $doctorProducts = $request->doctorProducts;
        $appointment = $request->appointment;
        $appointmentProductsData = [];
        foreach ($data['products'] as $key => $product) {
            //get the current doctor product
            $currentDoctorProduct = $doctorProducts->find($product['id']);

            //decrease the available amount to the product  of the doctor
            $currentDoctorProduct
                ->pivot //DoctorProduct Model
                ->decrement('available', $product['quantity']);

            //push the data to the AppointmentProductData array
            $appointmentProductsData[] = [
                'product_id' => $product['id'],
                'appointment_id' => $data['appointment_id'],
                'quantity' => $product['quantity'],
                'unit_price' => $currentDoctorProduct->unit_price,
            ];
        }

        //attach products to the appointments
        $appointment->products()->attach($appointmentProductsData);
        DB::commit();

        return success();

    }

    public function update(AppointmentProductUpdateRequest $request, AppointmentProduct $appointmentProduct)
    {
        DB::beginTransaction();
        $data = $request->validated();
        // available amount for the doctor
        $doctorProductAvailable = $request
            ->doctorProduct // predefined in the AppointmentProductUpdateRequest->prepareForValidation
            ->pivot         //DoctorProduct model
            ->available;

        $request->doctorProduct
            ->pivot //DoctorProduct model
            ->update([
                // calculate the new doctor available quantity to update it
                'available' => $doctorProductAvailable + $appointmentProduct->quantity - $data['quantity'],
            ]);
        $appointmentProduct->update([
            'quantity' => $data['quantity'],
        ]);
        DB::commit();

        return success();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @throws Exception
     */
    public function destroy(AppointmentProduct $appointmentProduct)
    {
        DB::beginTransaction();
        //return the quantity to available quantity of the doctor
        $appointmentProduct
            ->doctor
            ->products
            ->find($appointmentProduct->product_id)
            ->pivot //DoctorProduct Model
            ->increment('available', $appointmentProduct->quantity);
        $appointmentProduct->delete();

        DB::commit();

        return success();
    }
}
