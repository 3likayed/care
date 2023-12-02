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
}
