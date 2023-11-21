<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request = null): array
    {

        if (! empty($this->resource)) {
            return [
                'id' => $this->id,
                'title' => $this->file_name,
                'url' => str_replace('\\', '/', $this->original_url),
            ];
        }

        return [];
    }
}
