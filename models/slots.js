const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slotsSchema = new Schema({
  slots: [Number],
});
const SlotModel = mongoose.model('Slot', slotsSchema);
module.exports = SlotModel;