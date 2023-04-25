const mongoose = require('mongoose') 
const Sujet = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, "Please provide un nom "],
        unique: false ,
    
    },
    numero : {
        type: String , 
        required: [true, " Please provide un numero"],
        unique: true , 
     },
    titre: {
    type: String,
    required: [true, "Please provide a titre!"],
    unique: true ,
    },
    organisme: { 
        type: String, 
        required: [true, "organisme ! "], 
        unique : false 
    }

}); 
const AffectSujet = mongoose.model("AffectSujet", Sujet) 
module.exports= AffectSujet