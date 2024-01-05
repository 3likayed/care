<?php

namespace App\Models;

use App\Traits\OrderByIdDesc;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use OrderByIdDesc, SoftDeletes;

    protected $guarded = [];

    protected $casts = ['date' => 'datetime:Y-m-d g:i A', 'created_at' => 'datetime:Y-m-d g:i A'];

    protected $dateFormat = 'Y-m-d g:i A';

    protected $with = ['patient:id,name', 'appointmentType:id,name', 'doctor:id,name'];

    protected $appends = ['name', 'total_remaining', 'total_price'];

    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    public function appointmentType(): BelongsTo
    {
        return $this->belongsTo(AppointmentType::class);
    }

    public function totalPrice(): Attribute
    {
        return Attribute::get(
            fn ($value, $model) => $model['total_price'] + $this->appointmentProducts->sum('total_price') + $this->appointmentServices->sum('total_price') - $this->discount
        );
    }

    public function transactions(): MorphMany
    {
        return $this->morphMany(Transaction::class, 'transactionable');
    }

    public function totalRemaining(): Attribute
    {
        return Attribute::get(
            fn () => $this->total_price - $this->total_paid
        );
    }

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class)->withPivot('unit_price', 'quantity');
    }

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class)->withPivot('unit_price', 'quantity');
    }

    public function appointmentProducts(): HasMany
    {
        return $this->hasMany(AppointmentProduct::class);
    }
    public function appointmentServices(): HasMany
    {
        return $this->hasMany(AppointmentService::class);
    }
    public function scopePatientSearch($query, $value)
    {
        return $query->whereRelation('patient', 'name', 'like', "%$value%")
            ->orWhereRelation('patient', 'email', 'like', "%$value%")
            ->orWhereRelation('patient', 'phone', 'like', "%$value%");
    }

    public function scopeDate($query, $value)
    {
        $value = explode('|', $value);
        $query->whereDate('date', '>=', Carbon::parse($value[0]));
        if (isset($value[1])) {
            $query->whereDate('date', '<=', Carbon::parse($value[1]) ?? null);
        }

        return $query;
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

    public function scopeToday(Builder $query)
    {
        return $query->whereDate('date', Carbon::today())->orderBy('date');
    }

    public function scopeVisit(Builder $query)
    {
        return $query->whereNotNull('doctor_id')->orderBy('data');
    }

    public function name(): Attribute
    {
        return Attribute::get(fn () => __('dashboard.field_id', ['field' => __('dashboard.appointment'), 'id' => $this->id]));
    }

    public function updateStatus(): void
    {
        $isFullPaid = $this->total_price == $this->total_paid && $this->products->count();
        if (! $this->doctor_id) {
            if (Carbon::parse($this->date)->isBefore(Carbon::today())) {
                $status = 'canceled';
            } else {

                $status = 'pending';
            }

        } else {

            $status = $isFullPaid ? 'completed' : 'not_completed';
        }
        $this->status = $status;
        $this->update();

    }
}
