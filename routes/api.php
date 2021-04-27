<?php

use App\Http\Controllers\QuestionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });



Route::resource('questions', 'App\Http\Controllers\QuestionController');
// Route::apiResource('login', 'App\Http\Controllers\API\AuthControllers\@login');
// Route::apiResource('login', 'App\Http\Controllers\API\AuthControllers\@register');
Route::get('users', 'App\Http\Controllers\UserList@index');
Route::group(['middleware' => ['auth:api']], function () {
});



// Route::get('profile{profile}', 'App\Http\Controllers\ProfileController@show');
// Route::put('profile{profile}', 'App\Http\Controllers\ProfileController@update');
// Route::post('profile', 'App\Http\Controllers\ProfileController@store');
Route::apiResource('profile', 'App\Http\Controllers\ProfileController');

// Route::get('answers{answers}', 'App\Http\Controllers\AnswersController@show');
Route::apiResource('answers', 'App\Http\Controllers\AnswersController');

Route::apiResource('blog', 'App\Http\Controllers\BlogController');


//public routes
Route::group([], function () {
    Route::get('/questions', 'App\Http\Controllers\QuestionController@index');
    Route::get('/questions/{question}', 'QuestionsContoller@show');
    Route::post('register', 'App\Http\Controllers\AccessController@register');
    Route::post('login', 'App\Http\Controllers\AccessController@login');
});
