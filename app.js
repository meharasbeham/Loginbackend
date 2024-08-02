const express=require("express");
const bodyparser=require("body-parser");
const App=express();
App.use(bodyparser.json());
App.use("/User",require("./controller/Usercontroller"));


module.exports=App;