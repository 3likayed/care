<?php

namespace App\Services;

use App\Models\Transaction;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class TransactionService
{
    public static function deposit($transactionable, $data, $hasTotalPaid = false)
    {
        $data['type'] = 'deposit';

        return static::create($transactionable, $data, $hasTotalPaid);
    }

    public static function create($transactionable, $data, $hasTotalPaid = false)
    {
        DB::beginTransaction();
        $transaction = $transactionable->transactions()->create([
            'employee_id' => UserService::authEmployee()->id,
            'amount' => $data['amount'],
            'status' => $data['status'] ?? 'confirmed',
            'type' => $data['type'],
        ]);
        if ($hasTotalPaid) {
            $transactionable->total_paid = $transactionable->total_paid + $data['amount'];
            if ($transactionable->total_paid > $transactionable->total_price) {
                throw ValidationException::withMessages(['amount' => __('dashboard.error')]);
            }
            $transactionable->update(['total_paid' => $transactionable->total_paid]);
        }

        DB::commit();

        return $transaction;

    }

    public static function withdraw($transactionable, $data, $hasTotalPaid = false)
    {
        $data['type'] = 'withdraw';

        return static::create($transactionable, $data, $hasTotalPaid);
    }

    public static function manualCreate($data)
    {
        return Transaction::create([
            'employee_id' => UserService::authEmployee()->id,
            'transactionable_type' => 'Manual',
            'amount' => $data['amount'],
            'status' => $data['status'],
            'type' => $data['type'],
        ]);

    }

    public static function confirm(Transaction $transaction): void
    {
        $transaction->update(['status' => 'confirmed']);
    }

    public static function total($transactions)
    {

        $deposit = static::totalDeposit(clone $transactions);
        $withdraw = static::totalWithdraw(clone $transactions);
        $remaining = $deposit - $withdraw;

        return [
            'deposit' => $deposit,
            'withdraw' => $withdraw,
            'remaining' => $remaining,
        ];
    }

    public static function totalDeposit($transactions)
    {

        return static::totalOperation($transactions, 'deposit');
    }

    private static function totalOperation($transactions, $operation)
    {
        return $transactions->where('type', '=', $operation)->sum('amount');

    }

    public static function totalWithdraw($transactions)
    {

        return static::totalOperation($transactions, 'withdraw');
    }
}
