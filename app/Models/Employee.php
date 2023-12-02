<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Employee extends Authenticatable
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'address',
        'phone',
        'user_id',
    ];

    protected $with = ['user'];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [

        'address' => 'array',
        'phone' => 'array',
    ];

    public function scopeSearch($query, $date)
    {
        return $query->where('name', 'like', "%$date%")
            ->orWhere('email', 'like', '%$date%');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function doctor(): HasOne
    {
        return $this->hasOne(Doctor::class);
    }

    protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}
