<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

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
 *
 * @property Employee|null $employee
 * @property Salary|null $salary
 *
 * @package App\Models
 */
class SalaryAction extends Model
{
    use SoftDeletes;

    protected $table = 'salary_actions';

    protected $casts = [
        'employee_id' => 'int',
        'salary_id' => 'int',
        'amount' => 'float',
        'date' => 'date:YYYY-MM'
    ];

    protected $fillable = [
        'employee_id',
        'salary_id',
        'amount',
        'reason',
        'notes',
        'date'
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
        return Attribute::get(fn() => (bool)$this->transactions());
    }

    public function transactions(): MorphOne
    {
        return $this->morphOne(Transaction::class, 'transactionable');
    }

    public function date()
    {
        return Attribute::make(
            get: fn($value) => $value,
            set: fn($value) => $value ?? Carbon::now()
        );
    }
}
