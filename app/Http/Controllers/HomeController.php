<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Employee;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {

        $appointments = Appointment::today()->get();
        $visits = Appointment::visit()->get();
        return Inertia::render('Home', [
            'data' => [
                'employees_count' => Employee::count(),
            ],
            'appointments' => $appointments,
            'visits' => $visits,
            'meta' => meta()->metaValues(['title' => __('dashboard.dashboard')]),
        ]);
    }
}
