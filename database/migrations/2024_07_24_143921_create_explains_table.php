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
        Schema::create('explains', function (Blueprint $table) {
            $table->id();
            $table->integer('explainId')->unique();
            $table->integer('kickOff')->nullable();
            $table->integer('minute')->nullable();
            $table->integer('homeScore')->nullable();
            $table->integer('awayScore')->nullable();
            $table->integer('extraTimeStatus')->nullable();
            $table->integer('extraHomeScore')->nullable();
            $table->integer('extraAwayScore')->nullable();
            $table->integer('penHomeScore')->nullable();
            $table->integer('penAwayScore')->nullable();
            $table->integer('twoRoundsHomeScore')->nullable();
            $table->integer('twoRoundsAwayScore')->nullable();
            $table->integer('winner')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('explains');
    }
};
