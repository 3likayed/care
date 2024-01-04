<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Service
 *
 * @property int|null $id
 * @property string|null $name
 * @property float|null $unit_price
 * @property string $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Service extends Model
{
    use SoftDeletes;

    protected $table = 'services';

    protected $casts = [
        'unit_price' => 'float',
    ];

    protected $fillable = [
        'name',
        'unit_price',
    ];
}
