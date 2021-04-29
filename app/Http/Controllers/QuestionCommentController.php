<?php

namespace App\Http\Controllers;

use App\Models\QuestionComment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuestionCommentController extends Controller
{

    public function index()
    {
        $comments = QuestionComment::all();
    }



    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'comment' => 'string|max:126',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }
        $comment = QuestionComment::create($request->toArray());

        return response($comment);
    }


    public function show(QuestionComment $comment)
    {
        return response($comment);
    }



    public function update(Request $request, QuestionComment $comment)
    {
        $comment->update([
            'comment' => $request->comment,
        ]);
    }




    public function destroy(QuestionComment $comment)
    {
        $comment->delete();
    }
}
