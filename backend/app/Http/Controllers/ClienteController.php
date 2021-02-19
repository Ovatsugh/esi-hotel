<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    protected $model;
   function __construct(Cliente $model)
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
            return response()->json(["message"=>"Não foi possível cadastrar o cliente."] );
        }

        return response()->json(["message"=>"O cliente cadatrado com sucesso", "dados"=>$res], 201);
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
            return response()->json(["message"=>"Não foi possível cadastrar o cliente."] );
        }

        return response()->json(["message"=>"O cliente foi atualizado com sucesso", "dados"=>$res], 201);
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
            return response()->json(["message"=>"Não foi possível deletar o cliente."] );
        }
           return response()->json(["message"=>"O cliente foi excluido com sucesso"]);
    }
}
