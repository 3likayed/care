<?php

use App\Http\Controllers\Site\Auth\AuthenticatedSessionSiteController;
use App\Http\Controllers\Site\Auth\ConfirmablePasswordSiteController;
use App\Http\Controllers\Site\Auth\EmailVerificationNotificationSiteController;
use App\Http\Controllers\Site\Auth\EmailVerificationPromptSiteController;
use App\Http\Controllers\Site\Auth\NewPasswordSiteController;
use App\Http\Controllers\Site\Auth\PasswordResetLinkSiteController;
use App\Http\Controllers\Site\Auth\PasswordSiteController;
use App\Http\Controllers\Site\Auth\RegisteredUserSiteController;
use App\Http\Controllers\Site\Auth\VerifyEmailSiteController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest:web')->group(function () {

    Route::get('register/google', [AuthenticatedSessionSiteController::class, 'redirectToGoogle'])
        ->name('register.google');
    Route::get('register/google/redirect', [AuthenticatedSessionSiteController::class, 'handleGoogleCallback'])
        ->name('register.google.redirect');

    Route::get('register', [RegisteredUserSiteController::class, 'create'])
        ->name('register');
    Route::post('register', [RegisteredUserSiteController::class, 'store']);

    Route::get('login', [AuthenticatedSessionSiteController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionSiteController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkSiteController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkSiteController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordSiteController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordSiteController::class, 'store'])
        ->name('password.store');
});

Route::middleware('auth:web')->group(function () {
    Route::get('verify-email', EmailVerificationPromptSiteController::class)
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailSiteController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationSiteController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordSiteController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordSiteController::class, 'store']);

    Route::put('password', [PasswordSiteController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionSiteController::class, 'destroy'])
        ->name('logout');
});
