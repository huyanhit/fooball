<?php

namespace App\Http\Controllers;

use App\Models\Bookmaker;
use App\Http\Requests\StoreBookmakerRequest;
use App\Http\Requests\UpdateBookmakerRequest;
use Illuminate\Http\Request;

class BookmakerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if($this->checkSaveRequest($request['save'], new Bookmaker())){
            $bookmakers = $this->getJsonAPI('bookmaker');
            if(isset($leagues['data'])){
                Bookmaker::upsert($bookmakers['data'], uniqueBy: ['companyIdMain'],
                    update: ['companyIdEu', 'companyName']);
                return response(['code'=> 0, 'data'=> Bookmaker::get()->keyBy('companyIdMain')]);
            } else {
                return response($bookmakers, 401);
            }
        }else{
            return response(['code'=> 0, 'data'=> Bookmaker::get()->keyBy('companyIdMain')]);
        }
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
    public function store(StoreBookmakerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Bookmaker $bookmaker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bookmaker $bookmaker)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookmakerRequest $request, Bookmaker $bookmaker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bookmaker $bookmaker)
    {
        //
    }
}
