<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\BattleSection;


class BattleSectionController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
         $battles_sections = BattleSection::all();
         return response()->json($battles_sections);
     }
    
}
