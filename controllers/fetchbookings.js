const jwt = require('jsonwebtoken');
const bookingSchema = require('../models/bookings');
const bcrypt = require('bcrypt');
exports.fetchbookings = async (req, res) => {
    try{
        if(req.body.userId!=='' &&req.body.date!==''  ){
            data= await bookingSchema.find({userId:req.body.userId,date:req.body.date})
            res.status(200).json(data);
        }
        else{
            res.status(400).json("something gone wrong")
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json("something went wrong!");
    }
}