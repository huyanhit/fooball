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
        Schema::create('odd_details', function (Blueprint $table) {
            $table->id();
            $table->string('matchId')->nullable();
            $table->string('companyId')->nullable();
            $table->string('type')->nullable();
            $table->string('key')->nullable();
            $table->string('initialHandicap')->nullable();
            $table->string('initialHome')->nullable();
            $table->string('initialOver')->nullable();
            $table->string('initialDraw')->nullable();
            $table->string('initialUnder')->nullable();
            $table->string('initialAway')->nullable();
            $table->string('instantHandicap')->nullable();
            $table->string('instantHome')->nullable();
            $table->string('instantOver')->nullable();
            $table->string('instantDraw')->nullable();
            $table->string('instantUnder')->nullable();
            $table->string('instantAway')->nullable();
            $table->string('maintenance')->nullable();
            $table->string('inPlay')->nullable();
            $table->string('handicapIndex')->nullable();
            $table->string('handicapCount')->nullable();
            $table->string('changeTime')->nullable();
            $table->string('close')->nullable();
            $table->string('OddsType')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('odd_details');
    }
};
