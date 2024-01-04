<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Znck\Eloquent\Traits\BelongsToThrough;

/**
 * Class AppointmentService
 *
 * @property int|null $id
 * @property float|null $quantity
 * @property float|null $unit_price
 * @property int|null $appointment_id
 * @property int|null $service_id
 * @property Appointment|null $appointment
 * @property Service|null $service
 */
class AppointmentService extends Model
{
    use BelongsToThrough , SoftDeletes;

    public $timestamps = false;

    protected $table = 'appointment_service';

    protected $casts = [
        'quantity' => 'float',
        'unit_price' => 'float',
        'appointment_id' => 'int',
        'service_id' => 'int',
    ];

    protected $fillable = [
        'quantity',
        'unit_price',
        'appointment_id',
        'service_id',
    ];

    protected $appends = ['total_price'];

    public function appointment(): BelongsTo
    {
        return $this->belongsTo(Appointment::class);
    }

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }

    public function doctor(): \Znck\Eloquent\Relations\BelongsToThrough
    {
        return $this->belongsToThrough(Doctor::class, Appointment::class);
    }

    public function totalPrice(): Attribute
    {
        return Attribute::get(fn () => $this->unit_price * $this->quantity);
    }
}
