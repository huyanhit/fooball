<?php
namespace App\Http\Controllers;
use App\Models\Image;
use App\Models\LeagueProfile;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

/**
 * NewsController
 *
 * Controller to house all the functionality directly
 * related to the Admin.
 */
class ImageController extends Controller
{
    const PUBLIC_STORAGE = '';
    public function getImageUrl(Request $request){
        $id = $request->get('id');
        $category = $request->get('category');
        $prop = $request->get('prop');
        $file = null;
        switch ($category){
            case 'league-profile':
                $file = LeagueProfile::find($id);
                break;
            case 'team':
                $file = Team::find($id);
                break;
        }
        if(!empty($file) && preg_match('/(\w+)(\.\w+)+(?!.*(\w+)(\.\w+)+)/m', $file[$prop])){
            $image = Image::where('url',  $file[$prop])->first();
            if(empty($image)){
                $id = $this->uploadUrl($category, $prop, $file[$prop]);
                $image = Image::find($id);
            }

            $file = Storage::disk('local')->get($image->path);
            $type = Storage::mimeType($image->path);

            return response($file)->header('Content-Type', $type);
        }
    }

    private function uploadUrl($category, $prop, $url)
    {
        preg_match('/(\w+)(\.\w+)+(?!.*(\w+)(\.\w+)+)/m', $url, $match);
        $pathStore = $category.'/'.$prop.'/'.self::PUBLIC_STORAGE.$match[0];
        Storage::disk('local')->put($pathStore, file_get_contents($url));

        return Image::insertGetId(['url'=> $url, 'path'=> $pathStore, 'type'=> 'image']);
    }
}
