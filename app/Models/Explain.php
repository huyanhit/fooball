<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Explain extends Model
{
    use HasFactory;

    protected $fillable = [
        'matchId', 'kickOff', 'minute', 'homeScore', 'awayScore',
        'extraTimeStatus', 'extraHomeScore', 'extraAwayScore', 'penHomeScore',
        'penAwayScore', 'twoRoundsHomeScore', 'twoRoundsAwayScore', 'winner'
    ];
}
