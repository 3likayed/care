<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PackageStoreRequest extends FormRequest
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
            'name' => ['required', 'string', 'between:3,50'],
            'unit_price' => ['required', 'numeric', 'gt:0'],
            'min' => ['required', 'numeric', "min:0"],
            'max' => ['required', 'numeric', "min:$this->min"],
            'service_id' => ['required', 'numeric', 'exists:services,id'],

        ];
    }
}
