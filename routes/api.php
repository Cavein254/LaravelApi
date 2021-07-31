<?php

use App\Http\Controllers\ApiQuestionController;
use App\Http\Controllers\UserAuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Route::get('users', 'App\Http\Controllers\UserList@index');


// Route::group(['middleware' => ['auth:sanctum']], function () {
//     Route::apiResource('/profile', 'App\Http\Controllers\ProfileController');
//     Route::apiResource('/answers', 'App\Http\Controllers\AnswersController');
//     // Route::apiResource('/blog', 'App\Http\Controllers\BlogController');
//     Route::put('profile{profile}', 'App\Http\Controllers\ProfileController@update');
//     Route::post('profile', 'App\Http\Controllers\ProfileController@store');
// });





// Route::get('/questions{questions}', 'App\Http\Controllers\QuestionController@show')->name('questions.show');
// Route::delete('/questions{questions}', 'App\Http\Controllers\QuestionController@destroy')->name('questions.destroy');

// Route::post('/questions', 'App\Http\Controllers\QuestionController@store');

//public routes
// Route::group(['middleware' => ['cors', 'json.response']], function () {
//     Route::get('profile{profile}', 'App\Http\Controllers\ProfileController@show');
//     Route::get('/blog', 'App\Http\Controllers\BlogController@index')->name('blog');
//     Route::get('/blog{blog}', 'App\Http\Controllers\BlogController@show');
//     Route::get('answers{answers}', 'App\Http\Controllers\AnswersController@show');
//     Route::get('/', 'App\Http\Controllers\BlogController@index')->name('home');
//     Route::post('/register', 'App\Http\Controllers\AccessController@register')->name('register');
//     Route::post('/login', 'App\Http\Controllers\AccessController@login')->name('login');
//     Route::get('/questions', 'App\Http\Controllers\QuestionController@index')->name('questions');
//     Route::get('/questions{questions}', 'App\Http\Controllers\QuestionController@show');
// });



// Route::group([
//     'middleware'=> 'api',
//     'prefix'=> 'auth'
// ], function($router){
//     Route::post('login', [UserAuthController::class, 'login']);
//     Route::post('register', [UserAuthController::class, 'register']);
//     Route::post('logout', [UserAuthController::class, 'logout']);
//     Route::post('refresh', [UserAuthController::class, 'refresh']);
//     Route::get('user-profile', [UserAuthController::class, 'userProfile']);
// });

Route::post('login', [UserAuthController::class, 'login']);
Route::post('register', [UserAuthController::class, 'register']);
Route::group(['middleware'=> ['jwt.verify']], function(){
    Route::get('get-user', [UserAuthController::class, 'getUser']);
});

Route::get('questions', [ApiQuestionController::class, 'index']);
Route::get('question/{id}', [ApiQuestionController::class, 'show']);
Route::group(['middleware'=>['jwt.verify']], function(){
    Route::get('user-questions',[ApiQuestionController::class, 'userQuestions']);
    Route::post('create-question', [ApiQuestionController::class, 'save']);
    Route::put('update-question/{id}', [ApiQuestionController::class, 'update']);
});
