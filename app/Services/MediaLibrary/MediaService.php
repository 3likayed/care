<?php

namespace App\Services\MediaLibrary;

use Image;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaService
{
    private string $type = 'image';

    public function updateMediaFromRequest($model, $index = 'image', $collection = 'image', array $size = null): void
    {

        if (request()->file($index)) {
            $this->clearMedia($model, $collection);
            $this->storeMediaFromRequest($model, $index, $collection, $size);
        }
    }

    private function clearMedia($model, $collection)
    {
        $model->getMedia($collection)->each(function ($item) {
            $item->delete();
        });
    }

    public function storeMediaFromRequest($model, $index = 'image', $collection = 'image', ?array $size = []): void
    {

        if (request()->file($index)) {
            $image = $model->addMediaFromRequest($index)->toMediaCollection($collection);
            if ($this->type === 'image') {
                /* $this->optimize($image, $size);*/
            }
        }

    }

    public function updateMediaFromUrl($model, string $url, string $collection = 'image'): void
    {
        $this->clearMedia($model, $collection);
        $this->storeMediaFromUrl($model, $url, $collection);
    }

    public function storeMediaFromUrl($model, string $url, string $collection = 'image'): void
    {
        $image = $model->addMediaFromUrl($url)->toMediaCollection($collection);
    }

    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    public function updateMultipleMediaFromRequest($model, $index = 'images', $collection = 'image', array $size = null): void
    {

        if (request()->file($index)) {
            $this->clearMedia($model, $collection);
            $this->storeMultipleMediaFromRequest($model, $index, $collection, $size);
        }

    }

    public function storeMultipleMediaFromRequest($model, $index = 'images', $collection = 'images', array $size = null): void
    {
        if (request()->file($index)) {
            foreach (request()->file($index) as $key => $file) {
                $this->storeMediaFromRequest($model, "$index.$key", $collection, $size);
            }
        }

    }

    public function makePrimary(Media $media): bool
    {
        $media->model->getMedia($media->collection_name)->each(function ($model) {
            $model->forgetCustomProperty('primary');
            $model->save();
        });

        $media->setCustomProperty('primary', true);

        return $media->save();

    }

    public function destroy(Media $media)
    {

        return $media->delete();

    }

    public function get($id)
    {
        return Media::find($id);
    }

    private function optimize($image, $size): void
    {

        $converted = Image::make(str_replace('\\', '/', $image->getPath()));
        if (! empty($size)) {
            $converted->resize($size[0], $size[1]);
        }
        $converted->encode('webp');
        $converted->save();
        $image->file_name = $converted->filename.'.webp';
        $image->save();

    }
}
