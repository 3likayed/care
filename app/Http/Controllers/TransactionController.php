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
        $this->middleware(['permission:transactions.confirm'])->only(['confirm']);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $transactionsQuery = QueryBuilder::for(Transaction::class)
            ->allowedSorts('transactionable_type', 'transactionable_id', 'created_at', 'amount', 'id', 'type',
                AllowedSort::custom('employee.name', new RelationSort())
            )
            ->allowedFilters(AllowedFilter::exact('id'),
                AllowedFilter::scope('created_at'),
                AllowedFilter::exact('transactionable_id'),
                AllowedFilter::endsWithStrict('transactionable_type'),
                'employee.name', 'type', 'transactionable_type');

        $total = TransactionService::total(clone $transactionsQuery);
        $transactions = $transactionsQuery->paginate($request->get('per_page'));
        $transactionableTypeOptions = Transaction::groupBy('transactionable_type')
            ->pluck('transactionable_type')
            ->map(fn ($item) => class_basename($item ?? 'transaction'));

        return Inertia::render('Transactions/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.transactions')]),
            'data' => ModelCollection::make($transactions),
            'total' => $total,
            'transactionable_type_options' => $transactionableTypeOptions,
        ]);
    }

    public function confirm()
    {

    }
}
