<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BattleSection extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

     protected $table = 'battles_sections';
    protected $fillable = ['battle_id', 'heading', 'description', 'image'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
