<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientPackageStoreRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Package;
use App\Models\Patient;
use App\Models\PatientPackage;
use App\Services\TransactionService;
use App\Sorts\RelationSort;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class PatientPackageController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:patient-packages.show'])->only(['index', 'show']);
        $this->middleware(['permission:patient-packages.create'])->only(['store']);
    }

    public function index(Request $request)
    {

        $patientServices = QueryBuilder::for(PatientPackage::class)
            ->with('patient', 'service')
            ->allowedSorts('available',
                AllowedSort::custom('patient.name', new RelationSort(), 'patient.employee.name'),
                AllowedSort::custom('service.name', new RelationSort()),

            )
            ->allowedFilters(AllowedFilter::exact('id'), 'patient_id', 'service_id')
            ->paginate($request->get('per_page'));

        return Inertia::render('PatientPackages/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.patient_packages')]),
            'data' => ModelCollection::make($patientServices),
            'patients' => Patient::all(),
            'packages' => Package::with('service')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PatientPackageStoreRequest $request)
    {

        DB::beginTransaction();
        $data = $request->validated();
        $data['unit_price'] = $request->package->unit_price;
        $data['available'] = $data['quantity'];
        $patient = Patient::find($data['patient_id']);
        $package = $patient->patientPackages()->create($data);
        TransactionService::deposit($package, [
            'amount' =>  $data['unit_price'] * $data['available']
        ]);
        DB::commit();
    }

}
