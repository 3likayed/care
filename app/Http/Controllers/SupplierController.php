<?php

namespace App\Http\Controllers;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;
use Inertia\Inertia;
use App\Http\Resources\ModelCollection;
use Illuminate\Http\Request;
use App\Models\Supplier;
use App\Http\Requests\supplierStoreRequest;
use App\Http\Requests\supplierUpdateRequest;

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
            ->allowedFilters([AllowedFilter::scope('search'), 'name', 'phone'])
            ->allowedSorts(['name','supplier_credit'])
            ->paginate($request->per_page);
        return Inertia::render('Suppliers/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.suppliers')]),
            'data' => ModelCollection::make($suppliers),
        ]);
    }

    public function fetch(Request $request)
    {

        return QueryBuilder::for(Supplier::class)
            ->allowedFilters(['name'])
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(supplierStoreRequest $request)
    {
        
        $data = $request->validated();
        // dd($data);
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
        $supplier->load('purchase_bills');
        return Inertia::render('suppliers/Show', [
            'data' => $supplier,
            'meta' => meta()->metaValues(['title' => "$supplier->name | " . __('dashboard.suppliers')]),
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
