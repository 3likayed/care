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
 * Class AppointmentProduct
 *
 * @property int|null $id
 * @property float|null $quantity
 * @property float|null $unit_price
 * @property int|null $appointment_id
 * @property int|null $product_id
 * @property Appointment|null $appointment
 * @property Product|null $product
 */
class AppointmentProduct extends Model
{
    use BelongsToThrough , SoftDeletes;

    public $timestamps = false;

    protected $table = 'appointment_product';

    protected $casts = [
        'quantity' => 'float',
        'unit_price' => 'float',
        'appointment_id' => 'int',
        'product_id' => 'int',
    ];

    protected $fillable = [
        'quantity',
        'unit_price',
        'appointment_id',
        'product_id',
    ];

    protected $appends = ['total_price'];

    public function appointment(): BelongsTo
    {
        return $this->belongsTo(Appointment::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function doctor()
    {
        return $this->belongsToThrough(Doctor::class, Appointment::class);
    }

    public function totalPrice(): Attribute
    {
        return Attribute::get(fn () => $this->unit_price * $this->quantity);
    }
}
