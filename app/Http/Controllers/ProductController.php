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
        $this->middleware(['permission:products.show,dashboard'])->only(['index', 'show', 'fetch']);
        $this->middleware(['permission:products.edit'])->only(['update']);
        $this->middleware(['permission:products.create'])->only(['store']);
        $this->middleware(['permission:products.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $products = QueryBuilder::for(Product::class)
            ->allowedFilters([AllowedFilter::scope('search'), 'name'])
            ->allowedSorts(['name','quantity'])
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
        $product->load('reservations', 'reservations.product', 'reservations.reservationType');
        return Inertia::render('products/Show', [
            'data' => $product,
            'meta' => meta()->metaValues(['title' => "$product->name | " . __('dashboard.products')]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(product $product)
    {
        /*$product->delete();*/
        return success();
    }
}
