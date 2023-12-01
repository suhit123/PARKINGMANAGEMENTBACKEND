const express=require('express')
const router=express.Router();
const editUser=require('../controllers/edituser');
router.patch('/edituser',editUser.editUser);
exports.route=router;