

const Usermodel=require("../Models/Usermodel");
const bcrypt=require("bcrypt");

const UserRouter=require("express").Router();

UserRouter.post("/singin",(req,res,next)=>{
    const {email,password}=req.body;
Usermodel.find({email:email})
.then((response)=>{
    if(response&&response._id){
        if(bcrypt.compareSync(password,response.password)){
        return res.status(200).json({
          success:true,
          message:"singin successfull",  
        });
    }else{
        return res.status(401).json({
            success:true,
            message:"emil or password is wrong",
        });
    }

    
}else{
       return res.status(200).json({
                success:true,
                 message:"Account does not exist,kindly create your account",
            
            });
        }        
        
})
.catch ((error)=>{
    return res.status(500).json({
        success:false,
        error:error,
    });
});
});

  
UserRouter.post("/create", async (req, res,next) => {
  try {
    const salt = await bcrypt.genSalt(10);


    const hashPassword= await bcrypt.hash(req.body.Password, salt);
    const NEW_USER = await Usermodel.create({ ...req.body, password: hashPassword });
    res.status(200).json({
      success: true,
      message: "Account created successfully"
    })

  } catch (error) {
  
console.log(error);
    res.status(400).json({
      success: true,
      message: error
    });
  }
});




UserRouter.get("/list",(req,res,next)=>{
    Usermodel.find()
    .then((response)=>{
        res.status(200).json({
            success:true,
            message:"user data fetched successfully",
            data:response,   
          });          
    });

});
module.exports=UserRouter;