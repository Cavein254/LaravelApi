<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AccessController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'username' => 'required|max:60',
            'email' => 'email|required|unique:users',
            'password' => 'required|min:5'
        ]);
        $validatedData['password'] = bcrypt($request->password);
        $user = User::create([
            'username' => $validatedData['username'],
            'email' => $validatedData['email'],
            'password' => $validatedData['password']
        ]);
        // $accessToken = $user->createToken('authToken')->accessToken;

        return ([
            'user' => $user,
        ]);
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if (Auth::attempt($validatedData)) {
            return response(['error' => 'Invalid Credentials']);
        }
        $accessToken = Auth::user()->createToken('authToken')->accessToken;
        return response([
            "user" => Auth::user(),
            "access_token" => $accessToken
        ]);
    }
}
