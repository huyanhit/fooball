<?php

namespace App\Http\Controllers;

use App\Models\LeagueProfile;
use App\Http\Requests\StoreLeagueProfileRequest;
use App\Http\Requests\UpdateLeagueProfileRequest;
use Illuminate\Http\Request;

class LeagueProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if($this->checkSaveRequest($request['save'], new LeagueProfile())){
            $leagues = $this->getJsonAPI('league');
            if(isset($leagues['data'])){
                LeagueProfile::upsert($leagues['data'], uniqueBy: ['leagueId'],
                    update: ['name', 'shortName', 'type', 'subLeagueName']);
                $leagues['data'] = collect($leagues['data'])->keyBy('leagueId');

                return response(['code'=> 0, 'data'=> LeagueProfile::get()->keyBy('leagueId')]);
            } else {
                return response($leagues, 401);
            }
        }else{
            return response(['code'=> 0, 'data'=> LeagueProfile::get()->keyBy('leagueId')]);
        }
    }
}
