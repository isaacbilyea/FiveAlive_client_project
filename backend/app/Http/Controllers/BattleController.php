<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Battle;


class BattleController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

   public function getAll() {
      $battles = Battle::join('battles_sections', 'battles.id', '=', 'battles_sections.battle_id' )->select('battles.id', 'title','year','summary', 'battles_sections.heading', 'battles_sections.description', 'battles_sections.image')->get();
      return response()->json($battles);
   }

   public function getOne($id) {
      $battles = Battle::join('battles_sections', 'battles.id', '=', 'battles_sections.battle_id' )->select('battles.id', 'title','year','summary', 'battles_sections.heading', 'battles_sections.description', 'battles_sections.image')->where('battles.id', '=', $id)->get();
        return response()->json($battles);
   }

}
