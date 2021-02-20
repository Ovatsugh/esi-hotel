<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuartoUsing extends Model
{
    protected $table = "quartos_using";
    
    protected $fillable = [
        'quarto_id', 'data_start', 'data_end', 'total_diaria', 'total_consumo', 'status',
    ];
}
