<?php

namespace App\Http\Controllers;

use App\Models\Contact;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PageController extends Controller
{
    
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            'message' => 'required|max:255'
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>400,
                'message' => $validator->message(),
            ]);
        }
        else{

            // $contact = new Contact;
            // $contact->name = $request->name;
            // $contact->email = $request->email;
            // $contact->phone = $request->phone;
            // $contact->message = $request->message;
            // $contact->save();

            return response()->json([
                'status'=>200,
                'message' => 'Form Submitted Successfully'
            ]);

        }
        
    }
}
