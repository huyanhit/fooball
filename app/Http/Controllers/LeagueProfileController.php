<?php

namespace App\Http\Controllers;

use App\Models\LeagueProfile;
use App\Http\Requests\StoreLeagueProfileRequest;
use App\Http\Requests\UpdateLeagueProfileRequest;

class LeagueProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $leagueProfileData = LeagueProfile::get();
        if($leagueProfileData->isEmpty()){
            $leagueProfile = $this->getJsonAPI('league');
            if(!empty($leagueProfile['data'])){
                LeagueProfile::upsert($leagueProfile['data'], uniqueBy: ['leagueId'],
                    update: ['name', 'shortName', 'type', 'subLeagueName']);
                LeagueProfile::get()->toArray();
            } else {
                return $leagueProfile;
            }
        }

        return $leagueProfileData->toArray();
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
    public function store(StoreLeagueProfileRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(LeagueProfile $leagueProfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LeagueProfile $leagueProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLeagueProfileRequest $request, LeagueProfile $leagueProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LeagueProfile $leagueProfile)
    {
        //
    }
}
