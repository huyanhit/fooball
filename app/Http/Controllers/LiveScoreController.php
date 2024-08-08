<?php

namespace App\Http\Controllers;

use App\Models\Explain;
use App\Models\Livescore;
use App\Http\Requests\StoreLivescoreRequest;
use App\Http\Requests\UpdateLivescoreRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;

class LiveScoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $this->setTimeRequest(60);
        if($this->checkSaveRequest($request['save'], new Livescore())){
            $liveScore = $this->getJsonAPI('livescores');
            if(isset($liveScore['data'])){
                $ids = collect($liveScore['data'])->pluck('matchId');
                Cache::put('live-score-ids', $ids);
                foreach ($liveScore['data'] as $data){
                    unset($data['extraExplain']);
                    Livescore::upsert($data, ['matchId'], ["matchId","leagueType","leagueId","leagueName",
                        "leagueShortName","leagueColor","subLeagueId","subLeagueName","matchTime","startTime","halfStartTime",
                        "status","homeId","homeName","awayId","awayName","homeScore","awayScore","homeHalfScore","awayHalfScore",
                        "homeRed","awayRed","homeYellow","awayYellow","homeCorner","awayCorner","homeRank","awayRank","season","stageId",
                        "round","group","location","weather","temperature","explain","hasLineup","neutral","injuryTime","updateTime","var",
                    ]);
                }
            }else{
                return response($liveScore, 401);
            }
        }

        if($request['matchId']){
            return response(['code'=> 0,
                'system' => $this->getServerInfo(),
                'data' => Livescore::where('matchId', $request['matchId'])->get()->keyBy('matchId')
            ]);
        }

        return response(['code'=> 0,
            'system' => $this->getServerInfo(),
            'data'   => Livescore::whereIn('matchId', Cache::get('live-score-ids'))->get()->keyBy('matchId')
        ]);
    }

    public function change(Request $request)
    {
        $this->setTimeRequest(20);
        if($this->checkSaveRequest($request['save'], new Livescore())){
            $liveScore = $this->getJsonAPI('livescores/changes');
            if(isset($liveScore['data'])){
                foreach ($liveScore['data'] as $data){
                    unset($data['extraExplain']);
                    Livescore::upsert($data, ['matchId'], ["matchId","leagueType","leagueId","leagueName",
                        "leagueShortName","leagueColor","subLeagueId","subLeagueName","matchTime","startTime","halfStartTime",
                        "status","homeId","homeName","awayId","awayName","homeScore","awayScore","homeHalfScore","awayHalfScore",
                        "homeRed","awayRed","homeYellow","awayYellow","homeCorner","awayCorner","homeRank","awayRank","season","stageId",
                        "round","group","location","weather","temperature","explain","hasLineup","neutral","injuryTime","updateTime","var",
                    ]);
                }
                $ids = collect($liveScore['data'])->pluck('matchId');
                Cache::put('live-score-change', Livescore::whereIn('matchId', $ids)->get()->keyBy('matchId'));
            }else{
                return response($liveScore, 401);
            }
        }

        if($request['matchId']){
            return response(['code'=> 0,
                'system' => $this->getServerInfo(),
                'data'   => Livescore::where('matchId', $request['matchId'])->get()->keyBy('matchId')
            ]);
        }

        return response(['code'=> 0,
            'system' => $this->getServerInfo(),
            'data' => Cache::get('live-score-change')
        ]);
    }
}
