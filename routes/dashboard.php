<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\PurchaseBillController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ReservationTypeController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\ProductController;

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'dashboard', 'as' => 'dashboard.'], function () {
    Route::middleware('guest:dashboard')->group(function () {
        Route::get('login', [AuthenticatedSessionController::class, 'create'])
            ->name('login');
        Route::post('login', [AuthenticatedSessionController::class, 'store']);
    });
    Route::middleware('auth:dashboard')->group(function () {
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
        Route::apiResource('patients', PatientController::class);
        Route::get('fetch/patients', [PatientController::class,'fetch'])->name('fetch.patients');
        Route::apiResource('reservation-types', ReservationTypeController::class);
        Route::apiResource('reservations', ReservationController::class);
        Route::apiResource('suppliers', SupplierController::class);
        Route::get('fetch/suppliers', [SupplierController::class,'fetch'])->name('fetch.suppliers');
        Route::apiResource('products', ProductController::class);
        Route::get('fetch/products', [ProductController::class,'fetch'])->name('fetch.products');
        Route::apiResource('purchaseBills', PurchaseBillController::class);
        Route::get('fetch/purchaseBills', [PurchaseBillController::class,'fetch'])->name('fetch.purchaseBills');


    });

});
