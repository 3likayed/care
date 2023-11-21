<?php

namespace App\Http\Middleware;

use App\Http\Resources\Site\SiteCategoryResource;
use App\Http\Resources\Site\SiteContactResource;
use App\Http\Resources\Site\SitePageResource;
use App\Http\Resources\Site\SitePartnerResource;
use App\Http\Resources\Site\SiteProjectCategoryResource;
use App\Models\Category;
use App\Models\Page;
use App\Models\Partner;
use App\Models\ProjectCategory;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class HandleSiteInertiaRequest extends Middleware
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

        return 'site';

    }

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), $this->getSharedDate());
    }

    public function getSharedDate(): array
    {

        $siteData = [
            'name' => settings()->name,
            'description' => settings()->description,
            'location' => settings()->location,
            'pages' => SitePageResource::collection(Page::with('meta')->get()),
            'contact' => SiteContactResource::make(settings()),
            'partners' => SitePartnerResource::collection(Partner::all()),
            'categories' => SiteCategoryResource::collection(Category::parents()->with(['services', 'meta'])->get()),
            'projectCategories' => SiteProjectCategoryResource::collection(ProjectCategory::with('meta')->get()),
        ];

        return [
            'site' => $siteData,
            'locales' => [
                'current' => LaravelLocalization::getCurrentLocale(),
                'supported' => config('laravellocalization.supportedLocales'),
            ],
            'language' => translations('site', app()->currentLocale()),
            'flash' => [
                'error' => \request()->session()->get('error'),
                'success' => \request()->session()->get('success'),
            ],
        ];

    }
}
