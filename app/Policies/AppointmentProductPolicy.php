<?php

namespace App\Policies;

use App\Models\Appointment;
use App\Models\AppointmentProduct;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Auth\Access\HandlesAuthorization;

class AppointmentProductPolicy
{
    use HandlesAuthorization;


    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, AppointmentProduct $appointmentProduct)
    {
        if (UserService::authDoctor()->id === $appointmentProduct->doctor->id && $appointmentProduct->appointment->status != 'completed') {
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
    public function delete(User $user, AppointmentProduct $appointmentProduct)
    {

        if (UserService::authDoctor()->id === $appointmentProduct->doctor->id && $appointmentProduct->appointment->status != 'completed') {
            return true;
        }

        return $this->deny(__('dashboard.cant_delete'));
    }

}
