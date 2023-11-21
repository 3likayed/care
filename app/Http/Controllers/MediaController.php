<?php

namespace App\Http\Controllers;

use Spatie\MediaLibrary\MediaCollections\Models\Media;
use function App\Http\Controllers\Dashboard\error;
use function App\Http\Controllers\Dashboard\success;

class MediaController extends Controller
{
    public function destroy(Media $media)
    {
        return $media->delete() ? success() : error();
    }

    public function makePrimary(Media $media)
    {
        return media()->makePrimary($media) ? success() : error();
    }
}
