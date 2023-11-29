<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReservationStoreRequest;
use App\Http\Requests\ReservationUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Reservation;
use App\Models\ReservationType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:reservations.show,dashboard'])->only(['index', 'show']);
        $this->middleware(['permission:reservations.edit'])->only(['update']);
        $this->middleware(['permission:reservations.create'])->only(['store']);
        $this->middleware(['permission:reservations.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $reservations = QueryBuilder::for(Reservation::class)
            ->with(['patient', 'reservationType'])
            ->allowedFilters('reservation_type_id', AllowedFilter::scope('start'), AllowedFilter::scope('end'))
            ->allowedSorts(['date', 'created_at'])
            ->paginate($request->get('per_page'));
        $reservationTypes = ReservationType::all();
        return Inertia::render('Reservations/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.reservations')]),
            'data' => ModelCollection::make($reservations),
            'reservation_types' => $reservationTypes,
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(ReservationStoreRequest $request)
    {

        $data = $request->validated();
        $data['price'] = ReservationType::find($data['reservation_type_id'])->price;
        Reservation::create($data);
        return success();

    }

    public function update(ReservationUpdateRequest $request, Reservation $reservation)
    {

        $data = $request->validated();
        $data['price'] = ReservationType::find($data['reservation_type_id'])->price;
        $reservation->update($data);

        return success();
    }

    public function show(Reservation $reservation)
    {
        $reservation->load('patient', 'reservationType');
        return Inertia::render('Reservations/Show', [
            'data' => $reservation,
            'meta' => meta()->metaValues(['title' => "$reservation->name | " . __('dashboard.reservations')]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reservation $reservation)
    {
        $reservation->delete();

        return success();
    }
}
