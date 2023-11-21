<?php

namespace App\Services\MediaLibrary;

use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator;

class MediaCustomPathGenerator implements PathGenerator
{
    public function getPathForConversions(Media $media): string
    {
        return $this->getPath($media).'c\\';
    }

    public function getPath(Media $media): string
    {
        return 'media\\'.$media->id.'\\';
    }

    public function getPathForResponsiveImages(Media $media): string
    {
        return $this->getPath($media).'r\\';
    }
}
