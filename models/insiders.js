const mongoose = require('mongoose');
const { Schema } = mongoose;

const insidersSchema = new Schema({
  "qrId":String,
  "userId":String,
  "date":String,
  "time":String,
  "slotId":{
    type:Number,
    default:-1,
  },
  "endTime":{
    type:String,
    default:null
  },
  "charges":{
    type:Number,
    default:0
  },
  "status":{
    type:String,
    default:'unreserved'
  },
  "state":String
});

module.exports = mongoose.model('Insiders', insidersSchema);