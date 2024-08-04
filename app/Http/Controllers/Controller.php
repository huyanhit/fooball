<?php

namespace App\Http\Controllers;

use App\Exceptions\AuthException;
use App\Exceptions\ProcessException;
use App\Models\Livescore;
use App\Services\PermissionService;
use Carbon\Carbon;
use http\Env\Response;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use function Laravel\Prompts\select;

class Controller extends BaseController {

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    const API_KEY = '?api_key=mVOt8RqlCmJiaHo7';
    const API_KEY_2 = '?api_key=ZS7RR6ijpzY3iiM3';

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

        return json_decode(file_get_contents(self::API_DOMAIN .self::API_CHANEL. $path . self::API_KEY_2 . $paramStr), true);
    }

    public function getServerInfo(): array
    {
        return ['time' => Carbon::now()->timestamp , 'timezone'=> config('timezone')];
    }

    public function setTimeRequest($second){
        $this->timeRequest = $second;
    }
    public function checkSaveRequest($save, $model): bool
    {
        if($save){
            return true;
        }else if($this->timeRequest > 0){
            $getTime = $model::orderBy('updated_at','desc')->first();
            if(empty($getTime)) return true;
            if(Carbon::now()->diffInSeconds($getTime->updated_at) > $this->timeRequest){
                return true;
            }
        }

        return false;
    }
}
