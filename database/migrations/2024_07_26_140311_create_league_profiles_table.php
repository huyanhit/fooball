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
        Schema::create('league_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('leagueId')->unique();
            $table->integer('type')->nullable();
            $table->string('color')->nullable();
            $table->string('logo')->nullable();
            $table->string('name')->nullable();
            $table->string('shortName')->nullable();
            $table->string('subLeagueName')->nullable();
            $table->integer('totalRound')->nullable();
            $table->integer('currentRound')->nullable();
            $table->string('currentSeason')->nullable();
            $table->string('countryId')->nullable();
            $table->string('country')->nullable();
            $table->string('countryLogo')->nullable();
            $table->integer('areaId')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('league_profiles');
    }
};
