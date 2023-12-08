<?php

namespace App\Http\Controllers;

use App\Http\Requests\SalaryStoreRequest;
use App\Models\Salary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SalaryController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:salaries.show'])->only(['index', 'show']);
        $this->middleware(['permission:salaries.edit'])->only(['update']);
        $this->middleware(['permission:salaries.create'])->only(['store']);
        $this->middleware(['permission:salaries.delete'])->only(['destroy']);
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
    public function store(SalaryStoreRequest $request)
    {
        $data = $request->validated();
        DB::beginTransaction();
        Salary::create($data);
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
