<?php

namespace App\Http\Requests;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class AppointmentUpdateRequest extends FormRequest
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
        $validation = [
            'appointment_type_id' => ['required', 'exists:appointment_types,id'],
            'date' => ['required', 'date', 'after:' . now()],
            'doctor_id' => ['nullable', 'numeric', 'exists:doctors,id']

        ];

        return $validation;
    }
}
