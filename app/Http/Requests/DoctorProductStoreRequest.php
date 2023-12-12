<?php

namespace App\Http\Requests;

use App\Models\Stock;
use Illuminate\Foundation\Http\FormRequest;

class DoctorProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): ?bool
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
            'doctor_id' => ['required', 'numeric', 'exists:doctors,id'],
            'stock_id' => ['required', 'numeric', 'exists:stocks,id'],
            'quantity' => ['required', 'numeric', 'between:0,' . Stock::find($this->request->stock_id)->available],
        ];
    }
}
