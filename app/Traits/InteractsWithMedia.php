<?php

namespace App\Traits;

use Illuminate\Support\Collection;
use Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection;

trait InteractsWithMedia
{
    use \Spatie\MediaLibrary\InteractsWithMedia;

    public function getPrimaryMediaAttribute()
    {
        return $this->getMedia('image', function ($media) {
            return isset($media->custom_properties['primary']);
        })->first() ?? $this->media->first();
    }

    public function getImageAttribute()
    {
        return $this->getMedia('image')->first() ?? [];
    }

    public function getVideoAttribute()
    {
        return $this->getMedia('video')->first() ?? [];
    }

    public function getImagesAttribute(): MediaCollection|array|Collection
    {
        $images = $this->getMedia('images');

        return $images->first() ? $images : [];
    }

    public function getVideosAttribute(): MediaCollection|Collection|array
    {
        $videos = $this->getMedia('videos');

        return $videos->first() ? $videos : [];
    }

    public function getIconAttribute()
    {
        return $this->getMedia('icon')->first() ?? $this->image;
    }
}
