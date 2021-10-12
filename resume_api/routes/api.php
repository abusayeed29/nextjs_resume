<?php

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/category/{tag}', function($tag){

    return Post::query()
            ->select([
                'posts.title', 'posts.slug', 'posts.created_at as publish_date','tags.name'
            ])
            ->join('post_has_tags', 'post_has_tags.post_id', '=', 'posts.id')
            ->join('tags','tags.id', '=', 'post_has_tags.tag_id')
            ->where('tags.name','=', $tag)
            ->limit(10)
            ->orderByDesc('posts.id')
            ->get();

});
