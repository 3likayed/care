<?php

namespace App\Policies;

use App\Models\Appointment;
use App\Models\AppointmentService;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Auth\Access\HandlesAuthorization;

class AppointmentServicePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, AppointmentService $appointmentService)
    {
        if (UserService::authDoctor()->id === $appointmentService->doctor->id && $appointmentService->appointment->status != 'completed') {
            return true;
        }

        return $this->deny(__('dashboard.cant_update'));
    }

    public function create(User $user)
    {
        $appointment = Appointment::find(request()->appointment_id);
        if (UserService::authDoctor()->id === $appointment?->doctor_id && $appointment->status != 'completed') {
            return true;
        }

        return $this->deny(__('dashboard.cant_create'));
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, AppointmentService $appointmentService)
    {

        if (UserService::authDoctor()->id === $appointmentService->doctor->id && $appointmentService->appointment->status != 'completed') {
            return true;
        }

        return $this->deny(__('dashboard.cant_delete'));
    }
}
