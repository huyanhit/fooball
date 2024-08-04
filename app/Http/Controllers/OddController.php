<?php

namespace App\Http\Controllers;

use App\Models\Odd;
use App\Http\Requests\StoreOddRequest;
use App\Http\Requests\UpdateOddRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class OddController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        ini_set('memory_limit', -1);
        if($this->checkSaveRequest($request['save'], new Odd())){
            $odds[1] = $this->getJsonAPI('odds/main');
            $odds[2] = $this->getJsonAPI('odds/main/changes');
            $odds[3] = $this->getJsonAPI('odds/main/future');
            $odds[4] = $this->getJsonAPI('odds/main/history', ['date'=>Carbon::now()->format('Y/m/d')]);

//            $odds[5] = $this->getJsonAPI('/odds/all');
//            $odds[6] = $this->getJsonAPI('odds/all/changes');
//            $odds[7] = $this->getJsonAPI('odds/all/history', ['date' => Carbon::now()->format('Y/m/d')]);
//            $odds[8] = $this->getJsonAPI('odds/all/future');

            foreach ($odds as $type => $odd){
                if(isset($odd['data'])){
                    foreach ($odd['data'] as $key => $value){
                        Odd::updateOrCreate(['companyIdMain' => $key, 'type' => $type], ['odds' => json_encode($value)]);
                    }
                }
            }

            //Cache::put('odds', $this->processOdd(Odd::get()->toArray()));
        }
        if($request['matchId']){
            return response(['code'=> 0, 'data'=> $this->processOdd(Odd::get()->toArray(), $request['matchId'])]);
        }

        return response(['code'=> 0, 'data'=> $this->processOdd(Odd::get()->toArray())]);
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

    private function processOdd($odd, $matchId = null){
        $result = [];
        foreach ($odd as $key => $value){
            if($value['type'] == 1){
                $handicap = array('matchId','companyId', 'initialHandicap', 'initialHome', 'initialAway','instantHandicap','instantHome','instantAway','maintenance','inPlay', 'changeTime','close','OddsType');
                $europeOdds = array('matchId','companyId','initialHome','initialDraw','initialAway','instantHome','instantDraw','instantAway','changeTime','close','OddsType');
                $overUnder = array('matchId','companyId','initialHandicap', 'initialOver', 'initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime','close','OddsType');
                $handicapHalf = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway', 'instantHandicap','instantHome','instantAway','changeTime','OddsType');
                $overUnderHalf = array('matchId','companyId','initialHandicap', 'initialOver','initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime','OddsType');
            }else if($value['type'] == 2) {
                $handicap = array('matchId', 'companyId', 'instantHandicap', 'instantHome', 'instantAway', 'maintenance', 'inPlay', 'changeTime', 'close', 'OddsType');
                $europeOdds = array('matchId', 'companyId', 'instantHome', 'instantDraw', 'instantAway', 'changeTime', 'close', 'OddsType');
                $overUnder = array('matchId', 'companyId', 'instantHandicap', 'instantOver', 'instantUnder', 'changeTime', 'close', 'OddsType');
                $handicapHalf = array('matchId', 'companyId', 'instantHandicap', 'instantHome', 'instantAway', 'changeTime', 'OddsType');
                $overUnderHalf = array('matchId', 'companyId', 'instantHandicap', 'instantOver', 'instantUnder', 'changeTime', 'OddsType');
            }else if($value['type'] == 3 || $value['type'] == 4){
                $handicap = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway','instantHandicap','instantHome','instantAway','maintenance','inPlay','changeTime','close');
                $europeOdds = array('matchId','companyId','initialHome','initialDraw','initialAway','instantHome','instantDraw','instantAway','changeTime','close');
                $overUnder = array('matchId','companyId','initialHandicap', 'initialOver', 'initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime','close');
                $handicapHalf = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway', 'instantHandicap','instantHome','instantAway','changeTime');
                $overUnderHalf = array('matchId','companyId','initialHandicap', 'initialOver','initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime');
            }else if($value['type'] == 5){
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
            }else if($value['type'] == 6){
                $handicap = array('matchId', 'companyId', 'instantHandicap', 'instantHome', 'instantAway', 'maintenance', 'inPlay','handicapIndex', 'changeTime', 'close', 'OddsType');
                $europeOdds = array('matchId', 'companyId', 'instantHome', 'instantDraw', 'instantAway','handicapIndex', 'changeTime', 'close', 'OddsType');
                $overUnder = array('matchId', 'companyId', 'instantHandicap', 'instantOver', 'instantUnder','handicapIndex', 'changeTime', 'close', 'OddsType');
                $handicapHalf = array('matchId', 'companyId', 'instantHandicap', 'instantHome', 'instantAway','inPlay', 'handicapIndex','changeTime', 'OddsType');
                $overUnderHalf = array('matchId', 'companyId', 'instantHandicap', 'instantOver', 'instantUnder','handicapIndex', 'changeTime', 'OddsType');
            }if($value['type'] == 7 || $value['type'] == 8){
                $handicap = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway','instantHandicap','instantHome','instantAway','maintenance','inPlay', 'handicapIndex', 'handicapCount','changeTime','close');
                $europeOdds = array('matchId','companyId','initialHome','initialDraw','initialAway','instantHome','instantDraw','instantAway','handicapIndex','changeTime','close');
                $overUnder = array('matchId','companyId','initialHandicap', 'initialOver', 'initialUnder', 'instantHandicap','instantOver','instantUnder','handicapIndex','changeTime','close');
                $handicapHalf = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway', 'instantHandicap','instantHome','instantAway','inPlay','handicapIndex', 'changeTime');
                $overUnderHalf = array('matchId','companyId','initialHandicap', 'initialOver','initialUnder', 'instantHandicap','instantOver','instantUnder','handicapIndex','changeTime');
            }

            $decode = is_array($value['odds'])? $value['odds']: json_decode($value['odds']);
            $data = array_map(function($item){
                return explode(',', $item);
            }, $decode);

            switch ($value['companyIdMain']){
                case 'handicap':
                    $odd[$key]['odds'] = $this->combineOdd($handicap, $data, $matchId);
                    break;
                case 'europeOdds':
                    $odd[$key]['odds'] = $this->combineOdd($europeOdds, $data, $matchId);
                    break;
                case 'overUnder':
                    $odd[$key]['odds'] = $this->combineOdd($overUnder, $data, $matchId);
                    break;
                case 'handicapHalf':
                    $odd[$key]['odds'] = $this->combineOdd($handicapHalf, $data, $matchId);
                    break;
                case 'overUnderHalf':
                    $odd[$key]['odds'] = $this->combineOdd($overUnderHalf, $data, $matchId);
                    break;
            }

            $result[$odd[$key]['companyIdMain']][$odd[$key]['type']] = $odd[$key]['odds'];
        }

        return $result;
    }

    private function combineOdd($odd, $data, $matchId){
        $results = [];
        foreach ($data as $val){
            if(!$matchId){
                $results[$val[0]][] = array_combine($odd, $val);
            }else if($val[0] === $matchId){
                $results[$val[0]][] = array_combine($odd, $val);
            }
        }

        return $results;
    }
}
