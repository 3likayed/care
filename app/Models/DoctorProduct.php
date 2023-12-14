<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class DoctorProduct
 *
 * @property int|null $id
 * @property int|null $doctor_id
 * @property int|null $product_id
 * @property float|null $available
 * @property string $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Doctor|null $doctor
 * @property Product|null $product
 */
class DoctorProduct extends Model
{
    use SoftDeletes;

    protected $table = 'doctor_product';

    protected $casts = [
        'doctor_id' => 'int',
        'product_id' => 'int',
        'available' => 'float',
    ];

    protected $fillable = [
        'doctor_id',
        'product_id',
        'available',
    ];

    protected $appends = ['name'];

    protected $with = ['product:id,name', 'doctor:id,name'];

    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function name(): Attribute
    {
        return Attribute::get(fn () => $this->product->name);
    }
}
