<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Team;
use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if($this->checkSaveRequest($request['save'], new Player())){
            $players = $this->getJsonAPI('player');
            if(isset($players['data'])){
                Player::upsert($players['data'], uniqueBy: ['playerId'],
                    update: ['name']);
                $players['data'] = collect($players['data'])->keyBy('playerId');
                return response($players);
            } else {
                return response($players, 401);
            }
        }else{
            return response(['code' => 0, 'data' => Player::get()->keyBy('playerId')]);
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
    public function show(Team $team)
    {
        //
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
