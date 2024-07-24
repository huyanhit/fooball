<?php

namespace App\Http\Controllers;

class LiveScoreController extends Controller
{
    public function index(): string
    {
        return $this->getJsonAPI('country');
    }
}
