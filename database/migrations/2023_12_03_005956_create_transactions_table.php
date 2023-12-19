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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedDouble('amount');
            $table->enum('type', ['deposit', 'withdraw']);
            $table->enum('status', ['pending', 'confirmed']);
            $table->nullableMorphs('transactionable');
            $table->foreignId('employee_id')
                ->constrained('employees')
                ->references('id');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
