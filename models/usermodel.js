const mongoose=require('mongoose');
const createuser=mongoose.Schema({
    "Name":{type:String},
    "Email":{type:String, unique:true},
    "License":{
        type:String,
    },
    "Phonenumber":{
        type:String,
    },
    "Password":{
        type:String
    }

})
const createmodel=mongoose.model('userdata',createuser);
module.exports=createmodel;