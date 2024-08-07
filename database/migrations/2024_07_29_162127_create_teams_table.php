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
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->string('teamId');
            $table->string('leagueId');
            $table->string('name');
            $table->string('logo');
            $table->string('foundingDate');
            $table->string('address');
            $table->string('area');
            $table->string('venue');
            $table->integer('capacity');
            $table->string('coach');
            $table->string('website');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
