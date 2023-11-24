<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeStoreRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware(['permission:employees.show,dashboard'])->only(['index', 'show']);
        $this->middleware(['permission:employees.edit'])->only(['update']);
        $this->middleware(['permission:employees.create'])->only(['store']);
        $this->middleware(['permission:employees.delete'])->only(['destroy']);
    }

    public function show(Employee $employee)
    {
        return Inertia::render('Employees/Show', [
            'data' => $employee,
            'meta' => meta()->metaValues(['title' => "$employee->name | " . __('dashboard.patients')]),
        ]);
    }

    public function index(Request $request)
    {

        $employees = Employee::filter($request->only(['search', 'trashed']))->paginate();

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
        $employee = Employee::create($data);
        $employee->assignRole(Role::findById($data['role']));
        DB::commit();

        return success();

    }

    public function update(EmployeeUpdateRequest $request, Employee $employee)
    {

        DB::beginTransaction();
        $data = $request->validated();
        if (!$data['password']) {
            unset($data['password']);
        }
        $employee->update($data);
        if ($employee->role->id != $data['role']) {
            $employee->syncRoles(Role::find($data['role'])->name);
            $employee->save();
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
