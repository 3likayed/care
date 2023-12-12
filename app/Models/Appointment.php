<?php

namespace App\Models;

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
    use SoftDeletes;

    protected $guarded = [];

    protected $casts = ['date' => 'datetime:Y-m-d g:i A', 'created_at' => 'datetime:Y-m-d g:i A'];

    protected $dateFormat = 'Y-m-d g:i A';

    protected $with = ['patient', 'appointmentType', 'doctor'];
    protected $appends = ['name'];

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

    public function transactions(): MorphMany
    {
        return $this->morphMany(Transaction::class, 'transactionable');
    }

    public function total_price(): Attribute
    {
        return Attribute::get(function () {
            $sum = 0;
            $products = $this->products;
            foreach ($products as $product) {
                $sum += $product->pivot->quantity * $product->price;
            }

            return ($this->price + $sum) - $this->discount;
        });
    }

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class)->withPivot('unit_price', 'quantity');
    }

    public function appointmentProducts(): HasMany
    {
        return $this->hasMany(AppointmentProduct::class);
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
        $query->whereDate('date', '>=', $value[0]);
        if (isset($value[1])) {
            $query->whereDate('date', '<=', $value[1] ?? null);
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
        return Attribute::get(fn() => __('dashboard.field_id', ['field' => __('dashboard.appointment'), 'id' => $this->id]));
    }
}
