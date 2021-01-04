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
            'id' => (string) $request->user_id,
            'type' => 'profile',
            'attributes' => [
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'aboutme' => $request->aboutme,
                'profilepicurl' => $request->profilepicurl,
                'languages' => $request->languages,
                'specialization' => $request->specialization,
                'workurl' => $request->workurl,
                'githuburl' => $request->githuburl,
                'created_at' => $request->created_at,
                'update_at' => $request->updated_at

            ]
        ];
    }
}
