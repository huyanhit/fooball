<?php

namespace App\Http\Controllers;

use App\Models\Odd;
use App\Http\Requests\StoreOddRequest;
use App\Http\Requests\UpdateOddRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class OddController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if($this->checkSaveRequest($request['save'], new Odd())){
            $odd = $this->getJsonAPI('odds/main/changes');
            if(isset($odd['data'])){
                foreach ($odd['data'] as $key => $value){
                    Odd::updateOrCreate(['companyIdMain' => $key], ['odds' => json_encode($value)]);
                }
                Cache::put('odds', $this->processOdd(Odd::get()->toArray()));
            }else{
                return response($odd, 401);
            }
        }
        if($request['matchId']){
            return response(['code'=> 0, 'data'=> $this->processOdd(Odd::get()->toArray(), $request['matchId'])]);
        }

        return response(['code'=> 0, 'data'=> Cache::get('odds')??$this->processOdd(Odd::get()->toArray())]);
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
        $handicap = array('matchId','companyId','instantHandicap','instantHome','instantAway','maintenance','inPlay','changeTime','close','OddsType');
        $europeOdds = array('matchId','companyId','instantHome','instantDraw','instantAway','changeTime','close','OddsType');
        $overUnder = array('matchId','companyId','instantHandicap','instantOver','instantUnder','changeTime','close','OddsType');
        $handicapHalf = array('matchId','companyId','instantHandicap','instantHome','instantAway','changeTime','OddsType');
        $overUnderHalf = array('matchId','companyId','instantHandicap','instantOver','instantUnder','changeTime','OddsType');
        foreach ($odd as $key => $value){
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

            $result[$odd[$key]['companyIdMain']] = $odd[$key]['odds'];
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
