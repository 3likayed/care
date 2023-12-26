<?php

namespace App\Http\Controllers;

use App\Http\Requests\PackageStoreRequest;
use App\Http\Requests\PackageUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Package;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:packages.show'])->only(['index']);
        $this->middleware(['permission:packages.edit'])->only(['update']);
        $this->middleware(['permission:packages.create'])->only(['store']);
        $this->middleware(['permission:packages.delete'])->only(['destroy']);
    }

    public function index(Request $request)
    {
        $packages = QueryBuilder::for(Package::class)
            ->allowedFilters(AllowedFilter::exact('id'), 'name')
            ->allowedSorts(['id', 'name', 'min', 'max'])
            ->paginate($request->per_page);
        $services = Service::all();
        return Inertia::render('Packages/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.packages')]),
            'data' => ModelCollection::make($packages),
            'services' => $services,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PackageStoreRequest $request)
    {

        $data = $request->validated();
        $package = Package::create($data);
        return success(to: route('dashboard.packages.index', $package->id));

    }

    public function update(PackageUpdateRequest $request, Package $package)
    {

        $data = $request->validated();
        $package->update($data);

        return success();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(package $package)
    {
        $package->delete();
        return success();
    }
}
