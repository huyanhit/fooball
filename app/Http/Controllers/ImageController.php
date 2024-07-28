<?php
namespace App\Http\Controllers;
use App\Models\Image;
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
        $url = $request->get('url');

        if(preg_match('/(\w+)(\.\w+)+(?!.*(\w+)(\.\w+)+)/m', $url)){

            $image = Image::where('url', $url)->first();
            if(empty($image)){
                $id = $this->uploadUrl($url);
                $image = Image::find($id);
            }

            $file = Storage::disk('local')->get($image->path);
            $type = Storage::mimeType($image->path);

            return response($file)->header('Content-Type', $type);
        }
    }

    private function uploadUrl($url)
    {
        preg_match('/(\w+)(\.\w+)+(?!.*(\w+)(\.\w+)+)/m', $url, $match);
        $pathStore = self::PUBLIC_STORAGE.$match[0];
        Storage::disk('local')->put($pathStore, file_get_contents($url));

        return Image::insertGetId(['url'=>$url, 'path'=>$pathStore, 'type'=>'image']);
    }
}
