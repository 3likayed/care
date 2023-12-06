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

        $user = Employee::create([
            'name' => 'Test User',
            'phone' => ['01159169615'],
            'address' => ['address1'],
        ])->user()->create(
            [
                'email' => 'admin@app.com',
                'password' => bcrypt(12345678)
            ]
        );
        app()[PermissionRegistrar::class]->forgetCachedPermissions();
        Role::create(['name' => 'super-admin']);
        $permissionsByRole = [
            'super-admin' => [
                'employees.create', 'employees.edit', 'employees.delete', 'employees.show',
                'roles.create', 'roles.edit', 'roles.delete', 'roles.show',
                'patients.create', 'patients.edit', 'patients.delete', 'patients.show',
                'appointment-types.create', 'appointment-types.edit', 'appointment-types.delete', 'appointment-types.show',
                'appointments.create', 'appointments.edit', 'appointments.delete', 'appointments.show',
                'doctors.create', 'doctors.edit', 'doctors.delete', 'doctors.show',
                'specializations.create', 'specializations.edit', 'specializations.delete', 'specializations.show',
                'products.create', 'products.edit', 'products.delete', 'products.show',
                'services.create', 'services.edit', 'services.delete', 'services.show',
                'purchases.create', 'purchases.edit', 'purchases.delete', 'purchases.show',
                'suppliers.create', 'suppliers.edit', 'suppliers.delete', 'suppliers.show',
                'appointment-product.create', 'appointment-product.edit', 'appointment-product.delete', 'appointment-product.show',
                'settings.edit',
            ],
        ];
        $insertPermissions = fn($role) => collect($permissionsByRole[$role])
            ->map(fn($name) => DB::table('permissions')->insertGetId(['name' => $name, 'guard_name' => 'web']))
            ->toArray();
        $permissionIdsByRole = [
            'super-admin' => $insertPermissions('super-admin'),
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
        $user->assignRole('super-admin');
        $this->call(PatientsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(EmployeesTableSeeder::class);
    }
}
