<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoleStoreRequest extends FormRequest
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
            'name' => ['required', 'max:255', 'unique:roles,name'],
            'permissions' => ['required', 'array'],
            'permissions.*.id' => ['required', 'exists:permissions,id'],
            'permissions.*.name' => ['required', 'exists:permissions,name'],
            'permissions.*.checked' => ['required', 'bool'],
        ];
    }
}
