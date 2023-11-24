<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\SoftDeletes;
use Staudenmeir\EloquentHasManyDeep\HasManyDeep;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;

class Patient extends Model
{
    use HasRelationships, SoftDeletes;

    protected $guarded = [];

    protected $casts = ['phone' => 'array', 'address' => 'array'];

    public function reservations(): HasMany
    {
        return $this->hasMany(Reservation::class);
    }

    public function payments(): HasManyThrough
    {
        return $this->hasManyThrough(Payment::class, Reservation::class);
    }

    public function bills(): HasManyDeep
    {
        return $this->hasManyDeep(Bill::class, [Reservation::class, Payment::class]);
    }

    public function scopeFilter($query, array $filters)
    {

        return $query
            ->when($filters['id'] ?? null, function ($query, $id) {
                $query->where('id', '=', $id);
            })
            ->when($filters['search'] ?? null, function ($query, $search) {
                $query->orWhere('name', 'like', "%$search%")
                    ->orWhere('phone', 'like', "%$search%");
            })->when($filters['trashed'] ?? null, function ($query, $trashed) {
                if ($trashed === 'with') {
                    $query->withTrashed();
                } elseif ($trashed === 'only') {
                    $query->onlyTrashed();
                }
            });
    }

    protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}
