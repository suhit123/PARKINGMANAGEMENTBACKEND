const mongoose = require('mongoose');

const prebookingSchema = new mongoose.Schema({
  "userId": String,
  "bookingTime": Date,
  "status": String,
  "expirationTime": Date,
});

module.exports = mongoose.model('Prebooking', prebookingSchema);