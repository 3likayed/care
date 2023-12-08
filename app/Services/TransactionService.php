<?php

namespace App\Services;

use App\Models\Transaction;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class TransactionService
{
    public static function create($transactionable, $data, $hasRemaining = true)
    {
        DB::beginTransaction();
        $transaction = $transactionable->transactions()->create([
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

        Cache::tags([$transaction->created_at->toDateString()])->flush();
        DB::commit();
    }

    public static function confirm(Transaction $transaction)
    {
        $transaction->update(['status' => 'confirmed']);
    }

    public static function totalRemaining($transactions)
    {
        return self::totalDeposit($transactions) - self::totalWithdraw($transactions);
    }

    public static function totalDeposit($transactions)
    {
        if (!$transactions) {
            $transactions = Transaction::all();
        }
        $startDate = $transactions->first()->created_at->toDateString();
        $endDate = $transactions->last()->created_at->toDateString();
        $key = "transactions_total_deposit_" . $startDate . "_" . $endDate;
        return Cache::tags(['transactions', 'deposit', $startDate, $endDate])->remember($key,100, function () use ($transactions) {
            return $transactions->where('type', '=', 'deposit')->sum('amount');
        });
    }

    public static function totalWithdraw($transactions)
    {
        if (!$transactions) {
            $transactions = Transaction::all();
        }
        $startDate = $transactions->first()->created_at->toDateString();
        $endDate = $transactions->last()->created_at->toDateString();
        $key = "transactions_total_withdraw_" . $startDate . "_" . $endDate;
        return Cache::tags(['transactions', 'withdraw', $startDate, $endDate])->remember($key, 100, function () use ($transactions) {
            return $transactions->where('type', '=', 'withdraw')->sum('amount');
        });

    }


}
