<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Team;
use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $matchIds = Cache::get('live-score-ids');
        $this->setTimeRequest(30);
        if($this->checkSaveRequest($request['save'], new Event())){
            $events = $this->getJsonAPI('events');
            if(isset($events['data'])){
                foreach ($events['data'] as $value){
                    $event = [];
                    foreach ($value['events'] as $key => $val){
                        $event[$key] = $val;
                        $event[$key]['matchId'] = $value['matchId'];
                    }
                    Event::upsert($event, ['matchId', 'eventId'], []);
                }
                Cache::put('events', Event::whereIn('matchId', $matchIds)->orderBy('minute', 'desc')
                    ->get()->groupBy(function ($item){
                        return $item->matchId;
                    })
                );
            } else {
                return response($events, 401);
            }

            if($request['matchId']){
                return response(['code'=> 0, 'data' => Event::where('matchId', $request['matchId'])
                    ->orderBy('minute', 'desc')->get()->groupBy(function ($item){
                        return $item->matchId;
                    })
                ]);
            }
        }

        return response(['code'=> 0, 'data' => Cache::get('events')]);
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
        return response(Team::where('teamId', $team)->first());
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
