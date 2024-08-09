<?php

namespace App\Http\Controllers;

use App\Exceptions\AuthException;
use App\Exceptions\ProcessException;
use App\Services\PermissionService;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Cache;

class Controller extends BaseController {

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    const API_KEY = '?api_key=YLYolSxM4O1N78Ij';
    const API_KEY_2 = '?api_key=ZS7RR6ijpzY3iiM3';
    const API_KEY_3 = '?api_key=JHPZ4oMu9KJhGJ5w';

    const API_CHANEL = 'sport/football/';
    const API_DOMAIN = 'http://api.isportsapi.com/';

    private int $timeRequest = 0;
    public function getJsonAPI($path, $params = [])
    {
        $paramStr = '';

        if(!empty($params)) {
            foreach ($params as $key => $val) {
                $paramStr .= '&' . $key . '=' . $val;
            }
        }

        return json_decode(file_get_contents(self::API_DOMAIN .self::API_CHANEL. $path . self::API_KEY . $paramStr), true);
    }

    public function getServerInfo(): array
    {
        return ['time' => Carbon::now()->timestamp , 'timezone'=> config('timezone')];
    }

    public function setTimeRequest($second){
        $this->timeRequest = $second;
    }
    public function checkSaveRequest($save, $api): bool
    {
        if($save){
            return true;
        }else if($this->timeRequest > 0){
            $getTime = Cache::has('updated_'.$api)? Cache::get('updated_'.$api): 0;
            if(!$getTime || (Carbon::now()->diffInSeconds($getTime) > $this->timeRequest)){
                Cache::put('updated_'.$api, Carbon::now());
                return true;
            }
        }

        return false;
    }
}
