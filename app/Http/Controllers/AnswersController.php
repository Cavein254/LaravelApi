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
        return AnswersResource::collection($answer);
    }


    public function store(Request $request)
    {

        $answer = Answers::create([
            'questions_id' => $request->questions_id,
            'body' => $request->body,
            'likes' => $request->likes
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
