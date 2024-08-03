<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OddDetail extends Model
{
    use HasFactory;
    protected $fillable =  [
        'matchId', 'companyId', 'type', 'key', 'initialHandicap',
        'initialHome', 'initialOver', 'initialDraw', 'initialUnder',
        'initialAway', 'instantHandicap', 'instantHome', 'instantOver', 'instantDraw',
        'instantUnder', 'instantAway', 'maintenance', 'inPlay', 'handicapIndex',
        'handicapCount', 'changeTime', 'close', 'OddsType'
    ];
}
