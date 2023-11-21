<?php

namespace Database\Seeders;


use App\Models\Employee;
use App\Models\Setting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // \App\Models\User::factory(10)->create();

        $employee = Employee::create([
            'name' => 'Test User',
            'email' => 'admin@app.com',
            'phone' => ['01159169615'],
            'address' => ['address1'],
            'password' => bcrypt(12345678),
        ]);
        app()[PermissionRegistrar::class]->forgetCachedPermissions();
        Role::create(['name' => 'employee', 'guard_name' => 'dashboard']);
        $permissionsByRole = [
            'employee' => [
                'employees.create', 'employees.edit', 'employees.delete', 'employees.show',
                'roles.create', 'roles.edit', 'roles.delete', 'roles.show',
                'patients.create', 'patients.edit', 'patients.delete', 'patients.show',
                'reservation-type.create', 'reservation-type.edit', 'reservation-type.delete', 'reservation-type.show',
                'settings.edit',
            ],
        ];
        $insertPermissions = fn($role) => collect($permissionsByRole[$role])
            ->map(fn($name) => DB::table('permissions')->insertGetId(['name' => $name, 'guard_name' => 'dashboard']))
            ->toArray();
        $permissionIdsByRole = [
            'employee' => $insertPermissions('employee'),
        ];
        foreach ($permissionIdsByRole as $role => $permissionIds) {
            $role = Role::whereName($role)->first();

            DB::table('role_has_permissions')
                ->insert(
                    collect($permissionIds)->map(fn($id) => [
                        'role_id' => $role->id,
                        'permission_id' => $id,
                    ])->toArray()
                );



    }
        $settings = Setting::create([]);
        $settings->meta()->create([]);
        $employee->assignRole('employee');

        $this->call(PatientsTableSeeder::class);
    }
}
