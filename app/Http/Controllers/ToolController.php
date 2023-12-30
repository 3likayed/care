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
        $this->middleware(['permission:tools.show'])->only(['index', 'show', 'fetch']);
        $this->middleware(['permission:tools.edit'])->only(['update']);
        $this->middleware(['permission:tools.create'])->only(['store']);
        $this->middleware(['permission:tools.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $tools = QueryBuilder::for(Tool::class)
            ->allowedFilters([AllowedFilter::exact('id'), 'name'])
            ->allowedSorts(['name', 'stocks_sum_available', 'id'])
            ->paginate($request->per_page);

        return Inertia::render('Tools/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.tools')]),
            'data' => ModelCollection::make($tools),
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

    public function update(ToolUpdateRequest $request, Tool $tool)
    {

        $data = $request->validated();
        $tool->update($data);

        return success();
    }

    public function show(Tool $tool)
    {
        return Inertia::render('Tools/Show', [
            'data' => $tool,
            'meta' => meta()->metaValues(['title' => [__('dashboard.tools'), $tool->name]]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tool $tool)
    {
        $tool->delete();

        return success();
    }
}
