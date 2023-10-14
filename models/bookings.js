const mongoose=require('mongoose');
const Booking=mongoose.Schema({
    "userId":String,
    "driverName":String,
    "vehicleName":String,
    "vehicleNumber":String,
    "slotId":String,
    "date":String,
    "startTime":String,
    "endTime":String,
    "paid":Number,
})
const createmodel=mongoose.model('booking',Booking);
module.exports=createmodel;