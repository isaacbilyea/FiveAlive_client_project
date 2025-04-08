<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use App\Models\Event;

class ArticlesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $news = News::select('id', 'title', 'published_date', 'card_content', 'image_main')
            ->get()
            ->map(function($item) {
                $item->type = 'News';
                return $item;
            });
        
        $events = Event::select('id', 'title', 'published_date', 'card_content', 'image_main')
            ->get()
            ->map(function($item) {
                $item->type = 'Event';
                return $item;
            });

        $combined = $news->concat($events)
            ->sortByDesc('published_date')
            ->values();

        return response()->json([
            'articles' => $combined
        ]);
    }

     public function getLatest() {

        $news = News::select('id', 'title', 'published_date', 'card_content', 'image_main')
        ->get()
        ->map(function($item) {
            $item->type = 'News';
            return $item;
        });
        
        $events = Event::select('id', 'title', 'published_date', 'card_content', 'image_main')
            ->get()
            ->map(function($item) {
                $item->type = 'Event';
                return $item;
            });

        $combined = $news->concat($events)
            ->sortByDesc('published_date')
            ->take(3)
            ->values();

        return response()->json([
            'articles' => $combined
        ]);
    }

    public function getLatestNews() {
        $news = News::select('id', 'title', 'published_date', 'card_content', 'image_main')
            ->orderByDesc('published_date')
            ->take(3)
            ->get()
            ->map(function($item) {
                $item->type = 'News';
                return $item;
            });

        return response()->json([
            'articles' => $news
        ]);
    }

    public function getLatestEvents() {
        $events = Event::select('id', 'title', 'published_date', 'card_content', 'image_main')
            ->orderByDesc('published_date')
            ->take(3)
            ->get()
            ->map(function($item) {
                $item->type = 'Event';
                return $item;
            });

        return response()->json([
            'articles' => $events
        ]);
    }
}
