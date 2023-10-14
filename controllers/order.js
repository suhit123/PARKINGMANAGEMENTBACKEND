const jwt = require('jsonwebtoken');
const OrderSchema = require('../models/order');
const bcrypt = require('bcrypt');
exports.createOrder =async (req, res) => {
    const amount = req.body.amount;
    const order = await OrderSchema.create({
      amount,
    });
    const orderId = order.id;
    res.json({ orderId });
  }