<?php

namespace App\Http\Controllers;

use App\Models\League;
use App\Http\Requests\StoreLeagueRequest;
use App\Http\Requests\UpdateLeagueRequest;

class LeagueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $leaguesData = League::paginate();
        if($leaguesData->isEmpty()){
            $leagues = $this->getJsonAPI('league/basic');
            if(!empty($leagues['data'])){
                League::upsert($leagues['data'], uniqueBy: ['leagueId'],
                    update: ['name', 'shortName', 'type', 'subLeagueName']);
                    return League::paginate();
            } else {
                return $leagues;
            }
        }

        return $leaguesData;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLeagueRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(League $league)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(League $league)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLeagueRequest $request, League $league)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(League $league)
    {
        //
    }
}
