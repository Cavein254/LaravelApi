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

// Route::resource('questions', 'App\Http\Controllers\QuestionController');
Route::apiResource('questions', 'App\Http\Controllers\QuestionController');

Route::get('profile{profile}', 'App\Http\Controllers\ProfileController@show');
Route::post('profile{profile}', 'App\Http\Controllers\ProfileController@show');
Route::resource('profile', 'App\Http\Controllers\ProfileController');

// Route::get('answers{answers}', 'App\Http\Controllers\AnswersController@show');
Route::apiResource('answers', 'App\Http\Controllers\AnswersController');

Route::apiResource('blog', 'App\Http\Controllers\BlogController');
