<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use SoftDeletes;

    protected $fillable = ['amount', 'status', 'type', 'employee_id'];

    protected $appends = ['model', 'name'];

    protected $with = ['employee:id,name'];

    public function transactionable(): MorphTo
    {
        return $this->morphTo()->withTrashed();
    }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function scopeCreatedAt($query, $value)
    {
        $value = explode('|', $value);
        $query->whereDate('created_at', '>=', Carbon::parse($value[0]));;
        if (isset($value[1]) && (bool)$value[1]) {
            $query->whereDate('created_at', '<=', Carbon::parse($value[1]) ?? null);
        }
        return $query;
    }

    public function model(): Attribute
    {

        return Attribute::get(function () {
            return [
                'name' => \Str::snake(class_basename($this->transactionable_type)),
                'id' => $this->transactionable_id,
            ];
        });
    }

    public function name(): Attribute
    {

        return Attribute::get(fn() => __('dashboard.field_id', ['field' => __('dashboard.' . $this->model['name']), 'id' => $this->id]));
    }
}
