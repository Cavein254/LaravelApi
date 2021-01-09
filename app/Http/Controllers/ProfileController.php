<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfileResource;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{

    public function index()
    {
        $profile = Profile::all();
        return ProfileResource::collection($profile);
    }



    public function store(Request $request)
    {
        $user = User::find($request->user_id);
        if (!$user) {
            $profile = Profile::create([
                'user_id' => $request->user_id,
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'aboutme' => $request->aboutme,
                'email' => $request->email,
                'profilepicurl' => $request->profilepicurl,
                'languages' => $request->languages,
                'specialization' => $request->specialization,
                'workurl' => $request->workurl,
                'githuburl' => $request->githuburl
            ]);
            return new ProfileResource($profile);
        } else {
            $profile = Profile::where('user_id', $request->user_id)->update([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'aboutme' => $request->aboutme,
                'profilepicurl' => $request->profilepicurl,
                'languages' => $request->languages,
                'specialization' => $request->specialization,
                'workurl' => $request->workurl,
                'githuburl' => $request->githuburl
            ]);
            return new ProfileResource($profile);
        }
    }



    public function show(Profile $profile)
    {
        return new ProfileResource($profile);
    }





    public function update(Request $request, Profile $profile)
    {

        $profile->update([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'aboutme' => $request->aboutme,
            'profilepicurl' => $request->profilepicurl,
            'languages' => $request->languages,
            'specialization' => $request->specialization,
            'workurl' => $request->workurl,
            'githuburl' => $request->githuburl,
            // $profilevisibilitytopublic
            // $profileviewtimes
            // $Peopleviewedprofile
        ]);
        return $profile;
    }


    public function destroy(Profile $profile)
    {
        $profile->delete();
    }
}
