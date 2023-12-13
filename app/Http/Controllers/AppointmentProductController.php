<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentProductStoreRequest;
use App\Http\Requests\AppointmentProductUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\AppointmentProduct;
use App\Models\Product;
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
        $this->middleware(['permission:appointment-products.show'])->only(['index', 'show']);
        $this->middleware(['permission:appointment-products.edit'])->only(['update']);
        $this->middleware(['permission:appointment-products.create'])->only(['store']);
        $this->middleware(['permission:appointment-products.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $appointmentProducts = QueryBuilder::for(AppointmentProduct::class)
            ->allowedSorts('name', 'price')
            //filtering
            ->allowedFilters(AllowedFilter::exact('id'), 'name')
            ->paginate($request->get('per_page'));
        $appointmentProductTypes = AppointmentProductType::all();

        return Inertia::render('AppointmentProducts/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.appointment_products')]),
            'data' => ModelCollection::make($appointmentProducts),
            'appointment_product_types' => $appointmentProductTypes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AppointmentProductStoreRequest $request)
    {
        DB::beginTransaction();
        $data = $request->validated();
        $appointmentProductsData = [];
        $products = Product::whereIn('id', collect($this->products)->pluck('id'))->get();

        foreach ($data['products'] as $key => $appointmentProduct) {
            $quantity = $appointmentProduct['quantity'];
            $product = $products->find($appointmentProduct['id']);
            $stocks = $product
                ->stocks()
                ->where('available', '>=', 0)
                ->latest('expires_at')
                ->lazy();
            foreach ($stocks as $stock) {
                $available = $stock->available;
                if ($quantity > $available) {
                    $quantity -= $available;
                    $stock->available = 0;
                } else {
                    $stock->available -= $quantity;
                    return false;
                }
                $stock->save();
            }
            if ($quantity > 0) {
                return error();
            }
            $appointmentProductsData[] = [
                'appointment_id' => $data['appointment_id'],
                'product_id' => $appointmentProduct['id'],
                'unit_price' => Product::find($appointmentProduct['id'])->price,
                'quantity' => $appointmentProduct['quantity'],
            ];
        }


        AppointmentProduct::insert($appointmentProductsData);
        DB::commit();
        return success();

    }

    public
    function update(AppointmentProductUpdateRequest $request, AppointmentProduct $appointmentProduct)
    {

        $data = $request->validated();
        $data['price'] = AppointmentType::find($data['appointment_product_type_id'])->price;
        $appointmentProduct->update($data);

        return success();
    }

    public
    function show(AppointmentProduct $appointmentProduct)
    {
        $appointmentProduct->load('patient', 'appointment_productType');
        $appointmentProductTypes = AppointmentType::all();
        $products = Product::all();
        return Inertia::render('Appointments/Show', [
            'data' => $appointmentProduct,
            'appointment_product_types' => $appointmentProductTypes,
            'products' => $products,
            'meta' => meta()->metaValues(['title' => "$appointmentProduct->name | " . __('dashboard.appointment_products')]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public
    function destroy(AppointmentProduct $appointmentProduct)
    {
        $appointmentProduct->delete();

        return success();
    }

    private
    function recursiveStock($stock, $quantity)
    {
        if ($stock->available >= $quantity) {
            $stock->available = $stock->available - $quantity;
            $stock->save();
        } else {
            $this->recursiveStock($stock->next(), $quantity - $stock->available);
        }
    }


}
