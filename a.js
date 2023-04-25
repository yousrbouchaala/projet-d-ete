const mongoose = require('mongoose') 
const A = new mongoose.Schema({
    aa : {
    type: String,
    required: [true, "Please provide un etud"],
    unique: false , 
    
    },
    
    bb : {
    type: String,
    required: [true, "Please provide a sup"],
    unique: true ,
    },
   

}); 
const test = mongoose.model("test", A) 
module.exports= test