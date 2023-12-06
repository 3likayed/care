<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Product
 *
 * @property int|null $id
 * @property string|null $name
 * @property int|null $quantity
 * @property float|null $price
 * @property string|null $type
 * @property string $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @package App\Models
 */
class Product extends Model
{
    use SoftDeletes;

    protected $table = 'products';

    protected $casts = [
        'quantity' => 'int',
        'price' => 'float'
    ];

    protected $fillable = [
        'name',
        'quantity',
        'price',
        'type'
    ];
    protected $appends = ['available'];

    public function stock(): HasMany
    {
        return $this->hasMany(Stock::class);
    }

    public function available(): Attribute
    {
        return Attribute::get(function () {
            return $this->stock()->sum('available') + $this->quantity;
        });
    }
}
