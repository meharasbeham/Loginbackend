const  {default:mongoose}  = require("mongoose");

const Authschema=  mongoose.Schema({
Name:{
    type:String,
    
},
Email:{
    type:String,
    require:true,
},
Password:{
    type:String,
    require:true,
},

});

module.exports=mongoose.model("authdb",Authschema);