const mongoose = require('mongoose') 
const AdministrationSchema = new mongoose.Schema({
    email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
    },
    password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
    },
    role: { 
        type: String,
        required: [true, "role "],
    unique: false,
    },
        
    

}); 
const responsableAdmin = mongoose.model("responsableAdmin", AdministrationSchema) 
module.exports= responsableAdmin 