<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use App\Traits\OrderByIdDesc;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Staudenmeir\EloquentHasManyDeep\HasOneDeep;
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
    use BelongsToThrough, HasRelationships, OrderByIdDesc, SoftDeletes;

    protected $casts = [
        'purchase_id' => 'int',
        'product_id' => 'int',
        'unit_price' => 'double',
        'quantity' => 'float',
        'expires_at' => 'date',
    ];

    protected $fillable = [
        'purchase_id',
        'unit_price',
        'quantity',
        'available',
    ];

    protected $with = ['stockable', 'purchase.supplier'];

    protected $appends = ['name', 'model'];

    public function supplier(): HasOneDeep
    {
        return $this->hasOneDeepFromRelations($this->purchase(), (new Purchase())->supplier());

    }

    public function purchase(): BelongsTo
    {
        return $this->belongsTo(Purchase::class);
    }

    public function stockable(): BelongsTo
    {
        return $this->morphTo();
    }

    public function model(): Attribute
    {

        return Attribute::get(function () {
            return [
                'name' => \Str::snake(class_basename($this->stockable_type)),
                'id' => $this->stockable_id,
            ];
        });
    }

    public function name(): Attribute
    {

        return Attribute::get(fn() => __('dashboard.field_id', ['field' => __('dashboard.' . $this->model['name']), 'id' => $this->stockable_id]));
    }

    public function scopeIsAvailable($query)
    {
        return $query->where('available', '>', 0);
    }

    public function scopeCreatedAt($query, $value)
    {
        $value = explode('|', $value);
        $query->whereDate('created_at', '>=', Carbon::parse($value[0]));
        if (isset($value[1]) && (bool)$value[1]) {
            $query->whereDate('created_at', '<=', Carbon::parse($value[1]) ?? null);
        }

        return $query;
    }

    public function scopeExpiresAt($query, $value)
    {
        $value = explode('|', $value);
        $query->whereDate('expires_at', '>=', Carbon::parse($value[0])->toDate());
        if (isset($value[1]) && (bool)$value[1]) {
            $query->whereDate('expires_at', '<=', Carbon::parse($value[1]) ?? null);
        }

        return $query;
    }
}
