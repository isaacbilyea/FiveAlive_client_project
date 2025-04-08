<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Newsletter;


class NewsletterController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function getAll() {
      $newsletters = Newsletter::all();
      return response()->json($newsletters);
    }

    public function getOne($id) {
      $newsletter = Newsletter::select('id', 'email')->where('id', '=', $id)->get();
      return response()->json($newsletter);
    }

    public function save(Request $request) {
      $this->validate($request, [
         'email' => 'required|email'
      ]);
      $newsletter = Newsletter::create($request->all());
      return response()->json($newsletter, 201);
    }

    public function update(Request $request, $id) {
      $newsletter = Newsletter::findOrFail($id);

      $this->validate($request, [
         'email' => 'required|email'
      ]);
      $newsletter->update($request->all());
      return response()->json($newsletter);
    }

    public function delete($id) {
      $newsletter = Newsletter::findOrFail($id);
      $newsletter->delete();
      return response()->json(null, 204);
    }
}
