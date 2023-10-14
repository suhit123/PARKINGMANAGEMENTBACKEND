const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  amount: Number
});

module.exports = mongoose.model('Order', orderSchema);