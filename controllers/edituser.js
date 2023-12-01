const express = require('express');
const createschema = require('../models/usermodel');
const bcrypt = require('bcrypt');
require('dotenv').config();
exports.editUser = async (req, res) => {
  const userId = req.body.userId; 
  try {
    const existingUser = await createschema.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    if (req.body.Name) {
      existingUser.Name = req.body.Name;
    }

    if (req.body.Email) {
      existingUser.Email = req.body.Email;
    }

    if (req.body.Phonenumber) {
      existingUser.Phonenumber = req.body.Phonenumber;
    }

    if (req.body.License) {
      existingUser.License = req.body.License;
    } if (req.body.Amount) {
      existingUser.Amount = req.body.Amount;
    }

    if (req.body.Password) {
      const hashpassword = await bcrypt.hash(req.body.Password, 10);
      existingUser.Password = hashpassword;
    }

    await existingUser.save();

    res.status(200).json({ success: true, message: 'User profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};