<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Product
 * 
 * @property int $id
 * @property string $name
 * @property Carbon $quantity
 * @property string|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|PurchaseBill[] $purchase_bills
 *
 * @package App\Models
 */
class Product extends Model
{
	use SoftDeletes;
	protected $table = 'products';

	protected $casts = [
		'quantity' => 'datetime'
	];

	protected $fillable = [
		'name',
		'quantity'
	];

	public function purchase_bills()
	{
		return $this->belongsToMany(PurchaseBill::class, 'purchase_bills_products', 'product_id', 'bill_id')
					->withPivot('id', 'price', 'price_unit', 'quantity', 'deleted_at')
					->withTimestamps();
	}

	public function scopeSearch( $query, $date)
    {
        return $query->where('name', 'like', "%$date%")
            ;
    }

    protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}
