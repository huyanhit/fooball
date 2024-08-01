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
        // $this->setTimeRequest(2);
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
                Cache::put('live-score', Livescore::get()->toArray());
            }else{
                return response($liveScore, 401);
            }
        }
        if($request['matchId']){
            return response(['code'=> 0, 'data'=> Livescore::where('matchId', $request['matchId'])->get()->toArray()]);
        }

        return response(['code'=> 0, 'data'=> Cache::get('live-score')?? Livescore::get()->toArray()]);
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
    public function store(StoreLivescoreRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Livescore $liveScore)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Livescore $liveScore)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLivescoreRequest $request, Livescore $liveScore)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Livescore $liveScore)
    {
        //
    }
}
