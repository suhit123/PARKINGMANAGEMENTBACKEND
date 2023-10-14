const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');
router.post('/createorder', orderController.createOrder);
exports.route=router;