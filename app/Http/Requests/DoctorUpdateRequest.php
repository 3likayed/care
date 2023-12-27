<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class DoctorUpdateRequest extends FormRequest
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
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {

        return [
            'name' => 'required|string|max:255',
            'phone' => ['required', 'array', 'min:1'],
            'phone.*' => ['required', 'numeric', 'digits:11'],
            'address' => ['required', 'array', 'min:1'],
            'address.*' => ['required', 'string', 'between:5,100'],
            'specializations' => ['required', 'Array'],
            'specializations.*' => ['required', 'numeric', 'exists:specializations,id'],
            'user.email' => ['required', 'email', 'max:255', 'unique:users,email,'.$this->route('doctor')->user->id],
            'user.role' => ['required', 'numeric', 'exists:roles,id'],
            'user.password' => ['nullable', 'confirmed', Password::defaults()],
        ];
    }
}
