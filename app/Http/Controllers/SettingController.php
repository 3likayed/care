<?php

namespace App\Http\Controllers;

use App\Http\Requests\SettingUpdateRequest;
use App\Http\Resources\SettingsResource;
use App\Models\Setting;
use App\Services\FilesService;
use DB;
use Inertia\Inertia;
use Throwable;

use function App\Http\Controllers\Dashboard\success;

class SettingController extends Controller
{
    private $filesService;

    public function __construct(FilesService $filesService)
    {
        $this->middleware(['permission:settings.edit'])->only(['update', 'edit']);
        $this->filesService = $filesService;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {

        return Inertia::render('Settings/Index', [
            'settings' => SettingsResource::make(settings()),
            'meta' => meta()->metaValues(['title' => __('dashboard.settings')]),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @throws Throwable
     */
    public function update(SettingUpdateRequest $request)
    {
        $data = $request->validated();
        DB::beginTransaction();

        $setting = Setting::first();
        if (! empty($data['logo'])) {
            $this->filesService->deleteFile($setting->logo);
            $extension = $data['logo']->getExtension() ?? 'webp';
            $data['logo'] = $this->uploadFile($data['logo'], 'assets', "logo.$extension");
        } else {
            unset($data['logo']);
        }
        $setting = Setting::updateOrCreate([], $data);
        $setting->meta()->update($data['meta']);
        DB::commit();

        return success();
    }

    /**
     * Remove the specified resource from storage.
     */
}
