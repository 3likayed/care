<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PatientsTableSeeder extends Seeder
{
    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        \DB::table('patients')->delete();

        \DB::table('patients')->insert([
            0 => [
                'id' => 1,
                'name' => 'مريض 1',
                'phone' => '["01159169615"]',
                'address' => '["عنوااان3","العنوان يا دولي"]',
                'blood' => null,
                'birthday' => '2023-11-15',
                'deleted_at' => null,
                'created_at' => '2023-11-21 17:05:10',
                'updated_at' => '2023-11-21 18:53:04',
            ],
        ]);

    }
}
