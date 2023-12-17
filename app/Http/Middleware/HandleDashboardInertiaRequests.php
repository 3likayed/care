<?php

namespace App\Http\Middleware;

use App\Services\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleDashboardInertiaRequests extends Middleware
{
    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    /**
     * @return string
     */
    public function rootView(Request $request)
    {

        return 'dashboard';

    }

    public function share(Request $request): array
    {

        return array_merge(parent::share($request), $this->getSharedDate());
    }

    public function getSharedDate()
    {
        return [
            'auth' => [
                'user' => \request()->user(),
                'doctor' => Inertia::lazy(fn() => UserService::authDoctor()),
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
        ];

    }
}
