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
        Schema::create('appointment_service', function (Blueprint $table) {
            $table->id();
            $table->unsignedDouble('tool_consumption');
            $table->unsignedDouble('unit_price');
            $table->foreignId('appointment_id')
                ->constrained('appointments')
                ->references('id')
                ->cascadeOnDelete();
            $table->foreignId('service_id')
                ->constrained('services')
                ->references('id');
            $table->foreignId('tool_id')
                ->nullable()
                ->constrained('tools')
                ->references('id');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointment_service');
    }
};
