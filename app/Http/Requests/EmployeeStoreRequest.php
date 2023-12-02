<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class EmployeeStoreRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'phone' => ['required', 'array', 'min:1'],
            'phone.*' => ['required', 'numeric', 'digits:11'],
            'address' => ['required', 'array', 'min:1'],
            'address.*' => ['required', 'string', 'between:5,100'],
            'user.email' => ['required_with:user.password,user.role', 'nullable', 'email', 'max:255', 'unique:users,email'],
            'user.role' => ['required_with:user.email,user.password', 'nullable', 'exists:roles,id'],
            'user.password' => ['required_with:user.email,user.role', 'nullable', 'confirmed', Password::defaults()],

        ];
    }
}
