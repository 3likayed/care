<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

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
 *
 * @property Supplier|null $supplier
 *
 * @package App\Models
 */
class Purchase extends Model
{
    use SoftDeletes;

    protected $casts = [
        'supplier_id' => 'int',
        'expires_at' => 'date',

    ];

    protected $fillable = [
        'supplier_id',
        'total_price',
        'employee_id',
        'total_price',
        'notes'
    ];

    protected $appends = ['total_paid', 'total_remaining'];

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

    public function totalPaid(): Attribute
    {
        return Attribute::get(function () {
            return $this->transactions()->sum('amount');
        });
    }

    public function transactions(): MorphMany
    {
        return $this->morphMany(Transaction::class, 'transactionable');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

}
