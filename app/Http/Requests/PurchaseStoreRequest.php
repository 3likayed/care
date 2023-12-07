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
        foreach ($this->products as $product) {
            $sum += ($product['quantity'] ?? 0) * ($product['price'] ?? 0);
        }
        dd($this->request);
        return [
            'supplier_id' => ['required'],
            'products' => ['required', 'array', 'min:1'],
            'products.*.id' => ['required', 'min:1'],
            'products.*.quantity' => ['numeric', 'min:0', 'required'],
            'products.*.price' => ['numeric', 'min:1', 'required'],
            'products.*.expires_at' => ['nullable', 'date', 'after:' . now()],
            'notes' => ['nullable', 'string', 'max:150'],
            'paid_price' => ['nullable', 'numeric', "between:1,$sum"],

        ];
    }
}
