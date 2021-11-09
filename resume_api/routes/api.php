<?php

use App\Models\Post;
use App\Models\Project;
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
                'posts.title', 'posts.slug', 'posts.created_at as publish_date','tags.name as tag_name'
            ])
            ->join('post_has_tags', 'post_has_tags.post_id', '=', 'posts.id')
            ->join('tags','tags.id', '=', 'post_has_tags.tag_id')
            ->where('tags.name','=', $tag)
            ->limit(10)
            ->orderByDesc('posts.id')
            ->get();

});


Route::get('/posts', function(){

    return Post::query()
            ->select([
                'posts.id','posts.title', 'posts.slug', 'posts.body', 'posts.created_at as publish_date'
            ])
            ->orderByDesc('publish_date')
            ->get();

});

Route::get('/post/{slug}', function($slug){

    return Post::query()
            ->where('slug', $slug)
            ->first();

});


Route::get('/projects', function(){
    return Project::orderBy('id', 'DESC')->get();

});


Route::post('/contact/store', function(){
    
    dd($_POST);

});
