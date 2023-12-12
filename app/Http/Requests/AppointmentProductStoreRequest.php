<?php

namespace App\Http\Requests;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Employee;
use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;

class AppointmentProductStoreRequest extends FormRequest
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
        $productQuantity = [];
        $products = Product::whereIn('id', collect($this->products)->pluck('id'))->get();
        foreach ($this->products as $key => $appointmentProduct) {
            $max = $products->find($appointmentProduct['id'])->available;
            $productQuantity ["products.$key.quantity"] = ['required', 'numeric', 'between:0,' . $max];
            $productQuantity ["products.$key.id"] = ['required', 'distinct', 'numeric', 'exists:products,id'];
        }

        return array_merge([
            'appointment_id' => ['required', 'exists:appointments,id'],
            'products' => ['required', 'array', 'min:1'],
        ], $productQuantity);
    }
}
