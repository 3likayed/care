<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Tool
 *
 * @property int|null $id
 * @property string|null $name
 * @property float $unit_price
 * @property float $consumed_quantity
 * @property float $observe_quantity
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @package App\Models
 */
class Tool extends Model
{
    protected $table = 'tools';

    protected $casts = [
        'unit_price' => 'float',
        'consumed_quantity' => 'float',
        'observe_quantity' => 'float'
    ];

    protected $fillable = [
        'name',
        'unit_price',
        'consumed_quantity',
        'observe_quantity'
    ];

    protected $appends = ['available'];


    public function available(): Attribute
    {
        return Attribute::get(function () {
            return $this->observe_quantity - $this->consumed_quantity;
        });
    }

}
