<?php

namespace App\Http\Requests;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Http\FormRequest;

class AppointmentUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }
    protected function failedAuthorization()
    {
        throw  new AuthorizationException(__('cant_Update'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'appointment_type_id' => ['required', 'exists:appointment_types,id'],
            'date' => ['required', 'date', 'after:'.now()],
            'doctor_id' => ['nullable', 'numeric', 'exists:doctors,id'],

        ];
    }
}
