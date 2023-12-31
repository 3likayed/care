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
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class SalaryAction
 *
 * @property int|null $id
 * @property int|null $employee_id
 * @property int|null $salary_id
 * @property float|null $amount
 * @property string|null $type
 * @property string $notes
 * @property Carbon|null $date
 * @property string $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Employee|null $employee
 * @property Salary|null $salary
 */
class SalaryAction extends Model
{
    use SoftDeletes, OrderByIdDesc;

    protected $table = 'salary_actions';

    protected $casts = [
        'employee_id' => 'int',
        'salary_id' => 'int',
        'amount' => 'float',
    ];

    protected $fillable = [
        'employee_id',
        'salary_id',
        'amount',
        'reason',
        'notes',
        'date',
    ];

    protected $appends = ['is_confirmed'];

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function salary(): BelongsTo
    {
        return $this->belongsTo(Salary::class);
    }

    public function isConfirmed(): Attribute
    {
        return Attribute::get(function () {

            if (($this->reason == 'giving' || $this->reason == 'salary') && $this->transactions()->count() > 0)
                return true;

            elseif ($this->reason == 'loan' && $this->amount == 0)
                return true;
            elseif($this->reason == 'withhold' && $this->transactions()->count() > 0)
                return true ;
        return false;
        });
    }

    public function transactions(): MorphOne
    {
        return $this->morphOne(Transaction::class, 'transactionable');
    }

    public function amount(): Attribute
    {
        return Attribute::get(function ($value) {
            return $this->reason != 'loan' ? $value :
                $value - $this->transactions()->where('type', 'deposit')->sum('amount');

        });
    }

    public function date()
    {
        return Attribute::make(
            get: fn($value) => $value,
            set: fn($value) => $value ?? Carbon::now()
            );
    }
}
