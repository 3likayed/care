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
 * Class PurchaseBill
 * 
 * @property int $id
 * @property int $supplier_id
 * @property string $total
 * @property Carbon $date
 * @property string $notes
 * @property string|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Supplier $supplier
 * @property Collection|Product[] $products
 *
 * @package App\Models
 */
class PurchaseBill extends Model
{
	use SoftDeletes;
	protected $table = 'purchase_bills';

	protected $casts = [
		'supplier_id' => 'int',
		'date' => 'datetime'
	];

	protected $fillable = [
		'supplier_id',
		'total',
		'date',
		'notes'
	];

	public function supplier()
	{
		return $this->belongsTo(Supplier::class);
	}

	public function products()
	{
		return $this->belongsToMany(Product::class, 'purchase_bills_products', 'bill_id')
					->withPivot('id', 'price', 'price_unit', 'quantity', 'deleted_at')
					->withTimestamps();
	}
	
	public function scopeSearch( $query, $date)
    {
        return $query->where('supplier_name', 'like', "%$date%");
    }

    protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}
