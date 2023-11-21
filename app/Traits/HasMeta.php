<?php

namespace App\Traits;

use App\Models\Meta;

trait HasMeta
{
    public function meta()
    {
        return $this->morphOne(Meta::class, 'model');
    }
}
