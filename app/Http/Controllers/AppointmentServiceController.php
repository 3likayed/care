<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentServiceStoreRequest;
use App\Http\Requests\AppointmentServiceUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\AppointmentService;
use App\Models\Service;
use App\Models\Tool;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class AppointmentServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $model = AppointmentService::class;
        $this->middleware(['permission:appointment-services.show'])->only(['index', 'show']);
        $this->middleware(['permission:appointment-services.edit', 'can:update,appointment_service'])->only(['update']);
        $this->middleware(['permission:appointment-services.create', "can:create,$model"])->only(['store']);
        $this->middleware(['permission:appointment-services.delete', 'can:delete,appointment_service'])->only(['destroy']);

    }

    public function index(Request $request)
    {
        $appointmentServices = QueryBuilder::for(AppointmentService::class)
            ->allowedSorts('name', 'price')
            //filtering
            ->allowedFilters(AllowedFilter::exact('id'), 'name')
            ->paginate($request->get('per_page'));

        return Inertia::render('AppointmentServices/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.appointment_services')]),
            'data' => ModelCollection::make($appointmentServices),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AppointmentServiceStoreRequest $request)
    {
        DB::beginTransaction();
        $data = $request->validated();
        $service = Service::find($data['service_id']);
        $data['unit_price'] = $service->unit_price ?? Tool::find($data['tool_id'])->unit_price;
        AppointmentService::create($data);
        DB::commit();

        return success();

    }

    public function update(AppointmentServiceUpdateRequest $request, AppointmentService $appointmentService)
    {
        DB::beginTransaction();
        $data = $request->validated();
        // available amount for the doctor
        $doctorServiceAvailable = $request
            ->doctorService // predefined in the AppointmentServiceUpdateRequest->prepareForValidation
            ->pivot         //DoctorService model
            ->available;

        $request->doctorService
            ->pivot //DoctorService model
            ->update([
                // calculate the new doctor available quantity to update it
                'available' => $doctorServiceAvailable + $appointmentService->quantity - $data['quantity'],
            ]);
        $appointmentService->update([
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
    public function destroy(AppointmentService $appointmentService)
    {
        DB::beginTransaction();
        //return the quantity to available quantity of the doctor
        $appointmentService
            ->doctor
            ->services
            ->find($appointmentService->service_id)
            ->pivot //DoctorService Model
            ->increment('available', $appointmentService->quantity);
        $appointmentService->delete();

        DB::commit();

        return success();
    }
}
