<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppointmentStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        return [
            'patient_id' => ['required', 'exists:patients,id'],
            'appointment_type_id' => ['required', 'exists:appointment_types,id'],
            'doctor_id' => ['nullable', 'numeric', 'exists:doctors,id'],
            'date' => ['required', 'date', 'after:'.now()],
        ];
    }
}
