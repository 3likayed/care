<?php

namespace App\Http\Controllers;

use App\Http\Requests\SalaryActionStoreRequest;
use App\Models\Employee;
use App\Models\Salary;
use App\Models\SalaryAction;
use App\Services\TransactionService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\SalaryPayStoreRequest;

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

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SalaryActionStoreRequest $request)
    {

        $data = $request->validated();
        // dd($data);
        DB::beginTransaction();
        $employee = Employee::find($data['employee_id']);
        $data['salary_id'] = $employee->salary->id;
        $data['date'] = Carbon::now();
        // dd($data) ;
        $employee = $employee->salaryActions()->create($data);
        if (($data['reason'] == 'giving' && $data['picked'] == 'now') || $data['reason'] === 'loan') {

            $action = SalaryAction::where('employee_id', $data['employee_id'])->get()->first();
            TransactionService::create($action, [
                'amount' => $data['amount'],
                'status' => 'confirmed',
                'type' => 'withdraw',
            ]);
        }
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

    public function pay(SalaryPayStoreRequest $request)
    {
        $data = $request->validated();
        // dd($data);
        DB::beginTransaction();
        $employee = Employee::find($data['employee_id']);
        $employee->load('salary', 'salaryActions')->append([
            'current_month_salary_actions', 'current_month_giving_actions', 'current_month_loan_actions', 'current_month_withhold_actions'
        ]);

        if ($data['picked'] == 'total_loan') {
            foreach ($employee->salaryActions as $action) {
                if (!$action->is_confirmed) {
                    if ($action->reason == 'withhold' || $action->reason == 'loan') {
                        TransactionService::create($action, [
                            'amount' => $action->amount,
                            'status' => 'confirmed',
                            'type' => 'deposit',
                        ]);
                    } else {
                        TransactionService::create($action, [
                            'amount' => $action->amount,
                            'status' => 'confirmed',
                            'type' => 'withdraw',
                        ]);
                    }
                }
            }
        } elseif ($data['picked'] == 'partial_loan') {
            $calculated_paid_loan = $data['paid_loan'];

            foreach ($employee->salaryActions as $action) {
                if (!$action->is_confirmed) {
                    if ($action->reason == 'loan') {
                        if ($calculated_paid_loan >= $action->amount) {
                            $calculated_paid_loan = $calculated_paid_loan - $action->amount;
                            TransactionService::create($action, [
                                'amount' => $action->amount,
                                'status' => 'confirmed',
                                'type' => 'deposit',
                            ]);
                        } else {
                            // dd($calculated_paid_loan);
                            TransactionService::create($action, [
                                'amount' => $calculated_paid_loan,
                                'status' => 'confirmed',
                                'type' => 'deposit',
                            ]);                        }
                    } elseif ($action->reason == 'giving') {
                        TransactionService::create($action, [
                            'amount' => $action->amount,
                            'status' => 'confirmed',
                            'type' => 'withdraw',
                        ]);
                    } else {
                        TransactionService::create($action, [
                            'amount' => $action->amount,
                            'status' => 'confirmed',
                            'type' => 'deposit',
                        ]);
                    }
                }
            }
        }
        else
        {
            foreach ($employee->salaryActions as $action) {
                if (!$action->is_confirmed) {
                    if ($action->reason == 'withhold') {
                        TransactionService::create($action, [
                            'amount' => $action->amount,
                            'status' => 'confirmed',
                            'type' => 'deposit',
                        ]);
                    } elseif ($action->reason == 'giiving')   {
                        TransactionService::create($action, [
                            'amount' => $action->amount,
                            'status' => 'confirmed',
                            'type' => 'withdraw',
                        ]);
                    }
                }
            }
        }

        TransactionService::create($employee->salary, [
            'amount' => $employee->salary->net_amount,
            'status' => 'confirmed',
            'type' => 'withdraw',
        ]);



        DB::commit();

        return success();
    }
}

