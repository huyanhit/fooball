<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;

    protected $fillable = [
        'matchId', 'leagueId', 'leagueType', 'leagueName', 'leagueShortName',
        'matchTime', 'status', 'homeName', 'awayName',
        'homeScore', 'awayScore', 'explain', 'neutral'
    ];
}
