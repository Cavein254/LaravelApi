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
            $table->unsignedBigInteger('user_id')->unique;
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->text('aboutme')->nullable();
            $table->string('profilepicurl')->nullable();
            $table->string('languages')->nullable();
            $table->string('specialization')->nullable();
            $table->string('workurl')->nullable();
            $table->string('githuburl')->nullable();
            $table->boolean('profilevisibility')->default(1);
            $table->integer('profileviews')->default(0);
            $table->integer('stars')->default(0);
            $table->timestamps();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onCascade('delete');
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
