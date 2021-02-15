<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "products";
    
    protected $fillable = [
        'nome', 'valor_custo', 'valor_venda', 'estoque', 'foto', 'status',
    ];
}
