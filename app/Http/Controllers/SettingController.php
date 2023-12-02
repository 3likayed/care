<?php

namespace App\Http\Controllers;

use App\Http\Requests\SettingUpdateRequest;
use App\Models\Setting;
use DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Throwable;

class SettingController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:settings.edit'])->only(['update', 'edit']);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {

        return Inertia::render('Settings/Index', [
            'data' => settings(),
            'roles' => Role::all(),
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
        $setting = Setting::updateOrCreate([], $data);
        DB::commit();

        return success();
    }

    /**
     * Remove the specified resource from storage.
     */
}
