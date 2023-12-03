<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class EmployeesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('employees')->delete();
        
        \DB::table('employees')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Test User',
                'phone' => '["01159169615"]',
                'address' => '["address1"]',
                'employable_type' => NULL,
                'employable_id' => NULL,
                'remember_token' => NULL,
                'deleted_at' => NULL,
                'created_at' => '2023-12-03 01:18:56',
                'updated_at' => '2023-12-03 01:18:56',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'على',
                'phone' => '["01159169615"]',
                'address' => '["01159169615"]',
                'employable_type' => NULL,
                'employable_id' => NULL,
                'remember_token' => NULL,
                'deleted_at' => NULL,
                'created_at' => '2023-12-03 01:21:24',
                'updated_at' => '2023-12-03 01:32:10',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'علي',
                'phone' => '["01159169615"]',
                'address' => '["عنوان"]',
                'employable_type' => NULL,
                'employable_id' => NULL,
                'remember_token' => NULL,
                'deleted_at' => NULL,
                'created_at' => '2023-12-03 01:42:28',
                'updated_at' => '2023-12-03 01:42:28',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'علي',
                'phone' => '["01159169615"]',
                'address' => '["عنوان"]',
                'employable_type' => NULL,
                'employable_id' => NULL,
                'remember_token' => NULL,
                'deleted_at' => NULL,
                'created_at' => '2023-12-03 01:44:57',
                'updated_at' => '2023-12-03 01:44:57',
            ),
        ));
        
        
    }
}