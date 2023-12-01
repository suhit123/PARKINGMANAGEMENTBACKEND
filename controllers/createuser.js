const express=require('express');
const createschema=require('../models/usermodel');
const bcrypt=require('bcrypt');
require('dotenv').config();
exports.createuser=async(req,res)=>{
    const check1=await createschema.findOne({Name:req.body.Name});
    const check2=await createschema.findOne({Email:req.body.Email});
    if(check1===null && check2===null){
    const hashpassword =await bcrypt.hash(req.body.Password,10);
    const user={
        Name:req.body.Name,
        Email:req.body.Email,
        Phonenumber:req.body.Phonenumber,
        License:req.body.License,
        Password:hashpassword,
        Amount:0
    }
    await createschema.create(user).then(()=>{
        console.log("successfully added")
    })
    .catch((err)=>{
        console.log(err);
    })
    res.status(201).json({success:true});
    }
    else{
        if(check1!==null && check2!=null){
            return res.status(400).send("Username and Email already exist!");
        }
        else if(check1){
            return res.status(400).send("Username already exist!");
        }
        else if(check2){
            res.status(400).send("Email already exist!");
        }
    }
}