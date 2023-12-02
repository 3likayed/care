<?php

namespace App\Http\Controllers;

use App\Http\Requests\PurchaseBillStoreRequest;
use App\Http\Requests\PurchaseBillUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\AppointmentType;
use App\Models\PurchaseBill;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;
class PurchaseBillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:purchase-bills.show'])->only(['index', 'show', 'fetch']);
        $this->middleware(['permission:purchase-bills.edit'])->only(['update']);
        $this->middleware(['permission:purchase-bills.create'])->only(['store']);
        $this->middleware(['permission:purchase-bills.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $PurchaseBills = QueryBuilder::for(PurchaseBill::class)->join('suppliers','suppliers.id','purchase_bills.supplier_id')
            ->allowedFilters([AllowedFilter::scope('search'), 'name', 'supplier.name'])
            ->allowedSorts(['name', 'supplier.name', 'total', 'created_at'])
            ->paginate($request->per_page);

        return Inertia::render('PurchaseBills/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.PurchaseBill')]),
            'data' => ModelCollection::make($PurchaseBills),
        ]); 
    }

    public function fetch(Request $request)
    {

        return QueryBuilder::for(PurchaseBill::class)
            ->allowedFilters(['name'])
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PurchaseBillStoreRequest $request)
    {

        $data = $request->validated();
        PurchaseBill::create($data);

        return success();

    }

    public function update(PurchaseBillUpdateRequest $request, PurchaseBill $PurchaseBill)
    {

        $data = $request->validated();
        $PurchaseBill->update($data);

        return success();
    }

    public function show(PurchaseBill $PurchaseBill)
    {
        $PurchaseBill->load('appointments', 'appointments.PurchaseBill', 'appointments.appointmentType');

        return Inertia::render('PurchaseBills/Show', [
            'data' => $PurchaseBill,
            'appointment_types' => AppointmentType::all(),
            'meta' => meta()->metaValues(['title' => "$PurchaseBill->name | ".__('dashboard.PurchaseBills')]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PurchaseBill $PurchaseBill)
    {
        /*$PurchaseBill->delete();*/
        return success();
    }
}
