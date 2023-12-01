const jwt = require('jsonwebtoken');
const prebookingSchema = require('../models/prebooking');
const bcrypt = require('bcrypt');
exports.prebooking =async (req, res) => {
    const { userId, bookingTime } = req.body;
    const newBooking = new prebookingSchema({
      userId,
      bookingTime,
      status: 'reserved',
      expirationTime: new Date(Date.now() + 30 * 60 * 1000),
    });
  
    newBooking.save((err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Booking failed' });
      } else {
        res.status(201).json({ message: 'Booking created successfully' });
      }
    });
  }