<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AppointmentProductController;
use App\Http\Controllers\AppointmentTypeController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\DoctorProductController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PatientController;
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
        Route::apiResource('patients', PatientController::class);
        Route::get('fetch/patients', [PatientController::class, 'fetch'])->name('fetch.patients');
        Route::apiResource('appointment-types', AppointmentTypeController::class);
        Route::apiResource('specializations', SpecializationController::class);
        Route::apiResource('doctors', DoctorController::class);
        Route::apiResource('appointments', AppointmentController::class);
        Route::apiResource('appointment-products', AppointmentProductController::class);
        Route::apiResource('suppliers', SupplierController::class);
        Route::apiResource('purchases', PurchaseController::class);
        Route::post('purchases/{purchase}/transaction', [PurchaseController::class, 'transaction'])->name('purchases.transaction');
        Route::apiResource('products', ProductController::class);
        Route::apiResource('doctor-products', DoctorProductController::class)->only(['index', 'store']);
        Route::get('fetch/products', [ProductController::class, 'fetch'])->name('fetch.products');
        Route::apiResource('services', ServiceController::class);
        Route::get('fetch/services', [ServiceController::class, 'fetch'])->name('fetch.services');

        Route::apiResource('transactions', TransactionController::class);
        Route::get('stocks', [StockController::class, 'index'])->name('stocks.index');
        Route::get('fetch/stocks', [StockController::class, 'fetch'])->name('fetch.stocks');
    });

});
