<?php

namespace App\Http\Controllers;

use App\Http\Resources\ModelCollection;
use App\Models\transaction;
use App\Services\TransactionService;
use App\Sorts\RelationSort;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $transactionsQuery = QueryBuilder::for(Transaction::class)
            ->allowedSorts('transactionable_type', 'transactionable_id', 'created_at', 'amount', 'id',
                AllowedSort::custom('employee.name', new RelationSort())
            )
            ->allowedFilters(AllowedFilter::exact('id'),
                AllowedFilter::scope('created_at'),
                AllowedFilter::exact('transactionable_id'),
                AllowedFilter::endsWithStrict('transactionable_type'),
                'employee.name', 'type', 'transactionable_type');

        $transactions = $transactionsQuery->paginate($request->get('per_page'));
        $totalWithdraw = TransactionService::totalWithdraw($transactionsQuery->get());
        $totalDeposit = TransactionService::totalDeposit($transactionsQuery->get());
        $totalRemaining = TransactionService::totalRemaining($transactionsQuery->get());
        $transactionables = Transaction::groupBy('transactionable_type')->pluck('transactionable_type');
        return Inertia::render('Transactions/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.transactions')]),
            'data' => ModelCollection::make($transactions),
            'total_withdraw' => $totalWithdraw,
            'total_deposit' => $totalDeposit,
            'totalRemaining' => $totalRemaining
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(transaction $transaction)
    {
        //
    }
}
