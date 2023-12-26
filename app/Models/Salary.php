<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use App\Traits\OrderByIdDesc;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Salary
 *
 * @property int|null $id
 * @property int|null $employee_id
 * @property float|null $salary_amount
 * @property float|null $insurance_amount
 * @property string $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Employee|null $employee
 */
class Salary extends Model
{
    use OrderByIdDesc,SoftDeletes;

    protected $table = 'salaries';

    protected $casts = [
        'employee_id' => 'int',
        'salary_amount' => 'float',
        'insurance_amount' => 'float',
    ];

    protected $fillable = [
        'employee_id',
        'salary_amount',
        'insurance_amount',
    ];

    protected $appends = ['net_amount'];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function salaryActions(): HasMany
    {
        return $this->hasMany(SalaryAction::class);
    }

    public function netAmount(): Attribute
    {
        return Attribute::get(function () {
            return $this->salary_amount - $this->insurance_amount;
        });
    }
}
