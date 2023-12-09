<?php

namespace App\Http\Controllers;

use App\Http\Requests\supplierStoreRequest;
use App\Http\Requests\supplierUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Product;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:suppliers.show'])->only(['index', 'show', 'fetch']);
        $this->middleware(['permission:suppliers.edit'])->only(['update']);
        $this->middleware(['permission:suppliers.create'])->only(['store']);
        $this->middleware(['permission:suppliers.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $suppliers = QueryBuilder::for(Supplier::class)
            ->withSum('transactions', 'amount')
            ->withSum('purchases', 'total_remaining')
            ->allowedFilters(AllowedFilter::exact('id'), 'name')
            ->allowedSorts(['id', 'name', 'purchases_sum_total_remaining', 'transactions_sum_amount'])
            ->paginate($request->per_page);
        return Inertia::render('Suppliers/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.suppliers')]),
            'data' => ModelCollection::make($suppliers),
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(supplierStoreRequest $request)
    {

        $data = $request->validated();
        Supplier::create($data);

        return success();

    }

    public function update(supplierUpdateRequest $request, Supplier $supplier)
    {

        $data = $request->validated();
        $supplier->update($data);

        return success();
    }

    public function show(supplier $supplier)
    {
        $supplier->load('purchases.supplier', 'transactions');
        return Inertia::render('Suppliers/Show', [
            'data' => $supplier,
            'meta' => meta()->metaValues(['title' => [__('dashboard.suppliers'), $supplier->name]]),
            'products' => Product::all(),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(supplier $supplier)
    {
        /*$supplier->delete();*/
        return success();
    }
}
