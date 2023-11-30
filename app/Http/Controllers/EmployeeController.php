<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeStoreRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:employees.show'])->only(['index', 'show']);
        $this->middleware(['permission:employees.edit'])->only(['update']);
        $this->middleware(['permission:employees.create'])->only(['store']);
        $this->middleware(['permission:employees.delete'])->only(['destroy']);
    }

    public function show(Employee $employee)
    {
        $roles = Role::all();

        return Inertia::render('Employees/Show', [
            'data' => $employee,
            'meta' => meta()->metaValues(['title' => "$employee->name | " . __('dashboard.patients')]),
            'roles' => $roles,
        ]);
    }

    public function index(Request $request)
    {

        $employees = QueryBuilder::for(Employee::class)
            ->allowedFilters(
                AllowedFilter::scope('search'),
                'name',
                'phone',
                'user.email',

            )
            ->allowedSorts('name','email',AllowedSort::field('has_user','user_id'),'created_at')
            ->get();
        $roles = Role::all();

        return Inertia::render('Employees/Index', [
            'meta' => meta()->metaValues(['title' => __('dashboard.employees')]),
            'data' => ModelCollection::make($employees),
            'roles' => $roles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmployeeStoreRequest $request)
    {

        DB::beginTransaction();
        $data = $request->validated();

        if (isset($data['user']['email'])) {
            $user = User::create($data['user']);
            $user->assignRole($data['user']['role']);
            $user->employee()
                ->create($data);
        } else {
            Employee::create($data);
        }
        DB::commit();

        return success();

    }

    public function update(EmployeeUpdateRequest $request, Employee $employee)
    {

        DB::beginTransaction();
        $data = $request->validated();

        $employee->update($data);
        if (isset($data['user']['email'])) {
            $user = $employee->user;
            if ($user) {
                if (!isset($data['user']['password']) || !$data['user']['password']) {
                    unset($data['user']['password']);
                }
                $user->update($data['user']);
            } else {
                $user = User::create($data['user']);
                $employee->update(['user_id' => $user->id]);
            }
            if ($user->role?->id != $data['user']['role']) {
                $user->syncRoles($data['user']['role']);
                $user->save();
            }
        }

        DB::commit();

        return success();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();

        return success();
    }
}
