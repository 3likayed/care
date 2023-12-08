<?php

// app/Services/UserService.php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class TransactionService
{
    public static function create($transactionable, $data, $hasRemaining = true)
    {
        DB::beginTransaction();
        $transactionable->transactions()->create([
            'employee_id' => auth()->user()->id,
            'amount' => $data['amount'],
            'status' => $data['status'],
            'type' => $data['type'],
        ]);
        if ($hasRemaining) {
            $totalRemaining = $transactionable->total_remaining - $data['amount'];
            if ($totalRemaining < 0) {
                throw ValidationException::withMessages(['amount' => __('dashboard.error')]);
            }
            $transactionable->update(['total_remaining' => $totalRemaining]);
        }
        DB::commit();
    }
}
