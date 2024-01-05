<?php

namespace App\Models;

use Carbon\Carbon;
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
        return $this->belongsToMany(Service::class, PatientPackage::class)->withPivot('available', 'unit_price');
    }

    public function doctorServices(): HasMany
    {
        return $this->hasMany(PatientPackage::class);
    }

    protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }

    public function scopeCreatedAt($query, $value)
    {
        $value = explode('|', $value);
        $query->whereDate('created_at', '>=', Carbon::parse($value[0]));
        if (isset($value[1])) {
            $query->whereDate('created_at', '<=', Carbon::parse($value[1]) ?? null);
        }

        return $query;
    }
    public function scopeBirthday($query, $value)
    {
        $value = explode('|', $value);
        $query->whereDate('birthday', '>=', Carbon::parse($value[0]));
        if (isset($value[1])) {
            $query->whereDate('birthday', '<=', Carbon::parse($value[1]) ?? null);
        }

        return $query;
    }
}
