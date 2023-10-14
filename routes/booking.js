const createbooking=require('../controllers/createbooking');
const fetchbookings=require('../controllers/fetchbookings')
const express=require('express');
const router=express.Router();
router.post('/createbooking',createbooking.createbooking)
.post('/fetchbookings',fetchbookings.fetchbookings);
exports.route=router;