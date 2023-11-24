<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Meta extends Model
{
    protected $fillable = ['title', 'description', 'keywords', 'slug'];

    public function model(): MorphTo
    {
        return $this->morphTo();

    }
}
