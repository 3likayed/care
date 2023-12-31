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
        Schema::create('doctor_product', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')
                ->constrained('doctors')
                ->references('id')
                ->cascadeOnDelete();
            $table->foreignId('product_id')
                ->constrained('products')
                ->references('id');
            $table->unsignedDouble('available');
            $table->unique(['product_id', 'doctor_id']);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctor_product');
    }
};
