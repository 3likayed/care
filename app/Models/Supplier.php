<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Supplier
 * 
 * @property int $id
 * @property string $name
 * @property string $phone
 * @property string $address
 * @property string $supplier_credit
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|PurchaseBill[] $purchase_bills
 *
 * @package App\Models
 */
class Supplier extends Model
{
	protected $table = 'suppliers';
	protected $casts = ['phone' => 'array', 'address' => 'array'];

	protected $fillable = [
		'name',
		'phone',
		'address',
		'supplier_credit'
	];

	public function purchase_bills()
	{
		return $this->hasMany(PurchaseBill::class);
	}

	public function scopeSearch( $query, $date)
    {
        return $query->where('name', 'like', "%$date%")
            ->orWhere('phone','like',"%$date%");
    }

    protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}
