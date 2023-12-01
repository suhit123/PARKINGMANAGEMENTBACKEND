const express = require('express');
const router = express.Router();
const prebooking = require('../controllers/prebooking');
router.post('/createprebooking', prebooking.prebooking);
exports.route=router;