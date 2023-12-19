<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use App\Traits\OrderByIdDesc;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
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
 * @property Supplier|null $supplier
 */
class Purchase extends Model
{
    use SoftDeletes, OrderByIdDesc;

    protected $casts = [
        'supplier_id' => 'int',
        'expires_at' => 'date',

    ];
    protected $fillable = [
        'supplier_id',
        'total_price',
        'employee_id',
        'total_paid',
        'notes',
    ];


    protected $with = ['supplier:id,name'];
    protected $appends = ['total_remaining'];

    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }

    public function stocks(): HasMany
    {
        return $this->hasMany(Stock::class);
    }

    public function totalRemaining(): Attribute
    {
        return Attribute::get(function () {
            return $this->total_price - $this->total_paid;
        });
    }

    public function transactions(): MorphMany
    {
        return $this->morphMany(Transaction::class, 'transactionable');
    }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function scopeCreatedAt($query, $value)
    {
        $value = explode('|', $value);
        $query->whereDate('created_at', '>=', Carbon::parse($value[0]));
        if (isset($value[1]) && (bool)$value[1]) {
            $query->whereDate('created_at', '<=', Carbon::parse($value[1]) ?? null);
        }

        return $query;
    }
}
