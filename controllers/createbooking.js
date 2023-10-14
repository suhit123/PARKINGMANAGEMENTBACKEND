const jwt = require('jsonwebtoken');
const bookingSchema = require('../models/bookings');
const bcrypt = require('bcrypt');
exports.createbooking = async (req, res) => {
    try {
        await bookingSchema.create(req.body)
            .then(() => {
                console.log("successfully added")
                res.status(201).json({ success: true });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({ success: false });
            })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
    }
}