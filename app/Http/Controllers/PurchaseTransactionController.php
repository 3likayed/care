<?php

namespace App\Http\Controllers;

use App\Http\Requests\PurchaseTransactionStoreRequest;
use App\Http\Requests\PurchaseTransactionUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\AppointmentType;
use App\Models\Product;
use App\Models\PurchaseTransaction;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class PurchaseTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function __construct()
    {
        $this->middleware(['permission:purchase-transactions.show'])->only(['index', 'show', 'fetch']);
        $this->middleware(['permission:purchase-transactions.edit'])->only(['update']);
        $this->middleware(['permission:purchase-transactions.create'])->only(['store']);
        $this->middleware(['permission:purchase-transactions.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $PurchaseTransactions = QueryBuilder::for(PurchaseTransaction::class)->join('suppliers', 'suppliers.id', 'purchase_transactions.supplier_id')
            ->allowedFilters([AllowedFilter::scope('search'), 'name', 'supplier.name'])
            ->allowedSorts(['name', 'supplier.name', 'total', 'created_at'])
            ->paginate($request->per_page);
        $suppliers = Supplier::all();
        $products = Product::Where('type','product')->get();
        return Inertia::render('PurchaseTransactions/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.PurchaseTransaction')]),
            'data' => ModelCollection::make($PurchaseTransactions),
            'suppliers' => $suppliers,
            'products' => $products
        ]);
    }

    public function fetch(Request $request)
    {

        return QueryBuilder::for(PurchaseTransaction::class)
            ->allowedFilters(['name'])
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PurchaseTransactionStoreRequest $request)
    {

        $data = $request->validated();
        PurchaseTransaction::create($data);

        return success();

    }

    public function update(PurchaseTransactionUpdateRequest $request, PurchaseTransaction $PurchaseTransaction)
    {

        $data = $request->validated();
        $PurchaseTransaction->update($data);

        return success();
    }

    public function show(PurchaseTransaction $PurchaseTransaction)
    {
        $PurchaseTransaction->load('appointments', 'appointments.PurchaseTransaction', 'appointments.appointmentType');

        return Inertia::render('PurchaseTransactions/Show', [
            'data' => $PurchaseTransaction,
            'appointment_types' => AppointmentType::all(),
            'meta' => meta()->metaValues(['title' => "$PurchaseTransaction->name | " . __('dashboard.PurchaseTransactions')]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PurchaseTransaction $PurchaseTransaction)
    {
        /*$PurchaseTransaction->delete();*/
        return success();
    }
}
