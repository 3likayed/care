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
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            1 => [
                'id' => 2,
                'name' => 'employees.edit',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            2 => [
                'id' => 3,
                'name' => 'employees.delete',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            3 => [
                'id' => 4,
                'name' => 'employees.show',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            4 => [
                'id' => 5,
                'name' => 'roles.create',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            5 => [
                'id' => 6,
                'name' => 'roles.edit',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            6 => [
                'id' => 7,
                'name' => 'roles.delete',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            7 => [
                'id' => 8,
                'name' => 'roles.show',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            8 => [
                'id' => 9,
                'name' => 'patients.create',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            9 => [
                'id' => 10,
                'name' => 'patients.edit',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            10 => [
                'id' => 11,
                'name' => 'patients.delete',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            11 => [
                'id' => 12,
                'name' => 'patients.show',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            12 => [
                'id' => 13,
                'name' => 'appointment-types.create',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            13 => [
                'id' => 14,
                'name' => 'appointment-types.edit',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            14 => [
                'id' => 15,
                'name' => 'appointment-types.delete',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            15 => [
                'id' => 16,
                'name' => 'appointment-types.show',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            16 => [
                'id' => 17,
                'name' => 'appointments.create',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            17 => [
                'id' => 18,
                'name' => 'appointments.edit',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            18 => [
                'id' => 19,
                'name' => 'appointments.delete',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            19 => [
                'id' => 20,
                'name' => 'appointments.show',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            20 => [
                'id' => 21,
                'name' => 'doctors.create',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            21 => [
                'id' => 22,
                'name' => 'doctors.edit',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            22 => [
                'id' => 23,
                'name' => 'doctors.delete',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            23 => [
                'id' => 24,
                'name' => 'doctors.show',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            24 => [
                'id' => 25,
                'name' => 'specializations.create',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            25 => [
                'id' => 26,
                'name' => 'specializations.edit',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            26 => [
                'id' => 27,
                'name' => 'specializations.delete',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            27 => [
                'id' => 28,
                'name' => 'specializations.show',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            28 => [
                'id' => 29,
                'name' => 'products.create',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            29 => [
                'id' => 30,
                'name' => 'products.edit',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            30 => [
                'id' => 31,
                'name' => 'products.delete',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            31 => [
                'id' => 32,
                'name' => 'products.show',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            32 => [
                'id' => 33,
                'name' => 'purchase-bills.create',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            33 => [
                'id' => 34,
                'name' => 'purchase-bills.edit',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            34 => [
                'id' => 35,
                'name' => 'purchase-bills.delete',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            35 => [
                'id' => 36,
                'name' => 'purchase-bills.show',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            36 => [
                'id' => 37,
                'name' => 'suppliers.create',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            37 => [
                'id' => 38,
                'name' => 'suppliers.edit',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            38 => [
                'id' => 39,
                'name' => 'suppliers.delete',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            39 => [
                'id' => 40,
                'name' => 'suppliers.show',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
            40 => [
                'id' => 41,
                'name' => 'settings.edit',
                'guard_name' => 'web',
                'created_at' => null,
                'updated_at' => null,
            ],
        ]);

    }
}
