<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SupplierUpdateRequest extends FormRequest
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
            'name' => ['required', 'string', 'between:5,50'],
            'phone' => ['required', 'array', 'min:1'],
            'phone.*' => ['required', 'numeric', 'digits:11'],
            'address' => ['required', 'array', 'min:1'],
            'address.*' => ['required', 'string', 'between:5,100'],

        ];
    }
}
