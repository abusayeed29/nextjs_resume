<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $with = ['postHasTags'];

    public function postHasTags(){

        return $this->hasMany(PostHasTag::class, 'post_id', 'id');

    }
}
