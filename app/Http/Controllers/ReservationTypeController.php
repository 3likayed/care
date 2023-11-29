<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReservationTypeSubmitRequest;
use App\Models\ReservationType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

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
        $reservationTypes = QueryBuilder::for(ReservationType::class)
            ->allowedFilters(['name', 'price'])
            ->allowedSorts(['name', 'price', 'created_at'])
            ->paginate($request->per_page);
        return Inertia::render('ReservationTypes/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.reservation-types')]),
            'data' => $reservationTypes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ReservationTypeSubmitRequest $request)
    {

        $data = $request->validated();
        ReservationType::create($data);

        return success();

    }

    public function update(ReservationTypeSubmitRequest $request, ReservationType $reservationType)
    {
        $data = $request->validated();
        $reservationType->update($data);

        return success();
    }

    public function show(ReservationType $reservationType)
    {
        $reservationType->load('reservations', 'reservations.patient', 'reservations.reservationType');
        return Inertia::render('ReservationTypes/Show', [
            'data' => $reservationType,
            'meta' => meta()->metaValues(['title' => "$reservationType->name | " . __('dashboard.patients')]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ReservationType $reservationType)
    {
        $reservationType->delete();

        return success();
    }
}
