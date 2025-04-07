<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Volunteer;


class VolunteerController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function getAll() {
      $volunteers = Volunteer::all();
      return response()->json($volunteers);
    }

    public function getOne($id) {
      $volunteer = Volunteer::select('id', 'name')->where('id', '=', $id)->get();
      return response()->json($volunteer);
    }

    public function save(Request $request) {
      $this->validate($request, [
         'name' => 'required'
      ]);
      $volunteer = Volunteer::create($request->all());
      return response()->json($volunteer, 201);
    }

    public function update(Request $request, $id) {
      $volunteer = Volunteer::findOrFail($id);

      $this->validate($request, [
         'name' => 'required'
      ]);
      $volunteer->update($request->all());
      return response()->json($volunteer);
    }

    public function delete($id) {
      $volunteer = Volunteer::findOrFail($id);
      $volunteer->delete();
      return response()->json(null, 204);
    }
}
