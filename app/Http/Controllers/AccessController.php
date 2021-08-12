<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class AccessController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:60|unique:users',
            'email' => 'email|required|unique:users',
            'password' => 'required|min:5'
        ]);
        $validatedData['password'] = Hash::make($request->password);
        $validatedData['remember_token'] = Str::random(15);
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => $validatedData['password'],
            'remember_token' => $validatedData['remember_token']
        ]);
        // $token = $user->createToken('user_access_token')->accessToken;
        $payload['email'] = $user['email'];
        $payload['name'] = $user['name'];
        return response($payload, 200);
    }

    public function login(Request $request)
    {
        //Dead route
        dd($request);

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|min:5|string',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()]);
        }
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $user->tokens()->where('name', $request->device_name)->delete();
                $token = $user->createToken($request->header('User-Agent'))->plainTextToken;
               $response = [
                   'payload'=> [
                    'status'=> 200,
                    'token'=> $token
                   ]
               ];
                return $response;
            } else {
                $response = [
                    'payload'=>[
                        'status'=> 401,
                        'message' => 'Invalid email or password',
                    ]
                    ];
                return $response;
            }
        }

        if(!$user) {
            $response = [
                'payload'=> [
                    'status'=> 401,
                    'message' => 'This user does not exist'
                ]
            ];
            return $response;
        }


    }
    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'logout success'];
        return response($response, 200);
    }
}
