<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class PurchaseTransaction
 * 
 * @property int|null $id
 * @property int|null $supplier_id
 * @property string|null $total
 * @property string $notes
 * @property string $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * 
 * @property Supplier|null $supplier
 *
 * @package App\Models
 */
class PurchaseTransaction extends Model
{
	use SoftDeletes;
	protected $table = 'purchase_transactions';

	protected $casts = [
		'supplier_id' => 'int'
	];

	protected $fillable = [
		'supplier_id',
		'total',
		'notes'
	];

	public function supplier()
	{
		return $this->belongsTo(Supplier::class);
	}
	public function purchase_transaction_product()
	{
		return $this->hasMany(PurchaseTransactionsProduct::class, 'bill_id');
	}
	protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}
