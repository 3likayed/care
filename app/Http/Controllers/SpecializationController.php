<?php

namespace App\Http\Controllers;

use App\Http\Requests\SpecializationSubmitRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Specialization;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class SpecializationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:specializations.show'])->only(['index', 'show']);
        $this->middleware(['permission:specializations.edit'])->only(['update']);
        $this->middleware(['permission:specializations.create'])->only(['store']);
        $this->middleware(['permission:specializations.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $specializations = QueryBuilder::for(Specialization::class)
            ->allowedFilters(['name'])
            ->allowedSorts(['name', 'created_at'])
            ->paginate($request->per_page);

        return Inertia::render('Specializations/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.specializations')]),
            'data' => ModelCollection::make($specializations),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SpecializationSubmitRequest $request)
    {

        $data = $request->validated();
        Specialization::create($data);

        return success();

    }

    public function update(SpecializationSubmitRequest $request, Specialization $specialization)
    {
        $data = $request->validated();
        $specialization->update($data);

        return success();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Specialization $specialization)
    {
        $specialization->delete();

        return success();
    }
}
