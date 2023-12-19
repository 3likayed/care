<?php

namespace App\Http\Controllers;

use App\Http\Requests\ManualTransactionStoreRequest;
use App\Http\Resources\ModelCollection;
use App\Models\ManualTransaction;
use App\Services\TransactionService;
use App\Services\UserService;
use App\Sorts\RelationSort;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class ManualTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:manual-transactions.show'])->only(['index', 'show']);
        $this->middleware(['permission:manual-transactions.edit'])->only(['update']);
        $this->middleware(['permission:manual-transactions.create'])->only(['store']);
        $this->middleware(['permission:manual-transactions.delete'])->only(['destroy']);
    }


    public function index(Request $request)
    {

        $manualTransactions = QueryBuilder::for(ManualTransaction::class)
            ->with('employee')
            ->allowedFilters(
                AllowedFilter::exact('id'),
                'transaction.type',
                'transaction.employee.name',
                'notes',
                AllowedFilter::scope('created_at'),
            )
            ->allowedSorts('id',
            'notes',
            AllowedSort::custom('transaction.type', new RelationSort()),
            AllowedSort::custom('transaction.amount', new RelationSort()),
            AllowedSort::custom('transaction.employee.name', new RelationSort()),
            )
            ->paginate($request->get('per_page'));

        return Inertia::render('ManualTransactions/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.manual_transactions')]),
            'data' => ModelCollection::make($manualTransactions),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ManualTransactionStoreRequest $request)
    {

        DB::beginTransaction();
        $data = $request->validated();
        $manualTransaction = ManualTransaction::create($data);
        TransactionService::create($manualTransaction,$data) ;
        DB::commit();

        return success();

    }

}
