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
        Schema::create('salary_actions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')
                ->constrained('employees')
                ->references('id');

            $table->foreignId('salary_id')
                ->constrained('salaries')
                ->references('id');

            $table->unsignedDouble('amount');
            $table->enum('reason', ['salary', 'giving', 'loan', 'withhold'])->default('salary');
            $table->string('notes')->nullable();
            $table->date('date');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('salary_actions');
    }
};
