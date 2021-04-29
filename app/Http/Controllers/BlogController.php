<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


class BlogController extends Controller
{

    public function index()
    {
        $blog = Blog::all();
        return $blog;
        return BlogResource::collection($blog);
    }




    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'body' => 'required|string',
            'title' => 'string|required',
            'slug' => 'string|required',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }
        $request['user_id'] = Auth::user()->id;
        $blog = Blog::create([
            'user_id' => $request->user_id,
            'title' => $request->title,
            'body' => $request->body,
            'slug' => Str::slug($request->title)
        ]);
        return (new BlogResource($blog))
            ->response();
        // ->header('Location', route('blog.show', ['blog' => $blog]));
    }


    public function show(Blog $blog)
    {
        return new BlogResource($blog);
    }




    public function update(Request $request, Blog $blog)
    {
        $blog->update([
            'title' => $request->title,
            'body' => $request->body,
        ]);
        return new BlogResource($blog);
    }


    public function destroy(Blog $blog)
    {
        $blog->delete();
    }
}
