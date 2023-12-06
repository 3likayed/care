<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
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
        'supplier_id' => 'int'
    ];

    protected $fillable = [
        'supplier_id',
        'notes'
    ];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    public function stock(): HasMany
    {
        return $this->hasMany(Stock::class, );
    }

    public function transaction(): MorphOne
    {
        return $this->morphOne(Transaction::class, 'transactionable');
    }

}
