<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientIndexRequest;
use App\Http\Requests\PatientStoreRequest;
use App\Http\Requests\PatientUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Patient;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ReservationTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:reservation-types.show,dashboard'])->only(['index', 'show']);
        $this->middleware(['permission:reservation-types.edit'])->only(['update']);
        $this->middleware(['permission:reservation-types.create'])->only(['store']);
        $this->middleware(['permission:reservation-types.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $patients = Patient::when($request->search, function ($query) use ($request) {
            $query->where("name", "like", "%$request->search%")
                ->orWhere("phone", 'like', "%$request->search%")
                ->orWhere("address", 'like', "%$request->search%");
        })->paginate();

        return Inertia::render('Patients/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.patients')]),
            'data' => ModelCollection::make($patients),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PatientStoreRequest $request)
    {

        $data = $request->validated();
        Patient::create($data);;


        return success();

    }

    public function update(PatientUpdateRequest $request, Patient $patient)
    {


        $data = $request->validated();
        $patient->update($data);

        return success();
    }

    public function show(Patient $patient)
    {
        return Inertia::render('Patients/Show', [
            'data' => $patient,
            'meta' => meta()->metaValues(['title' => "$patient->name | " . __("dashboard.patients")])
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patient $patient)
    {
        $patient->delete();
        return success();
    }
}
