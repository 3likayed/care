<?php

namespace App\Http\Middleware;

use App\Services\UserService;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleDashboardInertiaRequests extends Middleware
{
    /**
     * @return string
     */
    public function rootView(Request $request)
    {

        return 'dashboard';

    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */

    public function share(Request $request): array
    {

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => \request()->user(),
                'doctor' => fn() => UserService::authDoctor(),
            ],
            'ziggy' => function () {
                return array_merge((new Ziggy('dashboard'))->toArray(), [
                    'location' => \request()->url(),
                ]);
            },
            'language' => translations('dashboard', app()->currentLocale()),
            'flash' => [
                'error' => \request()->session()->get('error'),
                'success' => \request()->session()->get('success'),
            ],
        ]);
    }

}
