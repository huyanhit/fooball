<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookmakerController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\LeagueController;
use App\Http\Controllers\LeagueProfileController;
use App\Http\Controllers\LiveScoreController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [AuthController::class, 'login'])->name('api.login');
Route::post('/register', [AuthController::class, 'register'])->name('api.register');

Route::resource('/country', CountryController::class);
Route::resource('/league', LeagueController::class);
Route::resource('/league-profile', LeagueProfileController::class);
Route::resource('/bookmaker', BookmakerController::class);
Route::resource('/schedule', ScheduleController::class);
Route::resource('/result', ResultController::class);
Route::resource('/live-score', LiveScoreController::class);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/logout', [AuthController::class, 'logout'])->name('api.logout');
    Route::resource('/user', UserController::class);
});
