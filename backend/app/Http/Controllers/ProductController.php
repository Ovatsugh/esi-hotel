<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function listing()
    {
        $res = Product::all();
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
        $product = Product::create($dados);
        if (!$product->save()) {
            return response()->json(["message"=>"Não foi possível cadastrar o produto."] );
        }

        return response()->json(["message"=>"O produto cadatrado com sucesso", "dados"=>$product], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);
        return response()->json($product);

    }

   

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {    
        $dados = $request->all();
        $product = Product::find($id);
        $product->fill($dados);
        if (!$product->save()) {
            return response()->json(["message"=>"Não foi possível cadastrar o produto."] );
        }

        return response()->json(["message"=>"O produto foi atualizado com sucesso", "dados"=>$product], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        if (!$product->delete()) {
            return response()->json(["message"=>"Não foi possível deletar o produto."] );
        }
           return response()->json(["message"=>"O produto foi excluido com sucesso"]);
    }
}
