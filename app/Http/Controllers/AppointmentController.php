<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentStoreRequest;
use App\Http\Requests\AppointmentUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Appointment;
use App\Models\AppointmentType;
use App\Models\Doctor;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class AppointmentController extends Controller
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
            //for sorting
            ->join('patients', 'appointments.patient_id', '=', 'patients.id')
            ->join('appointment_types', 'appointments.appointment_type_id', '=', 'appointment_types.id')
            ->select('appointments.*')
            ->allowedSorts('date', 'created_at', 'patients.name', 'appointment_types.name', 'price', 'id')

            //filtering
            ->allowedFilters('id', 'appointment_type_id', AllowedFilter::scope('patient', 'patientSearch'), AllowedFilter::scope('date_interval'))
            ->paginate($request->get('per_page'));
        $appointmentTypes = AppointmentType::all();
        return Inertia::render('Appointments/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.appointments')]),
            'data' => ModelCollection::make($appointments),
            'appointment_types' => $appointmentTypes,
            'doctors' => Doctor::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AppointmentStoreRequest $request)
    {

        $data = $request->validated();
        if (!Carbon::parse($data['date'])->isToday()) {
            $data['doctor_id'] = null;
        }

        $data['price'] = AppointmentType::find($data['appointment_type_id'])->price;
        Appointment::create($data);

        return success();

    }

    public function update(AppointmentUpdateRequest $request, Appointment $appointment)
    {

        $data = $request->validated();

        if (!Carbon::parse($data['date'])->isToday()) {
            $data['doctor_id'] = null;
        }

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
            'doctors' => Doctor::all(),
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
