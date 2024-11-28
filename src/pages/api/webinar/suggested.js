import Webinar from "@/models/admin/webinar/Webinar";

const suggestedApi = async (req, res) => {
    const { industry, department } = req.query;
    let pipeline = [];

    if (industry) {
        pipeline.push({
            $match: {
                industry: industry
            }
        });
    }
    if (department) {
        pipeline.push({
            $match: {
                department: department
            }
        });
    }

    try {
        // Use exec() instead of toArray()
        const data = await Webinar.aggregate(pipeline);
        
        if (!data || data?.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        
        return res.status(200).json({ message: "Found successfully", data });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export default suggestedApi;

//localhost:3000/api/webinar/suggested?industry=xyz&department=xyz
