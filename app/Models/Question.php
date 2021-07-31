<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use illuminate\Support\Str;

class Question extends Model
{

    use HasFactory;
    protected $fillable = [
        'title', 'body', 'likes', 'slug', 'views',
        'level', 'languages', 'featured', 'answers', 'user_id'
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //     public function answers()
    //     {
    //         return $this->hasMany(Answers::class);
    //     }

    public static function boot() {
        parent::boot();
        static::creating(function($question){
            $question->slug = Str::slug($question->title);
        });
    }
}
