const mongoose = require('mongoose') 

const Jury = new mongoose.Schema({
    nomEtudJ : {
    type: String,
    required: [true, "Please provide un nom "],
    unique : false , 
    },
    nomPrez: {
        type: String , 
        required: [true, " Please provide un numero"],
        unique: true , 
     },
    memb1: {
    type: String,
    required: [true, "Please provide a titre!"],
    unique: true ,
    },
    memb2: { 
        type: String, 
        required: [true, "organisme ! "], 
        unique : false , 
    } , 
    calendrier: { 
        type: Date, 
        required: [true, "dateeee"] ,
        unique : false , 
        
    }, 
    Heure: { 
        type: String, 
        required: [ true , " timee"]
    }


}); 
const AffectJury    = mongoose.model("AffectJury", Jury ) 
module.exports= AffectJury