<?php

namespace App\Http\Controllers;

use App\Models\Explain;
use App\Models\Livescore;
use App\Http\Requests\StoreLivescoreRequest;
use App\Http\Requests\UpdateLivescoreRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class LiveScoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
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
                Cache::put('live-score', Livescore::orderBy('id', 'DESC')->get());
            }else{
                return response($liveScore, 401);
            }
        }
        if($request['matchId']){
            return response(['code'=> 0, 'data'=> Livescore::where('matchId', $request['matchId'])->get()]);
        }

        return response(['code'=> 0, 'data'=> Cache::get('live-score')??Livescore::orderBy('id', 'DESC')->get()]);
    }

    public function change(Request $request)
    {
        $this->setTimeRequest(60);
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
                Cache::put('live-score', Livescore::orderBy('id', 'DESC')->get());
            }else{
                return response($liveScore, 401);
            }
        }

        if($request['matchId']){
            return response(['code'=> 0, 'data'=> Livescore::where('matchId', $request['matchId'])->get()]);
        }

        return response(['code'=> 0, 'data'=> Cache::get('live-score')?? Livescore::orderBy('id', 'DESC')->get()]);
    }
}
