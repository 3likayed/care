<?php

namespace App\Http\Controllers;

use App\Http\Requests\DoctorProductStoreRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Doctor;
use App\Models\DoctorProduct;
use App\Models\Product;
use App\Sorts\RelationSort;
use Carbon\Carbon;
use Illuminate\Http\Request;
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
            ->with(['patient:name,id', 'appointmentType:name,id'])
            ->allowedSorts('date', 'created_at', 'price', 'id',
                AllowedSort::custom('doctor.name', new RelationSort(), 'doctor.employee.name'),
                AllowedSort::custom('product.name', new RelationSort()),

            )
            ->allowedFilters(AllowedFilter::exact('id'), 'doctor_id', 'product_id')
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

        $data = $request->validated();
        if (!Carbon::parse($data['date'])->isToday()) {
            $data['doctor_id'] = null;
        }

        $data['price'] = DoctorProductType::find($data['doctorProduct_type_id'])->price;
        $data['employee_id'] = auth()->user()->userable_id;
        DoctorProduct::create($data);

        return success();

    }

}
