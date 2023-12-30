<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class PatientService
 * 
 * @property int|null $id
 * @property int|null $patient_id
 * @property int|null $service_id
 * @property float|null $available
 * @property float|null $unit_price
 * @property string $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * 
 * @property Patient|null $patient
 * @property Service|null $service
 *
 * @package App\Models
 */
class PatientService extends Model
{
	use SoftDeletes;
	protected $table = 'patient_service';

	protected $casts = [
		'patient_id' => 'int',
		'service_id' => 'int',
		'available' => 'float',
		'unit_price' => 'float'
	];

	protected $fillable = [
		'patient_id',
		'service_id',
		'available',
		'unit_price'
	];

	public function patient()
	{
		return $this->belongsTo(Patient::class);
	}

	public function service()
	{
		return $this->belongsTo(Service::class);
	}
}
