<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'body', 'likes', 'slug', 'views',
        'level', 'languages', 'featured', 'answers'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function answers()
    {
        return $this->morpMany(Answers::class, 'commentable')->whereNull('parent_id');
    }
}
