<?php

namespace App\Http\Requests;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Services\UserService;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class AppointmentServiceStoreRequest extends FormRequest
{
    public ?Doctor $doctor;
    public ?Appointment $appointment;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'appointment_id' => ['required', 'numeric', 'exists:appointments,id'],
            'service_id' => ['required', 'numeric', 'exists:services,id'],
            'tool_id' => ['required', 'numeric', 'exists:tools,id'],
            'tool_consumption' => ['required', 'numeric', 'gt:0'],
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->doctor = UserService::authDoctor();
        $this->appointment = Appointment::find($this->appointment_id);

    }
}
