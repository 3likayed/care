<?php

namespace App\Http\Requests;

use App\Models\Package;
use Illuminate\Foundation\Http\FormRequest;

class PatientPackageStoreRequest extends FormRequest
{

    public Package $package;

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
        $this->package = Package::find($this->package_id);
        return [
            'patient_id' => ['required', 'numeric', 'exists:patients,id'],
            'package_id' => ['required', 'numeric', 'exists:packages,id'],
            'quantity' => ['required', 'numeric', 'between:' . $this->package->min . "," . $this->package->max],
        ];
    }
}
