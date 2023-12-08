<?php

namespace App\Http\Controllers;

use App\Http\Requests\SalaryActionStoreRequest;
use App\Models\Employee;
use App\Models\Salary;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SalaryActionsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:salary-actions.show'])->only(['index', 'show']);
        $this->middleware(['permission:salary-actions.edit'])->only(['update']);
        $this->middleware(['permission:salary-actions.create'])->only(['store']);
        $this->middleware(['permission:salary-actions.delete'])->only(['destroy']);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return;
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(SalaryActionStoreRequest $request)
    {
        $data = $request->validated();
        DB::beginTransaction();
        $employee = Employee::find($data['employee_id']);
        $data['salary_id'] = $employee->salary->id;
        $data['date'] = Carbon::now();

        $employee->salaryActions()->create($data);
        DB::commit();
        return success();
    }

    /**
     * Display the specified resource.
     */
    public function show(Salary $salary)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Salary $salary)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Salary $salary)
    {
        //
    }
}
