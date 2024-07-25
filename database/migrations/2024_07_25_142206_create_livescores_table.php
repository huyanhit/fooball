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
        Schema::create('livescores', function (Blueprint $table) {
            $table->id();
            $table->string('matchId');
            $table->integer('leagueType');
            $table->string('leagueId');
            $table->string('leagueName')->nullable();
            $table->string('leagueShortName')->nullable();
            $table->string('leagueColor')->nullable();
            $table->string('subLeagueId')->nullable();
            $table->string('subLeagueName')->nullable();
            $table->bigInteger('matchTime')->nullable();
            $table->bigInteger('halfStartTime')->nullable();
            $table->integer('status')->nullable();
            $table->string('homeId')->nullable();
            $table->string('homeName')->nullable();
            $table->string('awayId')->nullable();
            $table->string('awayName')->nullable();
            $table->integer('homeScore')->nullable();
            $table->integer('awayScore')->nullable();
            $table->integer('homeHalfScore')->nullable();
            $table->integer('awayHalfScore')->nullable();
            $table->integer('homeRed')->nullable();
            $table->integer('awayRed')->nullable();
            $table->integer('homeYellow')->nullable();
            $table->integer('awayYellow')->nullable();
            $table->integer('homeCorner')->nullable();
            $table->integer('awayCorner')->nullable();
            $table->string('homeRank')->nullable();
            $table->string('awayRank')->nullable();
            $table->string('season')->nullable();
            $table->string('stageId')->nullable();
            $table->string('round')->nullable();
            $table->string('group')->nullable();
            $table->string('location')->nullable();
            $table->string('weather')->nullable();
            $table->string('temperature')->nullable();
            $table->string('explain')->nullable();
            $table->boolean('hasLineup')->nullable();
            $table->boolean('neutral')->nullable();
            $table->integer('injuryTime')->nullable();
            $table->bigInteger('updateTime')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('livescores');
    }
};
