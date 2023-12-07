<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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
 * @property Purchase|null $purchase
 * @property Product|null $product
 */
class Stock extends Model
{
    use SoftDeletes;

    protected $casts = [
        'purchase_id' => 'int',
        'product_id' => 'int',
        'unit_price' => 'double',
        'quantity' => 'float',
    ];

    protected $fillable = [
        'purchase_id',
        'product_id',
        'unit_price',
        'quantity',
        'available',
    ];

    public function purchase(): BelongsTo
    {
        return $this->belongsTo(Purchase::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
