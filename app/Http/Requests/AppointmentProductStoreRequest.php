<?php

namespace App\Http\Requests;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Services\UserService;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Http\FormRequest;

class AppointmentProductStoreRequest extends FormRequest
{
    public ?Doctor $doctor;

    public ?Collection $doctorProducts;

    public ?Appointment $appointment;

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
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $productQuantity = [];

        foreach ($this->products as $key => $appointmentProduct) {
            $max = $this->doctorProducts->find($appointmentProduct['id'])->pivot->available;
            $productQuantity["products.$key.quantity"] = ['required', 'numeric', 'between:0,'.$max];
            $productQuantity["products.$key.id"] = ['required', 'distinct', 'numeric', 'exists:products,id'];
        }

        return array_merge([
            'appointment_id' => ['required', 'exists:appointments,id'],
            'products' => ['required', 'array', 'min:1'],
        ], $productQuantity);
    }

    protected function prepareForValidation(): void
    {
        $this->doctor = UserService::authDoctor();
        $this->appointment = Appointment::find($this->appointment_id);
        $this->doctorProducts = $this->doctor->products()->whereIn('products.id', collect($this->products)->pluck('id'))->get();
    }
}
