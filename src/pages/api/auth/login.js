const loginApi=async (re,res)=>{
    try {
        
        const {username,password}=req.body;
        
    } catch (error) {
        
        return res.status(500).json({message:"Internal Server Error",error})
    }

}

export default loginApi;