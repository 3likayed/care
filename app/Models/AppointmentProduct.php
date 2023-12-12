<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

/**
 * Class AppointmentProduct
 *
 * @property int|null $id
 * @property float|null $quantity
 * @property float|null $unit_price
 * @property int|null $appointment_id
 * @property int|null $product_id
 *
 * @property Appointment|null $appointment
 * @property Product|null $product
 *
 * @package App\Models
 */
class AppointmentProduct extends Model
{
    protected $table = 'appointment_product';
    public $timestamps = false;

    protected $casts = [
        'quantity' => 'float',
        'unit_price' => 'float',
        'appointment_id' => 'int',
        'product_id' => 'int'
    ];

    protected $fillable = [
        'quantity',
        'unit_price',
        'appointment_id',
        'product_id'
    ];

    protected $appends=['total_price'];
    public function appointment()
    {
        return $this->belongsTo(Appointment::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function totalPrice(): Attribute
    {
        return Attribute::get(fn()=>$this->unit_price * $this->quantity);
    }
}
