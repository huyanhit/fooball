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
        Schema::create('results', function (Blueprint $table) {
            $table->id();
            $table->string('matchId');
            $table->string('leagueId');
            $table->integer('leagueType');
            $table->string('leagueName')->nullable();
            $table->string('leagueShortName')->nullable();
            $table->bigInteger('matchTime')->nullable();
            $table->integer('status')->nullable();
            $table->string('homeName')->nullable();
            $table->string('awayName')->nullable();
            $table->integer('homeScore')->nullable();
            $table->integer('awayScore')->nullable();
            $table->string('explain')->nullable();
            $table->boolean('neutral')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('results');
    }
};
