<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PurchaseStoreRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $sum = 0;
        foreach ($this->stockables as $stockable) {
            $sum += ($stockable['quantity'] ?? 0) * ($stockable['price'] ?? 0);
        }

        return [
            'supplier_id' => ['required'],
            'stockables' => ['required', 'array', 'min:1'],
            'stockables.*.id' => ['required', 'numeric'],
            'stockables.*.quantity' => ['numeric', 'min:0', 'required'],
            'stockables.*.price' => ['numeric', 'min:1', 'required'],
            'stockables.*.expires_at' => ['nullable', 'date', 'after:' . now()],
            'notes' => ['nullable', 'string', 'max:150'],
            'paid_price' => ['nullable', 'numeric', "between:1,$sum"],

        ];
    }
}
