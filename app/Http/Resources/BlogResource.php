<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => (string)$this->id,
            'type' => 'blog',
            'attributes' => [
                'user_id' => $this->user_id,
                'title' => $this->title,
                'body' => $this->body,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ]
        ];
    }
}
