<?php

namespace App\Http\Controllers;

use App\Http\Requests\ToolStoreRequest;
use App\Http\Requests\ToolUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Tool;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:Tools.show'])->only(['index', 'show', 'fetch']);
        $this->middleware(['permission:Tools.edit'])->only(['update']);
        $this->middleware(['permission:Tools.create'])->only(['store']);
        $this->middleware(['permission:Tools.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $Tools = QueryBuilder::for(Tool::class)
            ->where('type', 'Tool')
            ->withSum('stocks', 'available')
            ->allowedFilters([AllowedFilter::exact('id'), 'name'])
            ->allowedSorts(['name', 'stocks_sum_available', 'id'])
            ->paginate($request->per_page);

        return Inertia::render('Tools/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.Tools')]),
            'data' => ModelCollection::make($Tools),
        ]);
    }

    public function fetch(Request $request)
    {

        return QueryBuilder::for(Tool::class)
            ->allowedFilters(['name'])
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ToolStoreRequest $request)
    {

        $data = $request->validated();

        Tool::create($data);

        return success();

    }

    public function update(ToolUpdateRequest $request, Tool $Tool)
    {

        $data = $request->validated();
        $Tool->update($data);

        return success();
    }

    public function show(Tool $Tool)
    {
        $Tool->load('stocks.purchase', 'doctorTools.Tool', 'doctorTools.doctor');

        return Inertia::render('Tools/Show', [
            'data' => $Tool,
            'meta' => meta()->metaValues(['title' => [__('dashboard.Tools'), $Tool->name]]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tool $Tool)
    {
        $Tool->delete();

        return success();
    }
}
