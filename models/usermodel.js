const mongoose=require('mongoose');
const createuser=mongoose.Schema({
    "Name":{type:String},
    "Email":{type:String, unique:true},
    "License":{
        type:String,
    },
    "Amount":{
        type:Number,
        default:0,
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