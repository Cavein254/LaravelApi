<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnswersResource;
use App\Models\Answers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AnswersController extends Controller
{

    public function index()
    {
        $answer = Answers::all();
        return AnswersResource::collection($answer);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'body' => 'required|max:126',
            'likes' => 'string',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $answer = Answers::create([
            'user_id' => Auth::user()->id,
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
