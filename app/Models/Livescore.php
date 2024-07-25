<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livescore extends Model
{
    use HasFactory;
    protected $fillable = [
        "matchId",
        "leagueType",
        "leagueId",
        "leagueName",
        "leagueShortName",
        "leagueColor",
        "subLeagueId",
        "subLeagueName",
        "matchTime",
        "halfStartTime",
        "status",
        "homeId",
        "homeName",
        "awayId",
        "awayName",
        "homeScore",
        "awayScore",
        "homeHalfScore",
        "awayHalfScore",
        "homeRed",
        "awayRed",
        "homeYellow",
        "awayYellow",
        "homeCorner",
        "awayCorner",
        "homeRank",
        "awayRank",
        "season",
        "stageId",
        "round",
        "group",
        "location",
        "weather",
        "temperature",
        "explain",
        "hasLineup",
        "neutral",
        "injuryTime",
        "updateTime"
    ];
}
