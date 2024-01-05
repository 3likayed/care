<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServiceStoreRequest;
use App\Http\Requests\ServiceUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:services.show'])->only(['index', 'show', 'fetch']);
        $this->middleware(['permission:services.edit'])->only(['update']);
        $this->middleware(['permission:services.create'])->only(['store']);
        $this->middleware(['permission:services.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $services = QueryBuilder::for(Service::class)
            ->allowedFilters([AllowedFilter::exact('id'), 'name'])
            ->allowedSorts(['name', 'consumed', 'unit_price', 'id', 'created_at'])
            ->paginate($request->per_page);

        return Inertia::render('Services/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.services')]),
            'data' => ModelCollection::make($services),
        ]);
    }

    public function fetch(Request $request)
    {

        return QueryBuilder::for(Service::class)
            ->allowedFilters(['name'])
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ServiceStoreRequest $request)
    {

        $data = $request->validated();

        Service::create($data);

        return success();

    }

    public function update(ServiceUpdateRequest $request, Service $service)
    {

        $data = $request->validated();
        $service->update($data);

        return success();
    }

    public function show(Service $service)
    {
        return Inertia::render('Services/Show', [
            'data' => $service,
            'meta' => meta()->metaValues(['title' => [__('dashboard.services'), $service->name]]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        $service->delete();

        return success();
    }
}
