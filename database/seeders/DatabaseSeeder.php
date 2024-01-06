<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\ManualTransaction;
use App\Models\Setting;
use App\Models\Transaction;
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
                   'password' => 12345678,
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
                   'appointments.create', 'appointments.edit', 'appointments.delete', 'appointments.show', 'appointments.transactions',
                   'doctors.create', 'doctors.edit', 'doctors.delete', 'doctors.show',
                   'specializations.create', 'specializations.edit', 'specializations.delete', 'specializations.show',
                   'products.create', 'products.edit', 'products.delete', 'products.show',
                   'tools.create', 'tools.edit', 'tools.delete', 'tools.show',
                   'services.create', 'services.edit', 'services.delete', 'services.show',
                   'purchases.create', 'purchases.edit', 'purchases.delete', 'purchases.show', 'purchases.transactions',
                   'suppliers.create', 'suppliers.edit', 'suppliers.delete', 'suppliers.show',
                   'appointment-products.create', 'appointment-products.edit', 'appointment-products.delete', 'appointment-products.show',
                   'appointment-services.create', 'appointment-services.edit', 'appointment-services.delete', 'appointment-services.show',
                   'salaries.create', 'salaries.edit', 'salaries.delete', 'salaries.show',
                   'salary-actions.create', 'salary-actions.edit', 'salary-actions.delete', 'salary-actions.show',
                   'manual-transactions.show', 'manual-transactions.create',
                   'transactions.create', 'transactions.show', 'transactions.confirm',
                   'packages.create', 'packages.edit', 'packages.delete', 'packages.show',
                   'patient-packages.create', 'patient-packages.show',
                   'doctor-products.create', 'doctor-products.show',
                   'settings.edit',
                   'stocks.show',
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
        DB::beginTransaction();

        $manualTransaction = ManualTransaction::create();
        Transaction::create([
            'status' => 'confirmed',
            'amount' => 1000000,
            'transactionable_id' => $manualTransaction->id,
            'transactionable_type' => ManualTransaction::class,
            'type' => 'deposit',
            'employee_id' => 1,
        ]);
        DB::commit();
              $user->assignRole('super-admin');
              $this->call(PatientsTableSeeder::class);
              $this->call(UsersTableSeeder::class);
              $this->call(EmployeesTableSeeder::class);
    }
}
