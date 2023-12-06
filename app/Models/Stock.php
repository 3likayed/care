<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class PurchaseTransactionsProduct
 *
 * @property int|null $id
 * @property int|null $purchase_id
 * @property int|null $product_id
 * @property string|null $price
 * @property Carbon|null $unit_price
 * @property float|null $quantity
 * @property string $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Purchase|null $purchase
 * @property Product|null $product
 *
 * @package App\Models
 */
class Stock extends Model
{
    use SoftDeletes;

    protected $casts = [
        'bill_id' => 'int',
        'product_id' => 'int',
        'unit_price' => 'double',
        'quantity' => 'float'
    ];

    protected $fillable = [
        'purchase_id',
        'product_id',
        'price',
        'unit_price',
        'quantity'
    ];

    public function purchase()
    {
        return $this->belongsTo(Purchase::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
