<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnswersResource;
use App\Models\Answers;
use Illuminate\Http\Request;

class AnswersController extends Controller
{

    public function index()
    {
        $answer = Answers::all();
        return $answer;
    }


    public function store(Request $request)
    {
        $answer = Answers::create([
            'question_id' => $request->question_id,
            'body' => $request->body,
        ]);
        return (new AnswersResource($answer))
            ->response()
            ->header('Location', route('answers.show', ['answer' => $answer]));
    }


    public function show(Answers $answers)
    {
        return new AnswersResource($answers);
    }



    public function update(Request $request, Answers $answers)
    {
        $answers->update([
            'body' => $request->body,
        ]);

        return new AnswersResource($answers);
    }


    public function destroy(Answers $answers)
    {
        $answers->delete();
        return new AnswersResource($answers);
    }
}
