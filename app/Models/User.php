<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasRoles, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'password',
        'userable_type',
        'userable_id',

    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected $appends = ['role', 'permission_names'];

    public function scopeSearch($query, $date)
    {
        return $query->where('name', 'like', "%$date%")
            ->orWhere('email', 'like', '%$date%');
    }

    public function userable(): MorphTo
    {
        return $this->morphTo();
    }

    public function isSuperAdmin(): Attribute
    {
        return Attribute::get(fn() => $this->role->name === 'super-admin');
    }

    protected function role(): Attribute
    {
        return Attribute::get(
            fn() => $this->roles()->first(),
        );
    }

    protected function permissionNames(): Attribute
    {
        return Attribute::get(
            function () {
                return $this->getAllPermissions()->map(
                    fn($permission) => $permission = $permission->name
                );
            }
        );
    }

    protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}
