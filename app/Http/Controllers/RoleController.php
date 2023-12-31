<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleStoreRequest;
use App\Http\Requests\RoleUpdateRequest;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class RoleController extends Controller
{
    public function __construct()
    {
        $this->middleware(['permission:roles.show'])->only(['index', 'show']);
        $this->middleware(['permission:roles.edit'])->only(['update']);
        $this->middleware(['permission:roles.create'])->only(['store']);
        $this->middleware(['permission:roles.delete'])->only(['destroy']);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = QueryBuilder::for(Role::class)
            ->allowedFilters([AllowedFilter::exact('id'),'name'])
            ->allowedSorts(['name', 'created_at','id'])
            ->with('permissions')
            ->get();
        $permissions = Permission::orderBy('name')->get();

        return Inertia::render('Roles/Index', [
            'roles' => $roles,
            'permissions' => $permissions,
            'meta' => meta()->metaValues(['title' => __('dashboard.roles')]),

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleStoreRequest $request)
    {
        $data = $request->validated();
        $role = Role::create(['name' => $data['name']]);
        foreach (collect($data['permissions'])->where('checked', '=', true) as $permission) {
            $role->givePermissionTo($permission['name']);
        }

        return success();
    }

    public function update(RoleUpdateRequest $request, Role $role)
    {
        $data = $request->validated();
        $role->name = $data['name'];
        $role->save();

        foreach ($data['permissions'] as $permission) {
            $permission['checked'] ? $role->givePermissionTo($permission['name']) : $role->revokePermissionTo($permission['name']);
        }

        return success();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        if ($role->name === 'super-admin') {
            return error(__('cant_delete'));
        }
        $role->delete();

        return success();
    }
}
