const express=require('express')
const router=express.Router();
const slots=require('../controllers/slots');
router.post('/addSlot',slots.createSlots)
.get('/getslots',slots.getslots)
.patch('/updateSlots',slots.updateSlots);
exports.route=router;