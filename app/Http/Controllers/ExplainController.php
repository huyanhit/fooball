<?php

namespace App\Http\Controllers;

use App\Models\Explain;
use App\Http\Requests\StoreExplainRequest;
use App\Http\Requests\UpdateExplainRequest;
use App\Models\Result;

class ExplainController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
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
    public function store(StoreExplainRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Explain $explain)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Explain $explain)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateExplainRequest $request, Explain $explain)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Explain $explain)
    {
        //
    }
}
