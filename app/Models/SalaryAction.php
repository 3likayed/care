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
    use OrderByIdDesc,SoftDeletes;

    protected $table = 'salary_actions';

    protected $casts = [
        'employee_id' => 'int',
        'salary_id' => 'int',
        'amount' => 'float',
        'date' => 'date:YYYY-MM',
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

<<<<<<< HEAD
            if ($this->reason == 'giving' && $this->transactions()->count() > 0)
                return  true;

            elseif ($this->reason == 'loan' &&  $this->amount == 0)
=======
            if ($this->reason == 'giving' && $this->transactions()->count() > 0) {
>>>>>>> 0205ab2a00f66f448385ca09b6b0025378c65922
                return true;
            } elseif ($this->reason == 'loan' && $this->transactions()->sum('amount') == $this->amount) {
                return true;
            }

            return false;
        });
    }
<<<<<<< HEAD
    public function amount() : Attribute {
        return Attribute::get( function ($value) {
                $this->reason != 'loan' ?   $value :
                $value= $value -  $this->transactions()->where('type','deposit')->sum('amount');
                return $value ;

=======

    public function amount(): Attribute
    {
        return Attribute::get(function ($value) {
            return $value;
            // ->reason != 'loan' ?  $value :
            // $value -  $this->transactions()->sum('amount' );
>>>>>>> 0205ab2a00f66f448385ca09b6b0025378c65922
        });
    }

    public function transactions(): MorphOne
    {
        return $this->morphOne(Transaction::class, 'transactionable');
    }

    public function date()
    {
        return Attribute::make(
            get: fn ($value) => $value,
            set: fn ($value) => $value ?? Carbon::now()
        );
    }
}
