<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReservationTypeSubmitRequest;
use App\Models\ReservationType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReservationTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:reservation-types.show,dashboard'])->only(['index', 'show', 'fetch']);
        $this->middleware(['permission:reservation-types.edit'])->only(['update']);
        $this->middleware(['permission:reservation-types.create'])->only(['store']);
        $this->middleware(['permission:reservation-types.delete'])->only(['destroy']);
    }

    public function fetch(Request $request)
    {
        return ReservationType::all();
    }

    public function index(Request $request)
    {
        $reservationTypes = ReservationType::when($request->fetch, function ($query) use ($request) {
            $query->where('name', 'like', "%$request->fetch%");
        })->get();

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
