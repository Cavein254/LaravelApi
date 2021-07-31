<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Question;

class ApiQuestionController extends Controller
{
    public function index(Request $request)
    {
        $questions = Question::get();
        return response()->json($questions);
    }

    public function userQuestions(Request $request)
    {
        $questions = auth()-> user()->questions;
        return response()->json($questions);
    }

    public function save(Request $request)
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
        $request['user_id']= auth()->user()->id;
        $question = Question::create($request->toArray());

        return response()->json($question);
    }


    public function show($id)
    {
        $question = Question::find($id);
        return $question;
    }
}
