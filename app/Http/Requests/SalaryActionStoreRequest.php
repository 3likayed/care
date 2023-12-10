<?php

namespace App\Http\Requests;

use App\Models\Employee;
use Illuminate\Foundation\Http\FormRequest;

class SalaryActionStoreRequest extends FormRequest
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
        $salaryNetAmount = Employee::find($this->employee_id)->salary->netAmount;
        return [
            'employee_id' => ['required', 'numeric', 'exists:employees,id'],
            'amount' => ['required', 'numeric', 'between:0,' . $salaryNetAmount],
            'reason' => ['required', 'in:giving,withhold,salary,loan'],
            'picked' => ['required','in:now,later,other']
        ];
    }
}
