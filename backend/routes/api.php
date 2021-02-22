<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix'=> 'products'], function() {
    Route::get("", "ProductController@listing");
    Route::post("", "ProductController@create");
    Route::get("{id}", "ProductController@show");
    Route::put("{id}", "ProductController@update");
    Route::delete("{id}", "ProductController@destroy");

});

Route::group(['prefix'=> 'clientes'], function() {
    Route::get("", "ClienteController@listing");
    Route::post("", "ClienteController@create");
    Route::get("{id}", "ClienteController@show");
    Route::put("{id}", "ClienteController@update");
    Route::delete("{id}", "ClienteController@destroy");

});

Route::group(['prefix'=> 'quartos'], function() {
    Route::get("", "QuartoController@listing");
    Route::post("", "QuartoController@create");
    Route::get("{id}", "QuartoController@show");
    Route::put("{id}", "QuartoController@update");
    Route::delete("{id}", "QuartoController@destroy");

});

Route::group(['prefix'=> 'reception'], function() {
    Route::get("", "QuartoController@getReception");
    Route::post("", "QuartoController@startDiaria");
    Route::get("{id}", "QuartoController@usingId");


});