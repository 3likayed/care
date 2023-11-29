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


        \DB::table('reservations')->delete();

        \DB::table('reservations')->insert(array (
            0 =>
            array (
                'id' => 1,
                'patient_id' => 1,
                'reservation_type_id' => 2,
                'price' => '100',
                'date' => 1700703878000,
                'discount' => NULL,
                'deleted_at' => NULL,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));


    }
}
