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
    public function __construct()
    {
        $this->middleware(['permission:transactions.show'])->only(['show']);
    }

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
        $totalWithdraw = TransactionService::totalWithdraw($transactions);
        $totalDeposit = TransactionService::totalDeposit($transactions);
        $totalRemaining = TransactionService::totalRemaining($transactions);
        $transactionleTypeOptions = Transaction::groupBy('transactionable_type')
            ->pluck('transactionable_type')
            ->map(fn($item) => class_basename($item ?? 'transaction'));

        return Inertia::render('Transactions/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.transactions')]),
            'data' => ModelCollection::make($transactions),
            'total_withdraw' => $totalWithdraw,
            'total_deposit' => $totalDeposit,
            'totalRemaining' => $totalRemaining,
            'transactionable_type_options' => $transactionleTypeOptions,
        ]);
    }

}
