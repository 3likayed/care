<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Str;

class Employee extends Authenticatable
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'address',
        'phone',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [

        'address' => 'array',
        'phone' => 'array',
    ];

    protected static function boot()
    {
        parent::boot();

    }

    public function scopeSearch($query, $date)
    {
        return $query->where('name', 'like', "%$date%")
            ->orWhere('email', 'like', '%$date%');
    }

    public function user(): MorphOne
    {
        return $this->morphOne(User::class, 'userable');
    }

    public function employable(): MorphTo
    {
        return $this->morphTo();
    }

    public function salary(): HasOne
    {
        return $this->hasOne(Salary::class)->latestOfMany();
    }

    public function CurrentMonthSalaryActions(): Attribute
    {

        return Attribute::get(fn () => $this->salaryActions->whereIn('reason', ['giving', 'withhold'])->where('is_confirmed', false)->sum('amount'));

    }

    public function CurrentMonthGivingActions(): Attribute
    {
        return Attribute::get(fn () => $this->salaryActions->where('reason', 'giving')->where('is_confirmed', false)->sum('amount'));

    }

    public function CurrentMonthLoanActions(): Attribute
    {
        return Attribute::get(fn () => $this->salaryActions->where('reason', 'loan')->where('is_confirmed', false)->sum('amount'));

    }

    public function CurrentMonthWithholdActions(): Attribute
    {

        return Attribute::get(fn () => $this->salaryActions->where('reason', 'withhold')->where('is_confirmed', false)->sum('amount'));

    }

    public function salaryActions(): HasManyThrough
    {
        return $this->hasManyThrough(SalaryAction::class, Salary::class);
    }

    public function salaries(): HasMany
    {
        return $this->hasMany(Salary::class);
    }

    public function type(): Attribute
    {
        return Attribute::get(function () {
            return Str::lower(class_basename($this->userable_type));
        });
    }

    public function scopeCreatedAt($query, $value)
    {
        $value = explode('|', $value);
        $query->whereDate('created_at', '>=', Carbon::parse($value[0]));
        if (isset($value[1]) && (bool) $value[1]) {
            $query->whereDate('created_at', '<=', Carbon::parse($value[1]) ?? null);
        }

        return $query;
    }

    protected function asJson($value): bool|string
    {

        return json_encode($value, JSON_UNESCAPED_UNICODE);
    }
}
