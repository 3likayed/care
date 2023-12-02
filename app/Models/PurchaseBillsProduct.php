<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class PurchaseBillsProduct
 * 
 * @property int $id
 * @property int $bill_id
 * @property int $product_id
 * @property string $price
 * @property Carbon $price_unit
 * @property float $quantity
 * @property string|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property PurchaseBill $purchase_bill
 * @property Product $product
 *
 * @package App\Models
 */
class PurchaseBillsProduct extends Model
{
	use SoftDeletes;
	protected $table = 'purchase_bills_products';

	protected $casts = [
		'bill_id' => 'int',
		'product_id' => 'int',
		'price_unit' => 'datetime',
		'quantity' => 'float'
	];

	protected $fillable = [
		'bill_id',
		'product_id',
		'price',
		'price_unit',
		'quantity'
	];

	public function purchase_bill()
	{
		return $this->belongsTo(PurchaseBill::class, 'bill_id');
	}

	public function product()
	{
		return $this->belongsTo(Product::class);
	}

	// public function scopeSearch( $query, $date)
    // {
    //     return $query->where('name', 'like', "%$date%")
    //         ->orWhere('phone','like',"%$date%");
    // }

    protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}
