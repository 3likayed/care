<?php

namespace App\Http\Controllers;

use App\Http\Requests\PurchaseStoreRequest;
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
            ->join('suppliers', 'suppliers.id', 'purchases.supplier_id')
            ->allowedFilters([AllowedFilter::scope('search'), 'name', 'supplier.name'])
            ->allowedSorts(['name', 'supplier.name', 'total', 'created_at'])
            ->paginate($request->per_page);
        $suppliers = Supplier::all();
        $products = Product::Where('type', 'product')->get();
        // dd($purchases);
        return Inertia::render('Purchases/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.purchase')]),
            'data' => ModelCollection::make($purchases),
            'suppliers' => $suppliers,
            'products' => $products
        ]);
    }

    public function fetch(Request $request)
    {

        return QueryBuilder::for(Purchase::class)
            ->allowedFilters(['name'])
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PurchaseStoreRequest $request)
    {
        DB::beginTransaction();
        $data = $request->validated();
        $sum = 0;
        $purchase = Purchase::create($data);
        foreach ($data['products'] as $product) {
            $sum += $product['quantity'] * $product['price'];
            Stock::create
            ([

                'purchase_id' => $purchase->id,
                'product_id' => $product['id'],
                'price' => $product['quantity'] * $product['price'],
                'unit_price' => $product['price'],
                'quantity' => $product['quantity'],
                'available' => $product['quantity']

            ]);
        }

        $purchase->transaction()->create(
            [
                'amount' => $sum,
                'status' => 'pending',
            ]
        );

        // update supplier product
        $supplier = Supplier::where('id', $data['supplier_id'])->first();
        $supplier->update([
            'credit' => $sum + $supplier['credit']
        ]);

        DB::commit();
        return success();

    }

    public function update(PurchaseUpdateRequest $request, Purchase $Purchase)
    {

        $data = $request->validated();
        $Purchase->update($data);

        return success();
    }

    public function show(Purchase $Purchase)
    {
        $Purchase->load('stock.product');
        return $Purchase;
        return Inertia::render('Purchases/Show', [
            'data' => $Purchase,
            // 'appointment_types' => AppointmentType::all(),
            'meta' => meta()->metaValues(['title' => "$Purchase->name | " . __('dashboard.purchases')]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Purchase $Purchase)
    {
        /*$Purchase->delete();*/
        return success();
    }
}
