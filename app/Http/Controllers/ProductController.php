<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:products.show'])->only(['index', 'show', 'fetch']);
        $this->middleware(['permission:products.edit'])->only(['update']);
        $this->middleware(['permission:products.create'])->only(['store']);
        $this->middleware(['permission:products.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $products = QueryBuilder::for(Product::class)->where('type', 'product')
            ->withSum('stocks', 'available')
            ->allowedFilters([AllowedFilter::exact('id'), 'name'])
            ->allowedSorts(['name', 'stocks_sum_available'])
            ->paginate($request->per_page);

        return Inertia::render('Products/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.products')]),
            'data' => ModelCollection::make($products),
        ]);
    }

    public function fetch(Request $request)
    {

        return QueryBuilder::for(product::class)
            ->allowedFilters(['name'])
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductStoreRequest $request)
    {

        $data = $request->validated();

        product::create($data);

        return success();

    }

    public function update(ProductUpdateRequest $request, product $product)
    {

        $data = $request->validated();
        $product->update($data);

        return success();
    }

    public function show(product $product)
    {
        $product->load('stocks.purchase','doctorProducts.product','doctorProducts.doctor');
        return Inertia::render('Products/Show', [
            'data' => $product,
            'meta' => meta()->metaValues(['title' => [__('dashboard.products'), $product->name]]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(product $product)
    {
        $product->delete();
        return success();
    }
}
