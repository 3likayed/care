<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SalaryStoreRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        return [
            'employee_id' => ['required', 'numeric', 'exists:employees,id'],
            'salary_amount' => ['required', 'numeric', 'min:0'],
            'insurance_amount' => ['required', 'numeric', 'min:0', 'lt:salary_amount']
        ];
    }
}
