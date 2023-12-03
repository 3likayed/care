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
        Schema::create('appointment_product', function (Blueprint $table) {
            $table->id();
            $table->integer('quantity');
            $table->foreignId('appointment_id')
                ->unique()
                ->constrained('appointments')
                ->references('id')
                ->cascadeOnDelete();
            $table->foreignId('product_id')
                ->unique()
                ->constrained('products')
                ->references('id')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointment_product');
    }
};