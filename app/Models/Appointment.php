<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    protected $casts = ['date' => 'datetime:Y-m-d g:i A', 'created_at' => 'datetime:Y-m-d g:i A'];

    protected $dateFormat = 'Y-m-d g:i A';

    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    public function appointmentType(): BelongsTo
    {
        return $this->belongsTo(AppointmentType::class);
    }

    public function scopePatientSearch($query, $value)
    {
        return $query->whereRelation('patient', 'name', 'like', "%$value%")
            ->orWhereRelation('patient', 'email', 'like', "%$value%")
            ->orWhereRelation('patient', 'phone', 'like', "%$value%");
    }

    public function scopeStart($query, $value)
    {
        return $query->where('date', '>=', $value);
    }

    public function scopeEnd($query, $value)
    {
        return $query->where('date', '<=', Carbon::parse($value)->addDay());
    }


}
