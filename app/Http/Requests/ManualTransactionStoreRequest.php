<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ManualTransactionStoreRequest extends FormRequest
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
        $purchase = $this->route('purchase');

        return [
            'amount' => ['required', 'numeric', 'min:1'],
            'type' => ['required', 'in:,deposit,withdraw'],
            'notes' => ['nullable', 'string','max:512'],
        ];
    }
}
