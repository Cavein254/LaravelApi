<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionsDelete;
use App\Http\Resources\QuestionsResource;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use \App\Models\Question;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class QuestionController extends Controller
{
    public function userQuestions(Request $request) {

        $questions = auth()->user()->questions;

        return $questions;

    }

    public function index(Request $request)
    {
        //get all questions
        $questions = Question::all();
        return QuestionsResource::collection($questions);
    }

    public function save(Request $request){
        dd('request');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'body' => 'required|string',
            'slug' => 'string',
            'level' => 'string',
            'languages' => 'string',
            'features' => 'boolean',
            'answers' => 'string',
            'views' => 'string',
            'likes' => 'string'
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }
        $request['user_id'] = Auth::user()->id;
        $question = Question::create($request->toArray());

        return $question;
    }


    public function show(Question $question)
    {
        // dd($question);
        // return new QuestionsResource($question);

        return $question;
    }




    public function update(Request $request, Question $question)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'body' => 'required|string',
            'slug' => 'string',
            'level' => 'string',
            'languages' => 'string',
        ]);
        $question->update([
            'title' => $request->title,
            'body' => $request->body,
            'slug' => $request->body,
            'level' => $request->level,
            'languages' => $request->languages,

        ]);

        return new QuestionsResource($question);
    }



    public function destroy(Question $question)
    {
        $question->delete();
        return new QuestionsDelete($question);
    }
}
