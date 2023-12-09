<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;
use Znck\Eloquent\Traits\BelongsToThrough;

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
    use SoftDeletes, HasRelationships, BelongsToThrough;

    protected $casts = [
        'purchase_id' => 'int',
        'product_id' => 'int',
        'unit_price' => 'double',
        'quantity' => 'float',
        'expires_at' => 'date',
    ];

    protected $fillable = [
        'purchase_id',
        'product_id',
        'unit_price',
        'quantity',
        'available',
    ];
    protected $with = ['product', 'supplier'];

    public function purchase(): BelongsTo
    {
        return $this->belongsTo(Purchase::class);
    }

    public function supplier(): \Znck\Eloquent\Relations\BelongsToThrough
    {

        return $this->belongsToThrough(Supplier::class, Purchase::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function scopeCreatedAt($query, $value)
    {
        $value = explode('|', $value);
        $query->whereDate('created_at', '>=', Carbon::parse($value[0]));;
        if (isset($value[1]) && (bool)$value[1]) {
            $query->whereDate('created_at', '<=', Carbon::parse($value[1]) ?? null);
        }
        return $query;
    }

    public function scopeExpiresAt($query, $value)
    {
        $value = explode('|', $value);
        $query->whereDate('expires_at', '>=', Carbon::parse($value[0])->toDate());;
        if (isset($value[1]) && (bool)$value[1]) {
            $query->whereDate('expires_at', '<=', Carbon::parse($value[1]) ?? null);
        }
        return $query;
    }
}
