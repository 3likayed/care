<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Znck\Eloquent\Traits\BelongsToThrough;

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
class PatientPackage extends Model
{
    use SoftDeletes, BelongsToThrough;

    protected $table = 'patient_package';

    protected $casts = [
        'patient_id' => 'int',
        'package_id' => 'int',
        'available' => 'float',
        'unit_price' => 'float'
    ];

    protected $fillable = [
        'patient_id',
        'package_id',
        'available',
        'unit_price'
    ];

    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }

    public function service(): \Znck\Eloquent\Relations\BelongsToThrough
    {
        return $this->belongsToThrough(Service::class, Package::class);
    }
}
