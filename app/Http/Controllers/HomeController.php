<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\AppointmentType;
use App\Models\Doctor;
use App\Models\Employee;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {

        $appointments = Appointment::today()->whereNull('doctor_id')->get();
        $visits = Appointment::today()->visit()->get();
        $doctors = Doctor::all();
        $appointmentTypes = AppointmentType::all();
        return Inertia::render('Home', [
            'data' => [
                'employees_count' => Employee::count(),
                'doctors_count' => $doctors->count(),
                'patients_count' => $doctors->count(),
                'appointments_count' => $appointments->count(),
                'visits_count' => $visits->count(),
            ],
            'appointments' => $appointments,
            'appointment_types' => $appointmentTypes,
            'visits' => $visits,
            'doctors' => $doctors,
            'meta' => meta()->metaValues(['title' => __('dashboard.home')]),
        ]);
    }
}
