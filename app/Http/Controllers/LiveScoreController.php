<?php

namespace App\Http\Controllers;

use App\Models\Explain;
use App\Models\Livescore;
use App\Http\Requests\StoreLivescoreRequest;
use App\Http\Requests\UpdateLivescoreRequest;

class LiveScoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $livescoreData = Livescore::paginate();
        if($livescoreData->isEmpty()){
            $livescore = $this->getJsonAPI('livescores');
            if(!empty($livescore['data'])){
                foreach ($livescore['data'] as $data){
                    $data['extraExplain']['matchId'] = $data['matchId'];
                    $explain = $data['extraExplain'];
                    unset($data['extraExplain']);
                    Explain::updateOrCreate(['matchId' => $explain['matchId']], $explain);
                    Livescore::updateOrCreate(['matchId' => $data['matchId']], $data);
                }

                return Livescore::paginate();
            } else {
                return $livescore;
            }
        }

        return $livescoreData;
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
    public function show(Livescore $livescore)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Livescore $livescore)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLivescoreRequest $request, Livescore $livescore)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Livescore $livescore)
    {
        //
    }
}
