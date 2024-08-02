
const {default:mongoose} = require("mongoose");
const databs="mongodb://localhost:27017/Authe";

function connectToDatabase() {  
     mongoose
    .connect(databs)
    .then((response)=>{
      if(response){
        console.log("connect");
      }
    })
    .catch((e) => console.log(e));
}

module.exports = {
  connectToDatabase,
};