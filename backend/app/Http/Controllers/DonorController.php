<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Donor;


class DonorController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function getAll() {
      $donors = Donor::all();
      return response()->json($donors);
    }

    public function getOne($id) {
      $donor = Donor::select('id', 'name', 'amount', 'donated_date')->where('id', '=', $id)->get();
      return response()->json($donor);
    }

    public function save(Request $request) {
      $this->validate($request, [
         'name' => 'required',
          'amount' => 'required|numeric',
          'donated_date' => 'required|date'
      ]);
      $donor = Donor::create($request->all());
      return response()->json($donor, 201);
    }

    public function update(Request $request, $id) {
      $donor = Donor::findOrFail($id);

      $this->validate($request, [
         'name' => 'required',
          'amount' => 'required|numeric',
          'donated_date' => 'required|date'
      ]);
      $donor->update($request->all());
      return response()->json($donor);
    }

    public function delete($id) {
      $donor = Donor::findOrFail($id);
      $donor->delete();
      return response()->json(null, 204);
    }
}
