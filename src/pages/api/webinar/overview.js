import Overview from "@/models/admin/webinar/Overview";

const overviewApi=async (req,res)=>{
const {method}=req.query;
if(method==="POST"){

    try {

    
        
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"});
    }
}

}

export default overviewApi