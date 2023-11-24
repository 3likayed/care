<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Reservation extends Model
{
    use SoftDeletes;

    protected $guarded = [];
    protected $casts = ['date' => 'datetime:Y-m-d g:i A', 'created_at' => 'datetime:Y-m-d g:i A'];
    protected $dateFormat = 'Y-m-d g:i A';

    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    public function reservationType(): BelongsTo
    {
        return $this->belongsTo(ReservationType::class);
    }

    public function scopeFilter($query, array $filters)
    {

        return $query
            ->when($filters['type'] ?? null, function ($query, $type) {
                $query->where('reservation_type_id', 'like', "%$type%");
            })->when($filters['start'] ?? null, function ($query, $start) {
                $query->where('date', '>=', Carbon::parse($start));
            })->when($filters['end'] ?? null, function ($query, $end) {
                $query->where('date', '<=', Carbon::parse($end)->addDay());
            })->when($filters['trashed'] ?? null, function ($query, $trashed) {
                if ($trashed === 'with') {
                    $query->withTrashed();
                } elseif ($trashed === 'only') {
                    $query->onlyTrashed();
                }
            });
    }

}
