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
        return [
            'supplier_id' =>['required'],
            'products.*.id' => ['distinct', 'min:1','required'],
            'products.*.quantity' => ['numeric', 'min:0','required'],
            'products.*.price' => ['numeric', 'min:1','required'],
            'notes' =>['nullable','string','max:150'],

        ];
    }
}
