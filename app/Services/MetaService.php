<?php

namespace App\Services;

use App\Http\Resources\MetaResource;

class MetaService
{
    public function translatableSluggify(array $data)
    {
        $slugs = [];
        foreach (array_keys(config('laravellocalization.supportedLocales')) as $locale) {
            $slugs[$locale] = sluggify($data[$locale]);
        }

        return $slugs;
    }

    public function metaValues(mixed $meta = [], bool $withSiteTitle = true)
    {
        $meta['with_site_title'] = $withSiteTitle;

        return MetaResource::make($meta);
    }

    public function metaValidation($nullableSlug = false)
    {

        return [
            'meta.description' => ['required', 'min:3', 'max:255'],
            'meta.title' => ['required', 'min:3', 'max:255'],
            'meta.slug' => [$nullableSlug ? 'nullable' : 'required', 'max:255'],
            'meta.keywords' => ['required', 'min:3', 'max:255'],
        ];
    }

    private function sluggify(string $str = null, $delimiter = '-')
    {
        $str = trim($str);
        $str = mb_strtolower($str, 'UTF-8');
        $str = preg_replace("/[^a-z0-9_\s\-ءاأإآؤئبتثجحخدذرزسشصضطظعغفقكلمنهويةى]#u/", '', $str);
        $str = preg_replace("/[\s-]+/", ' ', $str);
        $str = preg_replace("/[\s_]/", $delimiter, $str);

        return $str;

    }
}
