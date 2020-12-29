<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionsDelete;
use App\Http\Resources\QuestionsResource;
use Illuminate\Http\Request;
use \App\Models\Question;

class QuestionController extends Controller
{
    public function index()
    {
        //get all questions
        $questions = Question::all();
        return QuestionsResource::collection($questions);
    }

    public function create()
    {
        //cr
    }


    public function store(Request $request)
    {
        $question = Question::create([
            'user_id' => $request->user_id,
            'title' => $request->title,
            'body' => $request->body,
        ]);
        return (new QuestionsResource($question))
            ->response()
            ->header('Location', route('questions.show', ['question' => $question]));
    }


    public function show(Question $question)
    {
        return new QuestionsResource($question);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, Question $question)
    {
        $question->update([
            'title' => $request->title,
            'body' => $request->body,
        ]);

        return new QuestionsResource($question);
    }



    public function destroy(Question $question)
    {
        $question->delete();
        return new QuestionsDelete($question);
    }
}
