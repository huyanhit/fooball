<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use App\Http\Requests\StoreScheduleRequest;
use App\Http\Requests\UpdateScheduleRequest;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request){
        if($this->checkSaveRequest($request['save'], 'schedule')){
            $schedules = $this->getJsonAPI('schedule/modify');
            if(isset($schedules['data'])){
                Schedule::upsert($schedules['data'], uniqueBy: ['matchId'],
                    update: ['type', 'matchTime', 'modifyTime']);
                $schedules['data'] = collect($schedules['data'])->keyBy('matchId');
                return response(['code'=> 0, 'data'=> Schedule::get()->keyBy('matchId')]);
            } else {
                return response($schedules, 401);
            }
        }else{
            return response(['code'=> 0, 'data'=> Schedule::get()->keyBy('matchId')]);
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
    public function store(StoreScheduleRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Schedule $schedule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Schedule $schedule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateScheduleRequest $request, Schedule $schedule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Schedule $schedule)
    {
        //
    }
}
