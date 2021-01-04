<?php

namespace Tests\Unit;

use Laravel\Passport\Passport;
use PHPUnit\Framework\TestCase;

class LoginTest extends TestCase
{
    /**
     * Creating a user to database
     * @test
     *
     * @return void
     */
    public function user_can_login_using_email_and_password()
    {
        $user = \App\Models\User::factory()->create();
        Passport::actingAs($user);
        $this->getJson('/api/');
    }
}
