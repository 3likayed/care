<?php

namespace App\Http\Controllers;

use App\Http\Resources\ModelCollection;
use App\Models\Product;
use App\Models\Stock;
use App\Models\Supplier;
use App\Sorts\RelationSort;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:stocks.show'])->only(['index','fetch']);
    }

    public function fetch(Request $request)
    {
        return QueryBuilder::for(Stock::isAvailable()->without(['product','supplier']))
            ->allowedFilters(['product_id', AllowedFilter::exact('id')])->get();
    }

    public function index(Request $request)
    {
        $purchases = QueryBuilder::for(Stock::class)
            ->with(['supplier', 'product', 'purchase'])
            ->allowedFilters([
                AllowedFilter::exact('id'),
                AllowedFilter::scope('created_at'),
                AllowedFilter::scope('expires_at'),
                AllowedFilter::exact('purchase.id'),
                AllowedFilter::exact('supplier.id'),
                AllowedFilter::exact('product.id'),
                'notes',
            ])
            ->allowedSorts(['id', 'available', 'created_at', 'expires_at',
                AllowedSort::custom('supplier.name', new RelationSort()),
                AllowedSort::custom('purchase.id', new RelationSort()),
            ])
            ->paginate($request->per_page);

        $products = Product::whereHas('stocks')->get();
        $suppliers = Supplier::whereHas('purchases')->get();

        return Inertia::render('Stocks/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.stocks')]),
            'data' => ModelCollection::make($purchases),
            'products' => $products,
            'suppliers' => $suppliers,
        ]);
    }
}
