<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => (string) $this->id,
            'type' => 'profile',
            'attributes' => [
                'firstname' => $this->firstname,
                'lastname' => $this->lastname,
                'aboutme' => $this->aboutme,
                'profilepicurl' => $this->profilepicurl,
                'languages' => $this->languages,
                'specialization' => $this->specialization,
                'workurl' => $this->workurl,
                'githuburl' => $this->githuburl,
                'created_at' => $this->created_at,
                'update_at' => $this->update_at

            ]
        ];
    }
}
