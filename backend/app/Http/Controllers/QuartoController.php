<?php

namespace App\Http\Controllers;

use App\Models\Quarto;
use App\Models\QuartoUsing;
use Illuminate\Http\Request;

class QuartoController extends Controller
{
    protected $model;
    function __construct(Quarto $model)
    {
        $this->model = $model;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function listing()
    {
        $res = $this->model->all();
        return response()->json($res);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $dados = $request->all();
        $res = $this->model->create($dados);
        if (!$res->save()) {
            return response()->json(["message" => "Não foi possível cadastrar o quarto."], 500);
        }

        return response()->json(["message" => "O quarto foi  cadatrado com sucesso", "dados" => $res], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $res
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $res = $this->model->find($id);
        return response()->json($res);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $res
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $dados = $request->all();
        $res = $this->model->find($id);
        $res->fill($dados);
        if (!$res->save()) {
            return response()->json(["message" => "Não foi possível cadastrar o quarto."], 500);
        }

        return response()->json(["message" => "O quarto foi atualizado com sucesso", "dados" => $res], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $res
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = $this->model->find($id);
        if (!$res->delete()) {
            return response()->json(["message" => "Não foi possível deletar o quarto."], 500);
        }
        return response()->json(["message" => "O quarto foi excluido com sucesso"]);
    }




    //reception
    public function getReception(Request $request)
    {
        $params = $request->all();
        $quartos = Quarto::all();


        foreach ($quartos as $quarto) {
            $using = QuartoUsing::where("quarto_id", $quarto->id)->where("status", 1)->first();
            $quarto->using = $using;
            if (empty($using)) {
                $quarto->open = 1;
            } else {
                $quarto->open = 0;
            }
        }
        return $quartos;
    }

    public function startDiaria(Request $request)
    {
        $params = $request->all();
        $using = QuartoUsing::create([
            'quarto_id' => $params['quarto_id'],
            'data_start' => date('Y-m-d H:i:s')
        ]);
        if (!$using->save()) {
            return response()->json(["message" => "Não foi possível iniciar a diária."], 500);
        }
        return response()->json($using);
    }
    public function usingId($id)
    {
        $using = QuartoUsing::find($id);
        $using->quarto = Quarto::find($using->quarto_id);
        return $using;
    }
}
