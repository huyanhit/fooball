<?php

namespace App\Http\Controllers;

use App\Models\LeagueProfile;
use App\Http\Requests\StoreLeagueProfileRequest;
use App\Http\Requests\UpdateLeagueProfileRequest;
use Illuminate\Http\Request;

class LeagueProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if($request['save']){
            $leagues = $this->getJsonAPI('league');
            if(isset($leagues['data'])){
                LeagueProfile::upsert($leagues['data'], uniqueBy: ['leagueId'],
                    update: ['name', 'shortName', 'type', 'subLeagueName']);
                $leagues['data'] = collect($leagues['data'])->keyBy('leagueId');

                return response($leagues);
            } else {
                return response($leagues, 401);
            }
        }else{
            return response(['code'=> 0, 'data'=> LeagueProfile::get()->keyBy('leagueId')]);
        }
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
