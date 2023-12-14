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
        Schema::create('appointment_product', function (Blueprint $table) {
            $table->id();
            $table->unsignedDouble('quantity');
            $table->unsignedDouble('unit_price');
            $table->foreignId('appointment_id')
                ->constrained('appointments')
                ->references('id')
                ->cascadeOnDelete();
            $table->foreignId('product_id')
                ->constrained('products')
                ->references('id')
                ->cascadeOnDelete();
            $table->unique(['appointment_id', 'product_id']);
            $table->softDeletes();
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
