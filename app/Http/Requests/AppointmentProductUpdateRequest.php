<?php

namespace App\Http\Requests;

use App\Models\Appointment;
use App\Models\AppointmentProduct;
use App\Models\Doctor;
use App\Models\Product;
use App\Services\UserService;
use Illuminate\Foundation\Http\FormRequest;

class AppointmentProductUpdateRequest extends FormRequest
{
    public ?Doctor $doctor;

    public ?Product $doctorProduct;

    public ?Appointment $appointment;

    public ?AppointmentProduct $appointmentProduct;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): ?bool
    {
        if ($this->doctor) {
            return $this->appointment->doctor?->is($this->doctor);
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
            'quantity' => ['required', 'numeric', 'between:1,'.$this->doctorProduct->pivot->available + $this->appointmentProduct->quantity],
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->appointmentProduct = $this->route('appointment_product');
        $this->doctor = UserService::authDoctor();
        $this->appointment = Appointment::find($this->appointmentProduct->appointment_id);
        $this->doctorProduct = $this->doctor->products()->where('product_id', '=', $this->appointmentProduct->product_id)->first();
    }
}
