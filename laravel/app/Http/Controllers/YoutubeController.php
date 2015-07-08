<?php
/**
 * Created by PhpStorm.
 * User: wat
 * Date: 07/07/2015
 * Time: 11:10
 */

namespace App\Http\Controllers;

use Log;
use Alaouy\Youtube\Facades\Youtube;

use Illuminate\Support\Facades\Response;
use \Request;

class youtubeController extends Controller {

    public function index(){
        $id = Request::input('id');
        Log::info($id);
        try {
            $response = [
                'playlist' => []
            ];
            $statusCode = 200;

            $playlist = Youtube::getPlaylistById( $id /*'PL6tfF39y5tId7wzpMAhTnCv5NbNUUFa8U'*/, ['contentDetails']);

            $response[ 'playlist' ][ ] = [
                'id' => $playlist->id,
                'contentDetails' => $playlist->contentDetails,
            ];

        } catch (\Exception $e) {
            Log::info($e);
            $statusCode = 404;
        } finally {
            return Response::json($response, $statusCode);
        }
    }

    public function show($id){
        try {
            $response = [
                'playlist' => []
            ];
            $statusCode = 200;

            $playlist = Youtube::getPlaylistById( $id /*'PL6tfF39y5tId7wzpMAhTnCv5NbNUUFa8U'*/, ['contentDetails']);

            $response[ 'playlist' ][ ] = [
                'id' => $playlist->id,
                'contentDetails' => $playlist->contentDetails,
            ];

        } catch (\Exception $e) {
            Log::info($e);
            $statusCode = 404;
        } finally {
            return Response::json($response, $statusCode);
        }
    }

} 