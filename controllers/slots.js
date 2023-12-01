const jwt = require('jsonwebtoken');
const slotsSchema = require('../models/slots');
const bcrypt = require('bcrypt');
exports.createSlots = async (req, res) => {
    try {
        console.log(req.body)
        await slotsSchema.create(req.body)
            .then(() => {
                console.log("successfully added")
                return res.status(201).json({ success: true });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json({ success: false });
            })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
    }
}
exports.getslots=async(req,res)=>{
    try{
        const data=await slotsSchema.findOne()
        res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({ success: false });
    }
}
exports.updateSlots=async(req,res)=>{
    try {
        const slotId = "652a76111fe181f5ebdb04e4";
        const updatedSlots = req.body.slots;
        const slot = await slotsSchema.findById({_id:slotId});
        if (!slot) {
          return res.status(404).json({ error: 'Slot not found' });
        }
        console.log(!slot)
        slot.slots = updatedSlots;
        const updatedSlot = await slot.save();
        return res.status(200).json({ message: 'Slots updated successfully', updatedSlot });
      } catch (err) {
        console.error(err);
        return res.status(400).json({ error: 'Internal server error' });
      }
}