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
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
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
            ->with('supplier')
            ->join('suppliers', 'suppliers.id', '=', 'purchases.supplier_id')
            ->select('purchases.*', 'suppliers.name')
            ->allowedFilters([AllowedFilter::scope('search'), 'name', 'supplier.name'])
            ->allowedSorts(['name', 'suppliers.name', 'total_price', 'created_at'])
            ->paginate($request->per_page);
        $suppliers = Supplier::all();
        $products = Product::Where('type', 'product')->get();
        return Inertia::render('Purchases/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.purchase')]),
            'data' => ModelCollection::make($purchases),
            'suppliers' => $suppliers,
            'products' => $products
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
        $employeeId = auth()->user()->userable_id;
        $data['employee_id'] = $employeeId;
        $purchase = Purchase::create($data);
        foreach ($data['products'] as $product) {
            $totalPrice += $product['quantity'] * $product['price'];
            Stock::create
            ([
                'purchase_id' => $purchase->id,
                'product_id' => $product['id'],
                'unit_price' => $product['price'],
                'quantity' => $product['quantity'],
                'available' => $product['quantity'],
                'expires_at' => $product['expires_at'] ?? null,

            ]);
        }
        $purchase->update(['total_price' => $totalPrice]);
        if ($data['paid_price']) {
            $purchase->transactions()->create(
                [
                    'amount' => $data['paid_price'],
                    'status' => 'confirmed',
                    'type' => 'withdraw',
                    'employee_id' => $employeeId,
                ]
            );

        }
        $supplier = Supplier::where('id', $data['supplier_id'])->first();
        $supplier->update([
            'credit' => $totalPrice - $data['paid_price'] + $supplier['credit']
        ]);

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
        $purchase->load('supplier', 'transactions.employee', 'stocks', 'employee');

        return Inertia::render('Purchases/Show', [
            'data' => $purchase,
            // 'appointment_types' => AppointmentType::all(),
            'meta' => meta()->metaValues(['title' => "$purchase->name | " . __('dashboard.purchases')]),
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
        $purchase->transactions()->create([
            'employee_id' => auth()->user()->id,
            'amount' => $data['amount'],
            'status' => 'confirmed',
            'type' => 'withdraw',
        ]);
        return success();
    }

}
