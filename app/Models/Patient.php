<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;

class Patient extends Model
{
    use HasRelationships, SoftDeletes;

    protected $guarded = [];

    protected $casts = ['phone' => 'array', 'address' => 'array'];

    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }


    public function scopeSearch($query, $date)
    {
        return $query->where('name', 'like', "%$date%")
            ->orWhere('email', 'like', "%$date%")
            ->orWhere('phone', 'like', "%$date%");
    }

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class, PatientService::class)->withPivot('available', 'unit_price');
    }

    public function doctorServices(): HasMany
    {
        return $this->hasMany(PatientService::class);
    }

    protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}
