<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AppointmentProductController;
use App\Http\Controllers\AppointmentServiceController;
use App\Http\Controllers\AppointmentTypeController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\DoctorProductController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ManualTransactionController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\PatientPackageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SalaryActionsController;
use App\Http\Controllers\SalaryController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SpecializationController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\ToolController;
use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'dashboard', 'as' => 'dashboard.'], function () {

    Route::middleware('guest')->group(function () {
        Route::get('login', [AuthenticatedSessionController::class, 'create'])
            ->name('login');
        Route::post('login', [AuthenticatedSessionController::class, 'store']);
    });
    Route::middleware('auth')->group(function () {
        Route::get('', [HomeController::class, 'index'])->name('index');
        Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
        Route::group(['prefix' => 'profile', 'as' => 'profile.'], function () {
            Route::get('', [ProfileController::class, 'edit'])->name('edit');
            Route::post('', [ProfileController::class, 'update'])->name('update');
            Route::post('update-password', [ProfileController::class, 'updatePassword'])->name('updatePassword');
        });
        Route::group(['prefix' => 'settings', 'as' => 'settings.'], function () {
            Route::get('', [SettingController::class, 'edit'])->name('edit');
            Route::put('', [SettingController::class, 'update'])->name('update');
        });
        Route::apiResource('roles', RoleController::class)->except(['show']);
        Route::apiResource('employees', EmployeeController::class);
        Route::apiResource('salaries', SalaryController::class);
        Route::apiResource('salary-actions', SalaryActionsController::class);
        Route::post('salary-actions/salay-payment', [SalaryActionsController::class, 'pay'])->name('salary-actions.salary-payment');
        Route::apiResource('patients', PatientController::class);
        Route::apiResource('appointment-types', AppointmentTypeController::class);
        Route::apiResource('specializations', SpecializationController::class);
        Route::apiResource('doctors', DoctorController::class);
        Route::apiResource('appointments', AppointmentController::class);
        Route::apiResource('appointment-products', AppointmentProductController::class);
        Route::apiResource('appointment-services', AppointmentServiceController::class);
        Route::apiResource('products', ProductController::class);
        Route::apiResource('tools', ToolController::class);
        Route::apiResource('suppliers', SupplierController::class);
        Route::apiResource('purchases', PurchaseController::class);
        Route::apiResource('services', ServiceController::class);
        Route::group(['prefix' => 'transactions', 'as' => 'transactions.'], function () {
            Route::get('', [TransactionController::class, 'index'])->name('index');
            Route::get('manual-transactions', [ManualTransactionController::class, 'index'])->name('manual-transactions.index');
            Route::post('manual-transactions', [ManualTransactionController::class, 'store'])->name('manual-transactions');
            Route::post('appointments/{appointment}', [AppointmentController::class, 'transaction'])->name('appointments');
            Route::post('purchases/{purchase}', [PurchaseController::class, 'transaction'])->name('purchases');
        });
        Route::group(['prefix' => 'fetch', 'as' => 'fetch.'], function () {
            Route::get('fetch/patients', [PatientController::class, 'fetch'])->name('patients');
            Route::get('fetch/products', [ProductController::class, 'fetch'])->name('products');
            Route::get('fetch/services', [ServiceController::class, 'fetch'])->name('services');
            Route::get('fetch/stocks', [StockController::class, 'fetch'])->name('stocks');
        });
        Route::get('stocks', [StockController::class, 'index'])->name('stocks.index');
        Route::apiResource('doctor-products', DoctorProductController::class)->only(['index', 'store']);
        Route::apiResource('patient-packages', PatientPackageController::class)->only(['index', 'store']);
        Route::apiResource('packages', PackageController::class)->except('show');
    });

});
