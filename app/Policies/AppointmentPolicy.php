<?php

namespace App\Policies;

use App\Models\Appointment;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AppointmentPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Appointment $appointment)
    {
        if (!$appointment->doctor_id) {
            return true;
        }
        return $this->deny(__('dashboard.cant_update'));
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Appointment $appointment)
    {
        if (!$appointment->doctor_id) {
            return true;
        }
        return $this->deny(__('dashboard.cant_delete'));
    }


}
