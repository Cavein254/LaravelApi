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
        $user = User::create($request->validate([
            'name' => 'required|max:55',
            'email' => 'email|required|unique:users',
            'password' => 'required',
        ]));

        return [
            'user' => $user,
        ];
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if (Auth::attempt($validatedData)) {
            $user = Auth::user();
            $token = $user->createToken('admin')->accessToken;
            return ['token' => $token];
        }
        return response(['error' => 'unauthorized'], 200);
    }
}