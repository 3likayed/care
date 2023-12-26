<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Package
 * 
 * @property int|null $id
 * @property string|null $name
 * @property int|null $service_id
 * @property float|null $min
 * @property float|null $max
 * @property float|null $unit_price
 * @property string $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * 
 * @property Service|null $service
 *
 * @package App\Models
 */
class Package extends Model
{
	use SoftDeletes;
	protected $table = 'packages';

	protected $casts = [
		'service_id' => 'int',
		'min' => 'float',
		'max' => 'float',
		'unit_price' => 'float'
	];

	protected $fillable = [
		'name',
		'service_id',
		'min',
		'max',
		'unit_price'
	];

	public function service()
	{
		return $this->belongsTo(Service::class);
	}
}
