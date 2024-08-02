<?php

namespace App\Http\Controllers;

use App\Models\Odd;
use App\Http\Requests\StoreOddRequest;
use App\Http\Requests\UpdateOddRequest;
use App\Models\OddDetail;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class OddDetailController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if($this->checkSaveRequest($request['save'], new Odd())){
            $odds[1] = $this->getJsonAPI('odds/main');
            $odds[2] = $this->getJsonAPI('odds/main/changes');
            $odds[3] = $this->getJsonAPI('odds/main/future');
            $odds[4] = $this->getJsonAPI('odds/main/history', ['date'=>Carbon::now()->format('Y/m/d')]);
            // $odds[5] = $this->getJsonAPI('/odds/all');
            // $odds[6] = $this->getJsonAPI('odds/all/changes');
            foreach ($odds as $key => $odd){
                if(isset($odd['data'])){
                    foreach ($odd['data'] as $type => $data){
                        $this->processOdd($key, $type, $data);
                    }
                }
            }

            //Cache::put('odds', $this->processOdd(Odd::get()->toArray()));
        }
        if($request['matchId']){
            return response(['code'=> 0, 'data' => OddDetail::where('matchId', $request['matchId'])->get()]);
        }

        return response(['code'=> 0, 'data' => OddDetail::where('key', 1)->get()]);
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
    public function store(StoreOddRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Odd $odd)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Odd $odd)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOddRequest $request, Odd $odd)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Odd $odd)
    {
        //
    }

    private function processOdd($key, $type, $data){
        if($key == 1){
            $handicap = array('matchId','companyId', 'initialHandicap', 'initialHome', 'initialAway','instantHandicap','instantHome','instantAway','maintenance','inPlay', 'changeTime','close','OddsType');
            $europeOdds = array('matchId','companyId','initialHome','initialDraw','initialAway','instantHome','instantDraw','instantAway','changeTime','close','OddsType');
            $overUnder = array('matchId','companyId','initialHandicap', 'initialOver', 'initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime','close','OddsType');
            $handicapHalf = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway', 'instantHandicap','instantHome','instantAway','changeTime','OddsType');
            $overUnderHalf = array('matchId','companyId','initialHandicap', 'initialOver','initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime','OddsType');
        }else if($key == 2) {
            $handicap = array('matchId', 'companyId', 'instantHandicap', 'instantHome', 'instantAway', 'maintenance', 'inPlay', 'changeTime', 'close', 'OddsType');
            $europeOdds = array('matchId', 'companyId', 'instantHome', 'instantDraw', 'instantAway', 'changeTime', 'close', 'OddsType');
            $overUnder = array('matchId', 'companyId', 'instantHandicap', 'instantOver', 'instantUnder', 'changeTime', 'close', 'OddsType');
            $handicapHalf = array('matchId', 'companyId', 'instantHandicap', 'instantHome', 'instantAway', 'changeTime', 'OddsType');
            $overUnderHalf = array('matchId', 'companyId', 'instantHandicap', 'instantOver', 'instantUnder', 'changeTime', 'OddsType');
        }else if($key == 5){
            $handicap = array('matchId','companyId', 'initialHandicap', 'initialHome', 'initialAway','instantHandicap','instantHome','instantAway','maintenance','inPlay',
                'handicapIndex', 'handicapCount', 'changeTime','close','OddsType');
            $europeOdds = array('matchId','companyId','initialHome','initialDraw','initialAway','instantHome','instantDraw','instantAway','changeTime',
                'handicapIndex', 'close','OddsType');
            $overUnder = array('matchId','companyId','initialHandicap','initialOver','initialUnder','instantHandicap','instantOver','instantUnder',
                'handicapIndex', 'changeTime','close','OddsType');
            $handicapHalf = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway', 'instantHandicap','instantHome','instantAway',
                'inPlay', 'handicapIndex','changeTime','OddsType');
            $overUnderHalf = array('matchId','companyId','initialHandicap', 'initialOver','initialUnder', 'instantHandicap','instantOver','instantUnder',
                'handicapIndex','changeTime','OddsType');
        }else{
            $handicap = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway','instantHandicap','instantHome','instantAway','maintenance','inPlay','changeTime','close');
            $europeOdds = array('matchId','companyId','initialHome','initialDraw','initialAway','instantHome','instantDraw','instantAway','changeTime','close');
            $overUnder = array('matchId','companyId','initialHandicap', 'initialOver', 'initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime','close');
            $handicapHalf = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway', 'instantHandicap','instantHome','instantAway','changeTime');
            $overUnderHalf = array('matchId','companyId','initialHandicap', 'initialOver','initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime');
        }

        $data = array_map(function($item){
            return explode(',', $item);
        }, $data);

        $results = [];

        foreach ($data as $val){
            switch ($type){
                case 'handicap':
                    $results[] = $this->combineOdd($handicap, $val, $key, $type);
                    break;
                case 'europeOdds':
                    $results[] =$this->combineOdd($europeOdds, $val, $key, $type);
                    break;
                case 'overUnder':
                    $results[] =$this->combineOdd($overUnder, $val, $key, $type);
                    break;
                case 'handicapHalf':
                    $results[] =$this->combineOdd($handicapHalf, $val, $key, $type);
                    break;
                case 'overUnderHalf':
                    $results[] = $this->combineOdd($overUnderHalf, $val, $key, $type);
                    break;
            }
        }
        foreach (array_chunk($results, 1000) as $chunk) {
            OddDetail::upsert($chunk, uniqueBy: ['matchId', 'companyId', 'type', 'key'],
                update: []);
        }
    }

    private function combineOdd($odd, $data, $key, $type){
        $combine = array_combine($odd, $data);
        $combine['key'] = $key;
        $combine['type'] = $type;

        return $combine;
    }
}
