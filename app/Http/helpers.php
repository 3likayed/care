<?php

use App\Models\Setting;
use App\Services\FilesService;
use App\Services\MediaLibrary\MediaService;
use App\Services\MetaService;
use Illuminate\Http\RedirectResponse;

if (! function_exists('translations')) {
    function translations($file, $locale = null)
    {
        $desiredLocale = $locale ?? app()->currentLocale();
        $json = base_path('lang/'.$desiredLocale."/$file.php");
        if (! file_exists($json)) {
            return [];
        }

        return include $json;
    }
}
if (! function_exists('translationValidation')) {
    function translationValidation(array $rules): array
    {
        $calculatedRules = [];
        foreach ($rules as $key => $rule) {
            foreach (array_keys(config('laravellocalization.supportedLocales')) as $locale) {
                $calculatedRules["$key.$locale"] = $rule;
            }
        }

        return $calculatedRules;
    }
}
if (! function_exists('deepTranslationValidation')) {
    function deepTranslationValidation(array $rules): array
    {
        $calculatedRules = [];
        foreach ($rules as $key => $rule) {
            foreach (array_keys(config('laravellocalization.supportedLocales')) as $locale) {
                foreach ($rule as $ruleKey => $deepRule) {
                    $calculatedRules["$key.*.$locale.$ruleKey"] = $deepRule;
                }
            }
        }

        return $calculatedRules;
    }
}
if (! function_exists('metaValidation')) {
    function metaValidation(?array $rules = null): array
    {
        return [
            'meta.description' => ['required', 'min:3', 'max:255'],
            'meta.title' => ['required', 'min:3', 'max:255'],
            'meta.keywords' => ['required', 'min:3', 'max:255'],
        ];
    }
}
if (! function_exists('success')) {
    function success($message = null): RedirectResponse
    {
        if (! $message) {
            $message = __('dashboard.done');
        }

        return back()->with('success', $message);
    }

}
if (! function_exists('error')) {
    function error($message = null,$status=500): RedirectResponse
    {
        if (! $message) {
            $message = __('dashboard.error');
        }

        return back()->with('error', $message)->withErrors($message);
    }
}
if (! function_exists('sluggify')) {
    function sluggify(?string $str = null, $delimiter = '-')
    {
        $str = trim($str);
        $str = str_replace(['(', ')'], '', $str);
        $str = mb_strtolower($str, 'UTF-8');
        $str = preg_replace("/[^a-z0-9_\s\-ءاأإآؤئبتثجحخدذرزسشصضطظعغفقكلمنهويةى]#u/", '', $str);
        $str = preg_replace("/[\s-]+/", ' ', $str);
        $str = preg_replace("/[\s_]/", $delimiter, $str);

        return $str;
    }

}

if (! function_exists('settings')) {
    function settings($param = null)
    {
        $data = Setting::staticsData();
        if ($param) {
            return $data->$param;
        }

        return $data;
    }
}
if (! function_exists('meta')) {
    function meta(): MetaService
    {
        return new MetaService();
    }
}
if (! function_exists('files')) {
    function files(): FilesService
    {
        return new FilesService();
    }
}
if (! function_exists('media')) {
    function media(): MediaService
    {
        return new MediaService();
    }
}
