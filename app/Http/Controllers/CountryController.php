<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Http\Requests\StoreCountryRequest;
use App\Http\Requests\UpdateCountryRequest;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $countriesData = Country::get();
        if($countriesData->isEmpty()){
            $countries = $this->getJsonAPI('country');
            if(!empty($countries['data'])){
                Country::upsert($countries['data'], uniqueBy: ['countryId'], update: ['country']);
                return Country::get();
            } else {
                return $countries;
            }
        }

        return $countriesData;
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
    public function store(StoreCountryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Country $country)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Country $country)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCountryRequest $request, Country $country)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Country $country)
    {
        //
    }

}
