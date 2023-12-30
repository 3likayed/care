<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientServiceStoreRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Package;
use App\Models\Patient;
use App\Models\PatientService;
use App\Sorts\RelationSort;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class PatientServiceController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:patient-services.show'])->only(['index', 'show']);
        $this->middleware(['permission:patient-services.create'])->only(['store']);
    }

    public function index(Request $request)
    {
        $patientServices = QueryBuilder::for(PatientService::class)
            ->allowedSorts('available',
                AllowedSort::custom('patient.name', new RelationSort(), 'patient.employee.name'),
                AllowedSort::custom('service.name', new RelationSort()),

            )
            ->allowedFilters(AllowedFilter::exact('id'), 'patient_id', 'service_id')
            ->paginate($request->get('per_page'));

        return Inertia::render('PatientServices/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.patient_services')]),
            'data' => ModelCollection::make($patientServices),
            'patients' => Patient::all(),
            'packages' => Package::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PatientServiceStoreRequest $request)
    {
        dd($request);
    }

}
