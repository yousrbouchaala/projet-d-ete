const mongoose = require('mongoose') 
const Super = new mongoose.Schema({
    nomEtud : {
    type: String,
    required: [true, "Please provide un etud"],
    unique: false , 
    
    },
    
    emailSup : {
    type: String,
    required: [true, "Please provide a sup"],
    unique: true ,
    },
    ident: { 
        type: String,
    required: [true, "Please provide identité "],
    unique: true ,
       
   }

}); 
const AffectSup = mongoose.model("AffectSup", Super) 
module.exports= AffectSup