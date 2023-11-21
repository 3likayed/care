<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')
                ->on('patients')
                ->references('id')
                ->cascadeOnDelete();

            $table->foreignId('reservation_type_id')
                ->on('reservation_types')
                ->references('id')
                ->cascadeOnDelete();

            $table->string('total');
            $table->string('discount');
            $table->dateTime('reserved_at');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
