<?php

namespace App\Http\Controllers;

use App\Http\Requests\DoctorStoreRequest;
use App\Http\Requests\DoctorUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Doctor;
use App\Models\Specialization;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:doctors.show'])->only(['index', 'show']);
        $this->middleware(['permission:doctors.edit'])->only(['update']);
        $this->middleware(['permission:doctors.create'])->only(['store']);
        $this->middleware(['permission:doctors.delete'])->only(['destroy']);
    }

    public function show(Doctor $doctor)
    {

        return Inertia::render('Doctors/Show', [
            'data' => $doctor,
            'meta' => meta()->metaValues(['title' => "$doctor->name | " . __('dashboard.patients')]),
        ]);
    }

    public function index(Request $request)
    {

        $doctors = QueryBuilder::for(Doctor::class)
            ->with('specializations')
            ->allowedFilters(
                AllowedFilter::scope('search'),
                'name',
                'email'
            )
            ->get();
        $specializations = Specialization::all();

        return Inertia::render('Doctors/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.doctors')]),
            'data' => ModelCollection::make($doctors),
            'specializations' => $specializations,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DoctorStoreRequest $request)
    {

        DB::beginTransaction();
        $data = $request->validated();
        $user = User::create($data['user']);
        $user->assignRole(settings()->doctor_role);
        $employee = $user->employee()->create($data);
        $doctor = $employee->doctor()->create();
        $doctor->specializations()->sync($data['specializations']);

        DB::commit();

        return success();

    }

    public function update(DoctorUpdateRequest $request, Doctor $doctor)
    {

        DB::beginTransaction();
        $data = $request->validated();
        if (!isset($data['password']) || !$data['password']) {
            unset($data['password']);
        }
        $doctor->employee()->update($data);
        if ($doctor->role->id != $data['role']) {
            $doctor->syncRoles(Role::find($data['role'])->name);
            $doctor->save();
        }
        DB::commit();

        return success();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctor $doctor)
    {
        $doctor->delete();

        return success();
    }
}
