<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeStoreRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use App\Http\Resources\ModelCollection;
use App\Models\Employee;
use App\Services\UserService;
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
        if ($employee->employable) {
            abort(404);
        }
        $roles = Role::all();
        $employee->load('salary', 'user')->append(['current_month_salary_actions','current_month_giving_actions'
        ,'current_month_loan_actions','current_month_withhold_actions']);

        // dd($employee->toArray());
        return Inertia::render('Employees/Show', [
            'data' => $employee,
            'meta' => meta()->metaValues(['title' => "$employee->name | " . __('dashboard.employees')]),
            'roles' => $roles,
        ]);
    }

    public function index(Request $request)
    {

        $employees = QueryBuilder::for(Employee::class)
            ->with('user')
            ->whereNull('employable_id')
            ->allowedFilters(
                AllowedFilter::scope('created_at'),
                AllowedFilter::scope('search'),
                'name',
                'phone',
            )
            ->allowedSorts('id', 'name', 'phone', 'address', AllowedSort::field('has_user', 'user_id'), 'created_at')
            ->paginate($request->get('per_page'));
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
        if (isset($data['user']['email'])) {
            UserService::updateOrCreateUser($employee, $data['user']);
        }

        DB::commit();

        return success();
    }

    public function update(EmployeeUpdateRequest $request, Employee $employee)
    {
        if ($employee->employable) {
            abort(404);
        }
        DB::beginTransaction();
        $data = $request->validated();
        $employee->update($data['user']);

        if (isset($data['user']['email'])) {
            UserService::updateOrCreateUser($employee, $data['user']);
        }
        DB::commit();

        return success();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        if ($employee->employable) {
            abort(404);
        }
        $employee->delete();

        return success();
    }
}
