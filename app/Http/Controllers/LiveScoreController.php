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
        $this->setTimeRequest(3600);
        $from = Carbon::parse(Carbon::now()->toDateString())->timestamp;
        $to   = Carbon::parse(Carbon::now()->addDay(1)->toDateString())->timestamp;
        if($this->checkSaveRequest($request['save'], new Livescore())){
            $liveScore = $this->getJsonAPI('livescores');
            if(isset($liveScore['data'])){
                foreach ($liveScore['data'] as $data){
                    $data['extraExplain']['matchId'] = $data['matchId'];
                    $explain = $data['extraExplain'];
                    unset($data['extraExplain']);
                    Explain::updateOrCreate(['matchId' => $explain['matchId']], $explain);
                    Livescore::updateOrCreate(['matchId' => $data['matchId']], $data);
                }
                Cache::put('live-score', Livescore::whereBetween('matchTime', [$from, $to])->get());
            }else{
                return response($liveScore, 401);
            }
            if($request['matchId']) {
                Cache::put('live-score-' . $request['matchId'], Livescore::where('matchId', $request['matchId'])->get());
            }
        }
        if($request['matchId']){
            return response(['code'=> 0,
                'system' => $this->getServerInfo(),
                'data'=> Cache::get('live-score-'.$request['matchId'])??
                    Livescore::where('matchId', $request['matchId'])->get()]);
        }

        return response(['code'=> 0, 'system' => $this->getServerInfo(),
            'data'=> Cache::get('live-score')?? Livescore::whereBetween('matchTime', [$from, $to])->get()]);
    }

    public function change(Request $request)
    {
        $this->setTimeRequest(60);
        $from = Carbon::parse(Carbon::now()->toDateString())->timestamp;
        $to   = Carbon::parse(Carbon::now()->addDay(1)->toDateString())->timestamp;
        if($this->checkSaveRequest($request['save'], new Livescore())){
            $liveScore = $this->getJsonAPI('livescores/changes');
            if(isset($liveScore['data'])){
                foreach ($liveScore['data'] as $data){
                    $data['extraExplain']['matchId'] = $data['matchId'];
                    $explain = $data['extraExplain'];
                    unset($data['extraExplain']);
                    Explain::updateOrCreate(['matchId' => $explain['matchId']], $explain);
                    Livescore::updateOrCreate(['matchId' => $data['matchId']], $data);
                }
                Cache::put('live-score', Livescore::whereBetween('matchTime', [$from, $to])->get());
            }else{
                return response($liveScore, 401);
            }
            if($request['matchId']) {
                Cache::put('live-score-' . $request['matchId'], Livescore::where('matchId', $request['matchId'])->get());
            }
        }

        if($request['matchId']){
            return response(['code'=> 0,
                'system' => $this->getServerInfo(),
                'data'=> Cache::get('live-score-'.$request['matchId'])??
                    Livescore::where('matchId', $request['matchId'])->get()]);
        }

        return response(['code'=> 0,
            'system' => $this->getServerInfo(),
            'data'=> Cache::get('live-score')?? Livescore::whereBetween('matchTime', [$from, $to])->get()
        ]);
    }
}
