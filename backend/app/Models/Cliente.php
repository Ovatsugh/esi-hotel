<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $table = "clientes";

    protected $fillable = [
        'tipo', 'razao', 'fantasia', 'cnpj', 'telefone', 'email', 'cep', 'logradouro', 'numero', 'bairro', 'complemento', 'cidade', 'uf',
    ];
}
