<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Console\JWTGenerateSecretCommand;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserAuthController extends Controller
{

    public function login(Request $request) {
        $credentials = $request->only('email', 'password');

        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password'=> 'required|string|min:3'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(),200);
        }

        try {
            if(! $token = JWTAuth::attempt($credentials)){
                return response()->json([
                    'success'=> false,
                    'message'=> 'Invalid Email or Password'
                ]);
            }
        } catch (JWTException $e){
            return $credentials;
            return response()->json([
                'success'=> false,
                'message'=> 'Could not create token',
            ]);
        }

        return response()->json([
            'success' => true,
            'token'=> $token,
        ]);
    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100|unique:users',
            'email'=> 'required|string|email|unique:users',
            'password'=> 'required|string|confirmed|min:3'
        ]);

        if(!$validator->fails()){
            $user = User::create([
                'name'=> $request->name,
                'email'=> $request->email,
                'password'=> Hash::make($request->password)
            ]);

            return response()->json([
                'success'=> true,
                'message'=> 'user successfully registered',
                'user' => $user
            ], 201);
        }

        return response()->json([
            "success"=>false,
            "message"=>$validator->errors()->toJson()
        ]);

    }

    public function logout (Request $request)
    {
        $validator = Validator::make($request->only('token'),[
            'token'=>'required'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        try {
            JWTAuth::invalidate($request->token);

            return response()->json([
                'success' => true,
                'message'=> 'user is logged out'
            ]);
        } catch(JWTException $e){
            return response()->json([
                'success'=> false,
                'message'=> 'Unable to logged out'
            ], 401);
        }
    }

    public function getUser (Request $request)
    {
        $this->validate($request,[
            'token'=> 'required'
        ]);

        $user = JWTAuth::authenticate($request->token);

        return response()->json(['user'=> $user]);
    }
}
