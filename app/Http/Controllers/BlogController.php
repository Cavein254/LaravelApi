<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{

    public function index()
    {
        $blog = Blog::all();
        return BlogResource::collection($blog);
    }




    public function store(Request $request)
    {
        $blog = Blog::create([
            'user_id' => $request->user_id,
            'title' => $request->title,
            'body' => $request->body,
        ]);
        return (new BlogResource($blog))
            ->response()
            ->header('Location', route('blog.show', ['blog' => $blog]));
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
