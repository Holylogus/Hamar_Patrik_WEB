<?php

namespace App\Http\Controllers;

use App\Models\Szavak;
use Illuminate\Http\Request;

class SzavakController extends Controller
{
    public function index(){
        $szavak = Szavak::all();
        return response()->json($szavak);
    }

    public function getTemaSzerint($temaId){
        $szavak = Szavak::all()->where("temaId","==", $temaId);
        return response()->json($szavak);}
}
