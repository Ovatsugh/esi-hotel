<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuartosUsing extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quartos_using', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("quarto_id");
            $table->dateTime("data_start");
            $table->dateTime("data_end")->nullable();
            $table->decimal("total_diaria")->default(0);
            $table->decimal("total_consumo")->default(0);
            $table->integer("status")->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quartos_using');
    }
}
