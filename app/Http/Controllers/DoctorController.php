<?php

namespace App\Http\Controllers;

use App\Http\Requests\DoctorStoreRequest;
use App\Http\Requests\DoctorUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Doctor;
use App\Models\Specialization;
use App\Services\UserService;
use App\Sorts\RelationSort;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
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
        $doctor->load('doctorProducts.product:id,name', 'doctorProducts.doctor', 'employee.user');

        return Inertia::render('Doctors/Show', [
            'data' => $doctor,
            'meta' => meta()->metaValues(['title' => "$doctor->name | ".__('dashboard.doctors')]),
        ]);
    }

    public function index(Request $request)
    {

        $doctors = QueryBuilder::for(Doctor::class)
            ->with('employee.user')
            ->allowedFilters(
                AllowedFilter::exact('id'),
                'employee.name',
                'employee.user.email',
                'employee.phone',
                'employee.address'
            )->allowedSorts(
                'id',
                'created_at',
                AllowedSort::custom('employee.user.email', new RelationSort()),
                AllowedSort::custom('employee.phone', new RelationSort()),
                AllowedSort::custom('employee.email', new RelationSort()),
                AllowedSort::custom('employee.address', new RelationSort()),
            )
            ->get();
        $specializations = Specialization::all();
        $roles = Role::all();

        return Inertia::render('Doctors/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.doctors')]),
            'data' => ModelCollection::make($doctors),
            'specializations' => $specializations,
            'roles' => $roles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DoctorStoreRequest $request)
    {

        DB::beginTransaction();
        $data = $request->validated();
        $doctor = Doctor::create();
        $doctor->specializations()->sync($data['specializations']);

        $employee = $doctor->employee()->create($data);
        $user = UserService::updateOrCreateUser($employee, $data['user']);
        $user->assignRole(settings()->doctor_role);
        DB::commit();

        return success();

    }

    public function update(DoctorUpdateRequest $request, Doctor $doctor)
    {

        DB::beginTransaction();
        $data = $request->validated();
        $employee = $doctor->employee;
        $employee->update($data);
        UserService::updateOrCreateUser($employee, $data['user']);
        $doctor->specializations()->sync($data['specializations']);
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
