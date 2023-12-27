<?php

namespace App\Http\Requests;

use App\Models\Employee;
use Illuminate\Foundation\Http\FormRequest;

class SalaryPayStoreRequest extends FormRequest
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
        $total_loan = Employee::find($this->employee_id)->CurrentMonthLoanActions;
        return [
            'employee_id' => ['required', 'numeric', 'exists:employees,id'],
            'paid_loan' => ['nullable', 'numeric', 'min:0', 'max:' . $total_loan],
            'picked' => ['nullable', 'in:total_loan,partial_loan'],
        ];
    }
}
