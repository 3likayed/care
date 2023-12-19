<?php

namespace App\Traits;



trait OrderByIdDesc
{
    public static function bootOrderByIdDesc()
    {
        static::addGlobalScope('order',function ($query){
            $query->orderByDesc('id');
        });
    }
}
