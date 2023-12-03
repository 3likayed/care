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
        Schema::create('purchase_transactions_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('bill_id')
                ->constrained('purchase_transactions')
                ->references('id')
                ->cascadeOnDelete();

            $table->foreignId('product_id')
                ->constrained('products')
                ->references('id')
                ->cascadeOnDelete();

            $table->string('price');
            $table->dateTime('price_unit');
            $table->double('quantity');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_transactions_products');
    }
};
