<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProfileDelete extends JsonResource
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
            'status' => '204',
            'type' => 'profile',
            'msg' => 'Delete successful',
            'attributes' => [
                'user_id' => $this->user_id,
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'aboutme' => $request->aboutme,
                'profilepicurl' => $request->profilepicurl,
                'languages' => $request->languages,
                'specialization' => $request->specialization,
                'workurl' => $request->workurl,
                'githuburl' => $request->githuburl
            ]
        ];
    }
}
