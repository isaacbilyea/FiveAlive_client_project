<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Media;


class MediaController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getMedia() {
         $media = Media::all();
         return response()->json($media);
     }
    
}
