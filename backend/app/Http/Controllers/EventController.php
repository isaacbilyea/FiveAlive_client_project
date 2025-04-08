<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Event;
use App\Models\Media; 


class EventController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getMainInfo() {
        $events = Event::join('media', 'events.id', '=', 'media.events_id' )->select('events.id', 'title','published_date','content', 'card_content', 'image_main', 'location', 'time', 'event_date', 'media.gallery', 'media.type', 'media.alt')->orderBy('published_date', 'desc')->get();
        return response()->json($events);
     }

    
     public function getCards() {
      $events = Event::select('id', 'title', 'published_date', 'card_content', 'image_main')->orderBy('published_date', 'desc')->get();
      return response()->json($events);
   }

   public function getOne($id) {
      $event = Event::join('media', 'events.id', '=', 'media.events_id' )->select('events.id', 'title','published_date','content', 'card_content', 'image_main', 'location', 'time', 'event_date', 'media.gallery', 'media.type', 'media.alt')->orderBy('published_date', 'desc')->where('events.id', '=', $id)->get();
      return response()->json($event);
   }

   public function getOneCard($id) {
      $event = Event::select('id', 'title', 'published_date', 'content', 'image_main', 'card_content')->where('id', '=', $id)->get();
      return response()->json($event);
   }

//    public function getLatest() {
//       $event = Event::select('id', 'title', 'published_date', 'card_content', 'image_main')
//           ->orderBy('published_date', 'desc')
//           ->first();
      
//       return response()->json($event);
//   }

//    public function save(Request $request) {
//       $this->validate($request, [
//          'title' => 'required',
//          'published_date' => 'required',
//          'content' => 'required',
//          'card_content' => 'required',
//          'image_main' => 'required',
//          'location' => 'required',
//          'time' => 'required',
//          'event_date' => 'required',
//          'gallery' => 'required',
//          'type' => 'required',
//          'alt' => 'required'
//       ]);
//       $event = Event::create($request->all());
//       return response()->json($event, 201);
//   }

   public function save(Request $request) {
      $this->validate($request, [
         'title' => 'required',
         'published_date' => 'required',
         'content' => 'required',
         'card_content' => 'required',
         'image_main' => 'required',
         'location' => 'required',
         'time' => 'required',
         'event_date' => 'required',
         'gallery' => 'required',
         'type' => 'required',
         'alt' => 'required'
      ]);

      //UPLOADING IMAGES
      // if ($request->hasFile('image_main')) {
      //    $file = $request->file('image_main');
      //    $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
      //    $imagePath = $file->storeAs('images', $filename, 'public');

      // } else {
      //    return response()->json(['error' => 'Image upload failed'], 400);
      // }


      $event = Event::create([
         'title' => $request->title,
         'published_date' => $request->published_date,
         'content' =>$request->content,
         'card_content' =>$request->card_content,
         'image_main' => $request->image_main,
         'location' => $request->location,
         'time' => $request->time,
         'event_date' => $request->event_date
      ]);

      //UPLOADING IMAGES
   //    if ($request->hasFile('gallery')) {
   //       foreach ($request->file('gallery') as $galleryFile) {
   //           $galleryName = time() . '_' . uniqid() . '.' . $galleryFile->getClientOriginalExtension();
   //           $galleryPath = $galleryFile->storeAs('images', $galleryName, 'public');
   //       }
   //   }

   Media::create([
      'events_id' => $event->id, 
      'gallery' => $request->gallery,
      'type' => $request->type,
      'alt' => $request->alt
   ]);
      return response()->json($event, 201);
   }

   public function update(Request $request, $id) {
      $event = Event::findOrFail($id);

      $this->validate($request, [
         'title' => 'required',
         'published_date' => 'required',
         'content' => 'required',
         'card_content' => 'required',
         'image_main' => 'required',
         'location' => 'required',
         'time' => 'required',
         'event_date' => 'required',
         'gallery' => 'required',
         'type' => 'required',
         'alt' => 'required'
      ]);

      $media = Media::where('events_id', $id)->first();

      if ($media) {
         $media->update([
             'gallery' => $request->gallery,
             'type' => $request->type,
             'alt' => $request->alt
         ]);
     }
     
      $event->update($request->all());
      return response()->json($event);
   }

   public function delete($id) {
      $event = Event::findOrFail($id);
  
      Media::where('events_id', $id)->delete();
  
      $event->delete();
  
      return response()->json(['message' => 'Event and related media deleted successfully']);
  }
  
}
