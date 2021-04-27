<?php

use App\Http\Controllers\QuestionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('users', 'App\Http\Controllers\UserList@index');


Route::group(['middleware' => ['auth:api']], function () {
    Route::post('questions', 'App\Http\Controllers\QuestionController@store');
    Route::apiResource('profile', 'App\Http\Controllers\ProfileController');
    Route::apiResource('answers', 'App\Http\Controllers\AnswersController');
    Route::apiResource('blog', 'App\Http\Controllers\BlogController');
    Route::put('profile{profile}', 'App\Http\Controllers\ProfileController@update');
    Route::post('profile', 'App\Http\Controllers\ProfileController@store');
});








//public routes
// Route::group([], function () {
//     Route::get('profile{profile}', 'App\Http\Controllers\ProfileController@show');
//     Route::get('/blog', 'App\Http\Controllers\BlogController@index');
//     Route::get('/blog', 'App\Http\Controllers\BlogController@show');
//     Route::post('/questions', 'App\Http\Controllers\QuestionController@index');
//     Route::get('/questions/{question}', 'App\Http\Controllers\QuestionController@show');
//     Route::get('answers{answers}', 'App\Http\Controllers\AnswersController@show');
//     Route::post('/register', 'App\Http\Controllers\AccessController@register');
//     Route::post('/login', 'App\Http\Controllers\AccessController@login');
//     Route::get('/', 'App\Http\Controllers\BlogController@index')->name('home');
// });
