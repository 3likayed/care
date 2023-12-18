<?php

namespace App\Services;

use App\Models\Transaction;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class TransactionService
{
    public static function deposit($transactionable, $data, $hasRemaining = false)
    {
        $data['type'] = 'deposit';

        return self::create($transactionable, $data, $hasRemaining);
    }

    public static function create($transactionable, $data, $hasRemaining = false)
    {
        DB::beginTransaction();
        $transaction = $transactionable->transactions()->create([
            'employee_id' => UserService::authEmployee()->id,
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

        return $transaction;

    }

    public static function withdraw($transactionable, $data, $hasRemaining = false)
    {
        $data['type'] = 'withdraw';

        return self::create($transactionable, $data, $hasRemaining);
    }

    public static function manualCreate($data)
    {
        $transaction = Transaction::create([
            'employee_id' => UserService::authEmployee()->id,
            'transactionable_type' => 'Manual',
            'amount' => $data['amount'],
            'status' => $data['status'],
            'type' => $data['type'],
        ]);
        Cache::tags([$transaction->created_at->toDateString()])->flush();

        return $transaction;
    }

    public static function confirm(Transaction $transaction): void
    {
        $transaction->update(['status' => 'confirmed']);
    }

    public static function totalRemaining($transactions)
    {
        return self::totalDeposit($transactions) - self::totalWithdraw($transactions);
    }

    public static function totalDeposit($transactions)
    {
        return self::totalOperation($transactions, 'deposit');
    }

    private static function totalOperation($transactions, $operation)
    {
        if ($transactions && $transactions->count()) {
            $startDate = $transactions->first()->created_at->toDateString();
            $endDate = $transactions->last()->created_at->toDateString();
            $key = "transactions_total{$operation}_".$startDate.'_'.$endDate;

            return Cache::tags(['transactions', $operation, $startDate, $endDate])
                ->remember(
                    key: $key,
                    ttl: 100,
                    callback: function () use ($transactions, $operation) {
                        if (! $transactions) {
                            $transactions = Transaction::all();
                        }

                        return $transactions->where('type', '=', $operation)->sum('amount');
                    });
        }

        return 0;
    }

    public static function totalWithdraw($transactions)
    {

        return self::totalOperation($transactions, 'withdraw');
    }
}
