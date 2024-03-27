const express=require("express");
const dotenv = require("dotenv");
const http=express();
const cors=require("cors");
const bodyparser = require("body-parser");
const {connectToDatabase}=require('./Database/data');
const PORT=4000;

connectToDatabase();
http.use(cors()),
http.use(express.json()),
http.use(bodyparser.json())
dotenv.config();



http.use('/User',require("./controller/Usercontroller"));



    
http.listen (PORT,()=>{
    console.log("starting...");
});




