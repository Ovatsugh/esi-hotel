<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("tipo")->default(1);
            $table->string("razao");
            $table->string("fantasia")->nullable();
            $table->string("cnpj", 20);
            $table->string("telefone", 20)->nullable();
            $table->text("email")->nullable();
            $table->text("cep")->nullable();
            $table->text("logradouro")->nullable();
            $table->text("numero")->nullable();
            $table->text("bairro")->nullable();
            $table->text("complemento")->nullable();
            $table->text("cidade")->nullable();
            $table->text("uf")->nullable();




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
        Schema::dropIfExists('clientes');
    }
}
