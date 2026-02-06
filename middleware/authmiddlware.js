const jwt=require('jsonwebtoken')


 exports.verifytoken=(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1];
if(!token) res.status(401).json({message:"token is required"})

    const decode=jwt.verify(token,"secretkey");
    req.user=decode;
    next();
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"internal server error"})
    }


}
