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
 * @property int|null $bill_id
 * @property int|null $product_id
 * @property string|null $price
 * @property Carbon|null $price_unit
 * @property float|null $quantity
 * @property string $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * 
 * @property PurchaseTransaction|null $purchase_transaction
 * @property Product|null $product
 *
 * @package App\Models
 */
class PurchaseTransactionsProduct extends Model
{
	use SoftDeletes;
	protected $table = 'purchase_transactions_products';

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

	public function purchase_transaction()
	{
		return $this->belongsTo(PurchaseTransaction::class, 'bill_id');
	}

	public function product()
	{
		return $this->belongsTo(Product::class);
	}
}
