<?php

namespace App\Http\Controllers;

use App\Models\Bookmaker;
use App\Http\Requests\StoreBookmakerRequest;
use App\Http\Requests\UpdateBookmakerRequest;

class BookmakerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bookmakersData = Bookmaker::paginate();
        if($bookmakersData->isEmpty()){
            $bookmakers = $this->getJsonAPI('bookmaker');
            if(!empty($bookmakers['data'])){
                Bookmaker::upsert($bookmakers['data'], uniqueBy: ['companyIdEu'],
                    update: ['companyName', 'companyIdMain']);
                return Bookmaker::paginate();
            } else {
                return $bookmakers;
            }
        }

        return $bookmakersData;
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
