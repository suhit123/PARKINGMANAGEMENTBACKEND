const express=require('express')
const router=express.Router();
const insider=require('../controllers/insiders');
router.post('/addinsider',insider.createInsider)
.post('/getinsider',insider.getinsider)
.patch('/editinsider',insider.updateInsider);
exports.route=router;