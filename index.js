const express= require('express');
const app=express();
const cors=require('cors');
const cron = require('node-cron');
const port =process.env.PORT ||8080;
require('dotenv').config();
const connectwithdb =require('./db');
const connection=connectwithdb.connectwithdb;
connection();
const orderRoutes = require('./routes/orders');
const createroute=require('./routes/createuser');
const loginuser=require('./routes/loginuser');
const authorizeduserdata=require('./routes/authorizeduserdata');
const edituser=require('./routes/edituser')
const insiders=require('./routes/insiders')
const slots=require('./routes/slots');
const prebooking=require('./routes/prebooking');
const prebookingSchema = require('./models/prebooking');
app.use(express.json());
app.use(cors());
app.use('/',createroute.route);
app.use('/',loginuser.route);
app.use('/',edituser.route);
app.use('/',authorizeduserdata.route);
app.use('/', orderRoutes.route);
app.use('/', insiders.route);
app.use('/', slots.route);
app.use('/', prebooking.route);
app.listen(port,()=>{
    console.log(`listening to port number ${port}`);
})