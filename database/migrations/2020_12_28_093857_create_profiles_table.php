<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('firstname');
            $table->string('lastname');
            $table->text('aboutme');
            $table->string('profilepicurl');
            $table->string('languages');
            $table->string('specialization');
            $table->string('workurl');
            $table->string('githuburl');
            $table->timestamps();
            // $table->foreign('users_id')
            //     ->references('id')
            //     ->on('users')
            //     ->onCascade('delete');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
