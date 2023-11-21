<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class SettingUpdateRequest extends FormRequest
{
    private array $additionalRules;

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
        $rules = [
            'contact' => ['nullable', 'max:255', 'string'],
            'social.facebook' => ['nullable', 'url'],
            'social.twitter' => ['nullable', 'sometimes', 'url'],
            'social.instagram' => ['nullable', 'url'],
            'social.youtube' => ['nullable', 'url'],
            'social.linkedin' => ['nullable', 'url'],
            'phone' => ['nullable', 'array'],
            'phone.*.number' => ['required_with:phone.*', 'phone:phone.*.country_code'],
            'phone.*.country_code' => ['required_with:phone.*'],
            'whatsapp' => ['nullable', 'array'],
            'whatsapp.*.number' => ['required_with:whatsapp.*', 'phone:whatsapp.*.country_code'],
            'whatsapp.*.country_code' => ['required_with:whatsapp.*'],
            'email' => ['nullable', 'array'],
            'email.*' => ['nullable', 'email'],
            'location' => ['nullable', 'array'],
            'location.lat' => ['required_with:location.*', 'between:-90,90'],
            'location.lng' => ['required_with:location.*', 'between:-180,180'],
        ];

        return array_merge($this->additionalRules, $rules);
    }

    protected function prepareForValidation(): void
    {
        $phones = collect(array_values($this->phone))->unique()->map(function ($item, $key) {
            return $item;
        })->toArray();
        $whatsapps = collect(array_values($this->whatsapp))->unique()->map(function ($item, $key) {
            return $item;
        })->toArray();
        $this->merge([
            'email' => collect(array_values($this->email))->unique()->toArray(),
            'phone' => $phones,
            'whatsapp' => $whatsapps,
        ]);
        $this->additionalRules = translationValidation([
            'name' => ['required', 'max:255', 'string'],
            'description' => ['required', 'max:1000', 'string'],
            'title' => ['required', 'max:255', 'string'],
        ]);
        $this->additionalRules += translationValidation(meta()->metaValidation(true));

    }
}
