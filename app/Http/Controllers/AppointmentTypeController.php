<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentTypeSubmitRequest;
use App\Models\AppointmentType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class AppointmentTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:appointment-types.show'])->only(['index', 'show']);
        $this->middleware(['permission:appointment-types.edit'])->only(['update']);
        $this->middleware(['permission:appointment-types.create'])->only(['store']);
        $this->middleware(['permission:appointment-types.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $appointmentTypes = QueryBuilder::for(AppointmentType::class)
            ->allowedFilters(['name', 'price'])
            ->allowedSorts(['name', 'price', 'created_at'])
            ->paginate($request->per_page);

        return Inertia::render('AppointmentTypes/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.appointment-types')]),
            'data' => $appointmentTypes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AppointmentTypeSubmitRequest $request)
    {

        $data = $request->validated();
        AppointmentType::create($data);

        return success();

    }

    public function update(AppointmentTypeSubmitRequest $request, AppointmentType $appointmentType)
    {
        $data = $request->validated();
        $appointmentType->update($data);

        return success();
    }

    public function show(AppointmentType $appointmentType)
    {
        $appointmentType->load('appointments', 'appointments.patient', 'appointments.appointmentType');
        dd($appointmentType);

        return Inertia::render('AppointmentTypes/Show', [
            'data' => $appointmentType,
            'meta' => meta()->metaValues(['title' => "$appointmentType->name | ".__('dashboard.appointment-type')]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AppointmentType $appointmentType)
    {
        $appointmentType->delete();

        return success();
    }
}
