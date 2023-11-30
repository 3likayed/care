<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AppointmentTypeController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SpecializationController;
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
        Route::apiResource('patients', PatientController::class);
        Route::get('fetch/patients', [PatientController::class, 'fetch'])->name('fetch.patients');
        Route::apiResource('appointment-types', AppointmentTypeController::class);
        Route::apiResource('specializations', SpecializationController::class);
        Route::apiResource('doctors', DoctorController::class);
        Route::apiResource('appointments', AppointmentController::class);

    });

});
