<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentStoreRequest;
use App\Http\Requests\AppointmentUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Appointment;
use App\Models\AppointmentType;
use Illuminate\Http\Request;
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
        $this->middleware(['permission:appointments.show'])->only(['index', 'show']);
        $this->middleware(['permission:appointments.edit'])->only(['update']);
        $this->middleware(['permission:appointments.create'])->only(['store']);
        $this->middleware(['permission:appointments.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $appointments = QueryBuilder::for(Appointment::class)
            ->with(['patient:name,id', 'appointmentType:name,id'])
            ->allowedSorts('name', 'price')
            //filtering
            ->allowedFilters( AllowedFilter::exact('id'), 'name')
            ->paginate($request->get('per_page'));
        $appointmentTypes = AppointmentType::all();

        return Inertia::render('Appointments/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.appointments')]),
            'data' => ModelCollection::make($appointments),
            'appointment_types' => $appointmentTypes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AppointmentStoreRequest $request)
    {

        $data = $request->validated();
        $data['price'] = AppointmentType::find($data['appointment_type_id'])->price;
        Appointment::create($data);

        return success();

    }

    public function update(AppointmentUpdateRequest $request, Appointment $appointment)
    {

        $data = $request->validated();
        $data['price'] = AppointmentType::find($data['appointment_type_id'])->price;
        $appointment->update($data);

        return success();
    }

    public function show(Appointment $appointment)
    {
        $appointment->load('patient', 'appointmentType');
        $appointmentTypes = AppointmentType::all();

        return Inertia::render('Appointments/Show', [
            'data' => $appointment,
            'appointment_types' => $appointmentTypes,
            'meta' => meta()->metaValues(['title' => "$appointment->name | " . __('dashboard.appointments')]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        $appointment->delete();

        return success();
    }
}
