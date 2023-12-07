<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MetaResource extends JsonResource
{
    public static $wrap = null;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed
     */
    public function toArray(?Request $request = null): array
    {
        $title = $this['title'] ?? '';
        $title .= $this['with_site_title'] ? ' | ' : '';
        $title .= $this['with_site_title'] ? settings()?->name : '';

        return [
            'title' => $this->trim($title),
            'description' => $this->trim($this['description'] ?? ''),
            'keywords' => $this->trim($this['keywords'] ?? ''),
            'image' => $this->trim($this['image'] ?? asset('assets/logo.png')),
        ];
    }

    private function trim(string $string): array|string
    {
        return str_replace(['\'', '"', ',', ';', '<', '>'], '', $string);
    }
}
