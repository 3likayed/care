<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class FilesService
{
    public function deleteFile($path): bool
    {
        return Storage::delete($path);
    }

    public function uploadFiles($images, $folder = ''): array
    {
        $images_array = [];
        foreach ($images as $image) {
            array_push($images_array, $this->uploadFile($image, $folder));
        }

        return $images_array;
    }

    public function uploadFile($image, $folder): bool|string
    {

        return Storage::putFile($folder, $image);

    }
}
