<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ToolStoreRequest extends FormRequest
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
            'name' => ['required', 'string', 'between:3,50','unique:tools,name'],
            'unit_price' => ['required', 'numeric', 'gt:0'],
            'consumed_quantity' => ['required', 'numeric', 'gte:0'],
            'observe_quantity' => ['required', 'numeric', 'gte:' . $this->consumed_quantity],

        ];
    }
}
