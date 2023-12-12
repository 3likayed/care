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
 * Class DoctorProduct
 *
 * @property int|null $id
 * @property int|null $doctor_id
 * @property int|null $product_id
 * @property float|null $quantity
 * @property string $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Doctor|null $doctor
 * @property Product|null $product
 *
 * @package App\Models
 */
class DoctorProduct extends Model
{
	use SoftDeletes;
	protected $table = 'doctor_product';

	protected $casts = [
		'doctor_id' => 'int',
		'product_id' => 'int',
		'quantity' => 'float'
	];

	protected $fillable = [
		'doctor_id',
		'product_id',
		'quantity'
	];

	public function doctor(): BelongsTo
    {
		return $this->belongsTo(Doctor::class);
	}

	public function product(): BelongsTo
    {
		return $this->belongsTo(Product::class);
	}
}
