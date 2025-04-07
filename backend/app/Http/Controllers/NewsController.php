<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\News;


class NewsController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getMainInfo() {
        $news = News::select('id', 'title', 'published_date', 'content', 'image_main')->orderBy('published_date', 'desc')->get();
        return response()->json($news);
     }

     public function getCards() {
      $news = News::select('id', 'title', 'published_date', 'card_content', 'image_main')->orderBy('published_date', 'desc')->get();
      return response()->json($news);
   }

   public function getOne($id) {
      $news = News::select('id', 'title', 'published_date', 'content', 'image_main', 'card_content')->where('id', '=', $id)->get();
      return response()->json($news);
   }

   public function getOneCard($id) {
      $news = News::select('id', 'title', 'published_date', 'image_main', 'card_content')->where('id', '=', $id)->get();
      return response()->json($news);
   }

   public function save(Request $request) {
      $this->validate($request, [
         'title' => 'required',
         'published_date' => 'required',
         'content' => 'required',
         'card_content' => 'required',
         'image_main' => 'required'
      ]);
      $news = News::create($request->all());
      return response()->json($news, 201);
  }

   // public function save(Request $request) {
   //    $this->validate($request, [
   //       'title' => 'required',
   //       'published_date' => 'required',
   //       'content' => 'required',
   //       'card_content' => 'required',
   //       'image_main' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
   //    ]);

   //    if ($request->hasFile('image_main')) {
   //       $file = $request->file('image_main');
   //       $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
   //       $imagePath = $file->storeAs('images', $filename, 'public');

   //    } else {
   //       return response()->json(['error' => 'Image upload failed'], 400);
   //    }

   //    $news = News::create([
   //       'title' => $request->title,
   //       'published_date' => $request->published_date,
   //       'content' =>$request->content,
   //       'card_content' =>$request->card_content,
   //       'image_main' => $imagePath
   //    ]);
   //    return response()->json($news, 201);
   // }

   public function update(Request $request, $id) {
      $news = News::findOrFail($id);

      $this->validate($request, [
         'title' => 'required',
         'published_date' => 'required',
         'content' => 'required',
         'card_content' => 'required',
         'image_main' => 'required'
      ]);
      $news->update($request->all());
      return response()->json($news);
   }

   public function delete($id) {
      $news = News::findOrFail($id);
      $news->delete();
      // return response()->json(null, 204);
      return response()->json(['message' => 'Event deleted successfully']);
   }
}
