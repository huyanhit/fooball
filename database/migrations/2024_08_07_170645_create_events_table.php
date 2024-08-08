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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('eventId');
            $table->string('minute')->nullable();
            $table->integer('type')->nullable();
            $table->string('playerId')->nullable();
            $table->string('playerName')->nullable();
            $table->string('assistPlayerId')->nullable();
            $table->string('homeEvent')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
