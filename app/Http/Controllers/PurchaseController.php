<?php

namespace App\Http\Controllers;

use App\Http\Requests\PurchaseStoreRequest;
use App\Http\Requests\PurchaseTransactionRequest;
use App\Http\Requests\PurchaseUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\Stock;
use App\Models\Supplier;
use App\Services\TransactionService;
use App\Sorts\RelationSort;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:purchases.show'])->only(['index', 'show', 'fetch']);
        $this->middleware(['permission:purchases.edit'])->only(['update']);
        $this->middleware(['permission:purchases.create'])->only(['store']);
        $this->middleware(['permission:purchases.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $purchases = QueryBuilder::for(Purchase::class)
            ->withSum('transactions', 'amount')
            ->allowedFilters([
                AllowedFilter::exact('id'),
                AllowedFilter::exact('supplier.id'),
                AllowedFilter::scope('created_at'),
                'notes',
            ])
            ->allowedSorts(['id', 'total_price', 'created_at', 'transactions_sum_amount', 'total_remaining',
                AllowedSort::custom('supplier.name', new RelationSort()),
            ])
            ->paginate($request->per_page);
        $suppliers = Supplier::all();
        $products = Product::Where('type', 'product')->get();

        return Inertia::render('Purchases/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.purchases')]),
            'data' => ModelCollection::make($purchases),
            'suppliers' => $suppliers,
            'products' => $products,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PurchaseStoreRequest $request)
    {
        DB::beginTransaction();
        $data = $request->validated();
        $totalPrice = 0;
        $data['employee_id'] = auth()->user()->userable_id;

        $purchase = Purchase::create($data);
        $products = [];
        foreach ($data['products'] as $product) {
            $totalPrice += $product['quantity'] * $product['price'];
            $products[] = [
                'purchase_id' => $purchase->id,
                'product_id' => $product['id'],
                'unit_price' => $product['price'],
                'quantity' => $product['quantity'],
                'available' => $product['quantity'],
                'expires_at' => $product['expires_at'] ?? null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),

            ];

        }
        Stock::insert($products);

        $purchase->update(['total_price' => $totalPrice, 'total_remaining' => $totalPrice - $data['paid_price']]);
        if ($data['paid_price']) {
            TransactionService::create($purchase, [
                'amount' => $data['paid_price'],
                'status' => 'confirmed',
                'type' => 'withdraw',
            ]);
        }
        DB::commit();

        return success();

    }

    public function update(PurchaseUpdateRequest $request, Purchase $purchase)
    {

        $data = $request->validated();
        $purchase->update($data);

        return success();
    }

    public function show(Purchase $purchase)
    {
        $purchase->load('supplier', 'transactions.employee', 'stocks.purchase', 'employee');

        return Inertia::render('Purchases/Show', [
            'data' => $purchase,
            'meta' => meta()->metaValues(['title' => __('dashboard.field_id', ['field' => __('dashboard.purchase'), 'id' => $purchase->id])]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Purchase $purchase)
    {
        $purchase->transactions()->delete();
        $purchase->stocks()->delete();
        $purchase->delete();

        return success();
    }

    public function transaction(PurchaseTransactionRequest $request, Purchase $purchase)
    {
        $data = $request->validated();
        TransactionService::create(
            transactionable: $purchase,
            data: [
                'amount' => $data['amount'],
                'status' => 'confirmed',
                'type' => 'withdraw',
            ]);

        return success();
    }
}
