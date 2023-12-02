<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        \DB::table('permissions')->delete();

        \DB::table('permissions')->insert([
            0 => [
                'id' => 1,
                'name' => 'employees.create',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            1 => [
                'id' => 2,
                'name' => 'employees.edit',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            2 => [
                'id' => 3,
                'name' => 'employees.delete',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            3 => [
                'id' => 4,
                'name' => 'employees.show',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            4 => [
                'id' => 5,
                'name' => 'roles.create',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            5 => [
                'id' => 6,
                'name' => 'roles.edit',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            6 => [
                'id' => 7,
                'name' => 'roles.delete',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            7 => [
                'id' => 8,
                'name' => 'roles.show',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            8 => [
                'id' => 9,
                'name' => 'patients.create',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            9 => [
                'id' => 10,
                'name' => 'patients.edit',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            10 => [
                'id' => 11,
                'name' => 'patients.delete',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            11 => [
                'id' => 12,
                'name' => 'patients.show',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            12 => [
                'id' => 13,
                'name' => 'settings.edit',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            13 => [
                'id' => 14,
                'name' => 'appointment-types.edit',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            14 => [
                'id' => 15,
                'name' => 'appointment-types.delete',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            15 => [
                'id' => 16,
                'name' => 'appointment-types.show',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            16 => [
                'id' => 17,
                'name' => 'appointment-types.create',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            17 => [
                'id' => 18,
                'name' => 'appointments.edit',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            18 => [
                'id' => 19,
                'name' => 'appointments.delete',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            19 => [
                'id' => 20,
                'name' => 'appointments.show',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
            20 => [
                'id' => 21,
                'name' => 'appointments.create',
                'guard_name' => 'dashboard',
                'created_at' => null,
                'updated_at' => null,
            ],
        ]);

    }
}
