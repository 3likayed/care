<?php

namespace App\Http\Controllers;

use App\Http\Requests\DoctorProductStoreRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Doctor;
use App\Models\DoctorProduct;
use App\Models\Product;
use App\Models\Stock;
use App\Sorts\RelationSort;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class DoctorProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:doctor-products.show'])->only(['index', 'show']);
        $this->middleware(['permission:doctor-products.create'])->only(['store']);
    }

    public function index(Request $request)
    {
        $doctorProducts = QueryBuilder::for(DoctorProduct::class)
            ->allowedSorts( 'available',
                AllowedSort::custom('doctor.name', new RelationSort(), 'doctor.employee.name'),
                AllowedSort::custom('product.name', new RelationSort()),

            )
            ->allowedFilters(AllowedFilter::exact('id'), 'doctor_id','product_id')
            ->paginate($request->get('per_page'));

        return Inertia::render('DoctorProducts/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.doctor_products')]),
            'data' => ModelCollection::make($doctorProducts),
            'doctors' => Doctor::all(),
            'products' => Product::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DoctorProductStoreRequest $request)
    {
        DB::beginTransaction();
        $data = $request->validated();
        $stock = Stock::find($data['stock_id']);
        $stock->decrement('available', $data['quantity']);


        $doctor = Doctor::find($data['doctor_id']);
        $doctorProduct = $doctor->doctorProducts()->where('product_id', '=', $stock->product_id)->first();
        if ($doctorProduct) {
            $doctorProduct->increment('available', $data['quantity']);
        } else {
            DoctorProduct::create([
                'product_id' => $stock->product_id,
                'doctor_id' => $data['doctor_id'],
                'available' => $data['quantity']
            ]);
        }
        DB::commit();
        return success();

    }

}
