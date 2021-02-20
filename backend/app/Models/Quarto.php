<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quarto extends Model
{
    protected $table = "quartos";
    
    protected $fillable = [
        'nome', 'valor_diaria', 'status',
    ];
}
