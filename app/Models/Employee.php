<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class Employee extends Authenticatable
{
    use HasApiTokens, HasRoles, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'address',
        'phone',
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
        'address' => 'array',
        'phone' => 'array',
    ];

    protected $appends = ['role'];

    protected function role(): Attribute
    {
        return Attribute::get(
            fn() => $this->roles()->first(),
        );
    }
    public function scopeSearch( $query, $date)
    {
        return $query->where('name', 'like', "%$date%")
            ->orWhere('email','like','%$date%');
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
