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
        Schema::create('stocks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('purchase_id')
                ->constrained('purchases')
                ->references('id')
                ->cascadeOnDelete();

            $table->foreignId('product_id')
                ->constrained('products')
                ->references('id')
                ->cascadeOnDelete();

            $table->double('price');
            $table->double('unit_price');
            $table->double('quantity');
            $table->double('available');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stocks');
    }
};
