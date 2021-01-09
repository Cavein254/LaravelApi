<?php

use App\Http\Controllers\QuestionController;
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/questions', 'QuestionsContoller@index');
// Route::get('/questions/{question}', 'QuestionsContoller@show');

Route::resource('questions', 'App\Http\Controllers\QuestionController');
// Route::apiResource('login', 'App\Http\Controllers\API\AuthControllers\@login');
// Route::apiResource('login', 'App\Http\Controllers\API\AuthControllers\@register');
Route::get('users', 'App\Http\Controllers\UserList@index');
Route::post('login', 'App\Http\Controllers\AccessController@login');
Route::post('register', 'App\Http\Controllers\AccessController@register');

// Route::get('profile{profile}', 'App\Http\Controllers\ProfileController@show');
// Route::put('profile{profile}', 'App\Http\Controllers\ProfileController@update');
// Route::post('profile', 'App\Http\Controllers\ProfileController@store');
Route::apiResource('profile', 'App\Http\Controllers\ProfileController');

// Route::get('answers{answers}', 'App\Http\Controllers\AnswersController@show');
Route::apiResource('answers', 'App\Http\Controllers\AnswersController');

Route::apiResource('blog', 'App\Http\Controllers\BlogController');

