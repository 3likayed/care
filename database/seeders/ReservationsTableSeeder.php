<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ReservationsTableSeeder extends Seeder
{
    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        \DB::table('appointments')->delete();

        \DB::table('appointments')->insert([
            0 => [
                'id' => 1,
                'patient_id' => 1,
                'appointment_type_id' => 2,
                'price' => '100',
                'date' => 1700703878000,
                'discount' => null,
                'deleted_at' => null,
                'created_at' => null,
                'updated_at' => null,
            ],
        ]);

    }
}
