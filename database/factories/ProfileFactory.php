<?php

namespace Database\Factories;

use App\Models\Profile;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProfileFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Profile::class;

    /**
     * Define the model's default state.
     * 
     * @return array
     */
    public function definition()
    {
        return [
            'firstname' => $this->faker->name,
            'lastname' => $this->faker->name,
            'aboutme' => $this->faker->paragraph,
            'profilepicurl' => $this->faker->url,
            'languages' => $this->faker->name,
            'specialization' => $this->faker->userName,
            'workurl' => $this->faker->url,
            'githuburl' => $this->faker->url,
        ];
    }
}
