const mongoose = require('mongoose') 
const Superviseur = new mongoose.Schema({
    emailSup: {
    type: String,
    required: [true, "Please provide un etud"],
    unique: false , 
    
    },
    
    nomSup : {
    type: String,
    
    unique: true ,
    },
    ident: { 
        type: String, 
        required : [true , "please provide password "]
    }
   

}); 
const AffectSup = mongoose.model("AffectSup", Super) 
module.exports= AffectSup