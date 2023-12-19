<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')
                ->constrained('patients')
                ->references('id') ;

            $table->foreignId('appointment_type_id')
                ->constrained('appointment_types')
                ->references('id') ;

            $table->foreignId('doctor_id')
                ->nullable()
                ->constrained('doctors')
                ->references('id');

            $table->foreignId('employee_id')
                ->constrained('employees')
                ->references('id');


            $table->double('total_price');
            $table->double('total_paid');
            $table->enum('status', ['completed', 'not_completed', 'pending', 'canceled'])->default('pending');
            $table->dateTime('date');
            $table->unsignedDouble('discount')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
