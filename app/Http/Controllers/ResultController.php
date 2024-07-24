<?php

namespace App\Http\Controllers;

use App\Models\Explain;
use App\Models\Result;
use App\Http\Requests\StoreResultRequest;
use App\Http\Requests\UpdateResultRequest;

class ResultController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resultsData = Result::paginate();
        if($resultsData->isEmpty()){
            $results = $this->getJsonAPI('schedule/basic', ['leagueId' => '1639']);
            if(!empty($results['data'])){
                foreach ($results['data'] as $data){
                    $data['extraExplain']['matchId'] = $data['matchId'];
                    $explain = $data['extraExplain'];
                    unset($data['extraExplain']);
                    Explain::updateOrCreate(['matchId' => $explain['matchId']], $explain);
                    Result::updateOrCreate(['matchId' => $data['matchId']], $data);
                }

                return Result::paginate();
            } else {
                return $results;
            }
        }

        return $resultsData;
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
    public function store(StoreResultRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Result $result)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Result $result)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResultRequest $request, Result $result)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Result $result)
    {
        //
    }
}
