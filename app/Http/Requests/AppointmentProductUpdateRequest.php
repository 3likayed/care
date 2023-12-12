<?php

namespace App\Http\Requests;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Employee;
use Illuminate\Foundation\Http\FormRequest;

class AppointmentProductUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): ?bool
    {

        if (auth()->user()->userable_type === Employee::class && auth()->user()->userable?->employable_type == Doctor::class) {
            return Appointment::find($this->appointment_id)->doctor?->is(auth()->user()->userable?->employable);
        }
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        return [

            'quantity' => ['required', 'numeric', 'min:1'],
        ];
    }
}
