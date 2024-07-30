<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;
    protected $fillable = ['address', 'area', 'capacity', 'coach', 'created_at', 'foundingDate', 'isNational', 'leagueId', 'logo', 'name', 'teamId', 'venue', 'website'];
}
