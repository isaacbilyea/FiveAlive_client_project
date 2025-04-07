<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title','published_date','content', 'card_content', 'image_main'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
