<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentStoreRequest;
use App\Http\Requests\AppointmentTransactionRequest;
use App\Http\Requests\AppointmentUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Appointment;
use App\Models\AppointmentType;
use App\Models\Doctor;
use App\Services\TransactionService;
use App\Services\UserService;
use App\Sorts\RelationSort;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:appointments.show'])->only(['index', 'show']);
        $this->middleware(['permission:appointments.edit', 'can:update,appointment'])->only(['update']);
        $this->middleware(['permission:appointments.create'])->only(['store']);
        $this->middleware(['permission:appointments.delete', 'can:delete,appointment'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $appointments = QueryBuilder::for(Appointment::class)
            ->allowedSorts('date', 'created_at', 'id',
                AllowedSort::custom('patient.name', new RelationSort()),
                AllowedSort::custom('appointment_type.name', new RelationSort()),
                AllowedSort::custom('doctor.name', new RelationSort(), 'doctor.employee.name')
            )
            ->allowedFilters(AllowedFilter::exact('id'),
                'doctor_id',
                'appointment_type_id',
                AllowedFilter::scope('patient', 'patientSearch'),
                AllowedFilter::scope('date'),
                AllowedFilter::scope('created_at')
            );

        if (isset($request->filter['status'])) {
            $statusAppointments = $appointments->get()->where('status', $request->filter['status']);
            if ($statusAppointments->count()) {
                $appointments = $statusAppointments
                    ->toQuery()
                    ->with('doctor', 'patient', 'appointmentType')
                    ->paginate($request->get('per_page'));

            } else {
                $appointments = [];
            }
        } else {
            $appointments = $appointments->paginate($request->get('per_page'));
        }


        $appointmentTypes = AppointmentType::all();
        return Inertia::render('Appointments/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.appointments')]),
            'data' => ModelCollection::make($appointments),
            'appointment_types' => $appointmentTypes,
            'doctors' => Doctor::all(),
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
        $data['employee_id'] = auth()->user()->userable_id;
        $appointment = Appointment::create($data);

        return success(to: route('dashboard.appointments.show', $appointment->id));

    }

    public function update(AppointmentUpdateRequest $request, Appointment $appointment)
    {

        $data = $request->validated();

        if (!Carbon::parse($data['date'])->isToday()) {
            $data['doctor_id'] = null;
        }

        $data['price'] = AppointmentType::find($data['appointment_type_id'])->price;
        $appointment->update($data);

        return success(to: route('dashboard.appointments.show', $appointment->id));
    }

    public function show(Appointment $appointment)
    {
        $appointment->load('patient', 'appointmentProducts.product', 'appointmentProducts.appointment', 'transactions');
        $appointmentTypes = AppointmentType::all();
        $doctor = UserService::authDoctor();

        return Inertia::render('Appointments/Show', [
            'data' => $appointment,
            'appointment_types' => $appointmentTypes,
            'doctors' => Doctor::all(),
            'products' => $doctor?->products,
            'meta' => meta()->metaValues(['title' => [__('dashboard.field_id', ['field' => __('dashboard.appointment'), 'id' => $appointment->id]), __('dashboard.appointments')]]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        $appointment->delete();

        return redirect()
            ->route('dashboard.appointments.index');
    }

    public function transaction(AppointmentTransactionRequest $request, Appointment $appointment)
    {
        $data = $request->validated();

        TransactionService::deposit(
            transactionable: $appointment,
            data: [
                'amount' => $data['amount'],
                'status' => 'pending',
            ]);

        return success();
    }
}
