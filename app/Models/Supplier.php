<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Staudenmeir\EloquentHasManyDeep\HasManyDeep;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;

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
 * @property Collection|PurchaseBill[] $purchase_bills
 */
class Supplier extends Model
{
    use HasRelationships;

    protected $table = 'suppliers';

    protected $casts = ['phone' => 'array', 'address' => 'array'];

    protected $fillable = [
        'name',
        'phone',
        'address',
        'credit',
    ];
    protected $appends = ['total_remaining'];

    public function totalRemaining(): Attribute
    {
        return Attribute::get(function () {
            return $this->purchases()->sum('total_remaining');
        });
    }

    public function purchases(): HasMany
    {
        return $this->hasMany(Purchase::class);
    }

    public function transactions(): HasManyDeep
    {

        return $this->hasManyDeep(Transaction::class,
            [Purchase::class],
            [null, ['transactionable_type', 'transactionable_id']]
        );
    }

    public function scopeSearch($query, $date)
    {
        return $query->where('name', 'like', "%$date%")
            ->orWhere('phone', 'like', "%$date%");
    }

    protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}
