<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use Illuminate\Http\Request;
use PHPUnit\Logging\TeamCity\TestFinishedSubscriber;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if($this->checkSaveRequest($request['save'], 'team')){
            $teams = $this->getJsonAPI('team');
            if(isset($teams['data'])){
                $chunk = array_chunk($teams['data'], 1000);
                foreach ($chunk as $data){
                    Team::upsert($data, uniqueBy: ['teamId'],
                        update: ['leagueId', 'name', 'logo', 'foundingDate',
                            'address', 'area', 'venue', 'name', 'capacity', 'coach', 'website']);
                }
            } else {
                return response($teams, 401);
            }
        }else{
            return response(['code'=> 0, 'data'=> Team::limit(1000)->get()->keyBy('teamId')]);
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
    public function store(StoreTeamRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($team)
    {
        $team = Team::where('teamId', $team)->first();
        /*$players = $this->getJsonAPI('player', ['teamId' => $team->teamId]);
        if($players['data']){
            $team->players = $players['data'];
        }*/

        return response($team);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Team $team)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeamRequest $request, Team $team)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        //
    }
}
