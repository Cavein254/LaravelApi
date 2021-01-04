<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionsResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => (string)$this->id,
            'type' => 'questions',
            'attributes' => [
                'user_id' => $this->user_id,
                'title' => $this->title,
                'body' => $this->body,
                'slug' => $this->slug,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ]
        ];
    }
}
