<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookmakerController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\LeagueController;
use App\Http\Controllers\LeagueProfileController;
use App\Http\Controllers\LiveScoreController;
use App\Http\Controllers\OddController;
use App\Http\Controllers\OddDetailController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\TeamController;
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
Route::resource('/odds', OddController::class);
Route::resource('/odds-detail', OddDetailController::class);
Route::resource('/teams', TeamController::class);
Route::resource('/players', PlayerController::class);

Route::get('/get-image-url', [ImageController::class, 'getImageUrl']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/logout', [AuthController::class, 'logout'])->name('api.logout');
    Route::resource('/user', UserController::class);
});
