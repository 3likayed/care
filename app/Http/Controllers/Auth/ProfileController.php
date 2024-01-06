<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfilePasswordUpdateRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Employee;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Auth/Profile', [
            'user' => Auth::user()->load('userable'),
            'meta' => meta()->metaValues(['title' => __('dashboard.profile')]),
        ]);
    }

    public function updatePassword(ProfilePasswordUpdateRequest $request)
    {


        $user = $request->user();

        if (Hash::check($request->current_password, $user->password)) {
            $user->update([
                'password' => $request->password
            ]);
            return success();

        } else {
            throw ValidationException::withMessages([
                'current_password' => __('dashboard.wrong_password'),
            ]);
        }

    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request)
    {
        $request->user()->fill($request->validated());
        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }
        Employee::where('id', $request->user()->userable_id)->update([
            'name' => $request->name
        ]);

        $request->user()->save();

        return success();
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::guard()->logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
