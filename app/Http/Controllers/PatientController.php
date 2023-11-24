<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientStoreRequest;
use App\Http\Requests\PatientUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Patient;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:patients.show,dashboard'])->only(['index', 'show', 'fetch']);
        $this->middleware(['permission:patients.edit'])->only(['update']);
        $this->middleware(['permission:patients.create'])->only(['store']);
        $this->middleware(['permission:patients.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $patients = $this->filter($request->only(['name', 'phone', 'start', 'end', 'trashed']))
            ->paginate();
        return Inertia::render('Patients/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.patients')]),
            'data' => ModelCollection::make($patients),
        ]);
    }

    public function fetch(Request $request)
    {

        return Patient::filter($request->only(['search', 'phone','id']))->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PatientStoreRequest $request)
    {

        $data = $request->validated();
        Patient::create($data);

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
            'meta' => meta()->metaValues(['title' => "$patient->name | " . __('dashboard.patients')]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patient $patient)
    {
        /*$patient->delete();*/
        return success();
    }
}
