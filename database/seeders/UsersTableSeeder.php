<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('users')->delete();

        \DB::table('users')->insert(array(
            0 =>
                array(
                    'id' => 1,
                    'email' => 'admin@app.com',
                    'email_verified_at' => NULL,
                    'password' => '$2y$10$0GFauy.MQIGsxMbfUUHpf.1CFPLj6elHcTqpkXnRRqXKLHaiE1obG',
                    'userable_type' => 'App\\Models\\Employee',
                    'userable_id' => 1,
                    'remember_token' => 'uwvOabL1XJtyuPasnwXMJbDnT7UKfF2V8cUoV3wM3u7TAOjUJxZfoIx0Nl1b',
                    'deleted_at' => NULL,
                    'created_at' => '2023-12-03 01:18:56',
                    'updated_at' => '2023-12-03 01:18:56',
                ),
            1 =>
                array(
                    'id' => 2,
                    'email' => '3liusef@gmail.com',
                    'email_verified_at' => NULL,
                    'password' => '$2y$10$R974/kf80aoiUMsi1QYngOeCG/PFJkJxFrOVoCQ9Pf3sTXHrlunEG',
                    'userable_type' => 'App\\Models\\Employee',
                    'userable_id' => 2,
                    'remember_token' => NULL,
                    'deleted_at' => NULL,
                    'created_at' => '2023-12-03 01:32:10',
                    'updated_at' => '2023-12-03 01:32:56',
                ),
            2 =>
                array(
                    'id' => 3,
                    'email' => '3asdas@gg.com',
                    'email_verified_at' => NULL,
                    'password' => '$2y$10$NcBv5QfWeXZVZA/Tk0wB5ujZrUKCp5E.ZlRwLmmC7L/lhmTPn2iem',
                    'userable_type' => 'App\\Models\\Employee',
                    'userable_id' => 4,
                    'remember_token' => NULL,
                    'deleted_at' => NULL,
                    'created_at' => '2023-12-03 01:44:57',
                    'updated_at' => '2023-12-03 01:44:57',
                ),
        ));


    }
}
