<?php

namespace App\Http\Controllers;

use App\Exceptions\AuthException;
use App\Exceptions\ProcessException;
use App\Services\PermissionService;
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
    const API_CHANEL = 'sport/football/';
    const API_DOMAIN = 'http://api.isportsapi.com/';

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
}
