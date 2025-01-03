import Videos from "@/models/admin/videos/videomain";

const filterapi = async (req, res) => {
    const { industry, tools,topics,languages } = req.query;
  

    let pipeline = [];
    const addMatchCondition = (field, valueArray) => {
        if (valueArray?.length > 0 && valueArray?.[0]!=='') {
            pipeline.push({
                $match: {
                    [field]: { $in: valueArray }
                }
            });
        }
    };

    const industry1 = industry?.split(",")||[];
    const language1 = languages?.split(",")||[];
    const tools1 = tools?.split(",")||[];
    const topics1 = topics?.split(",")||[];
    addMatchCondition("industry", industry1);
    addMatchCondition("language", language1);
    addMatchCondition("tools", tools1);
    addMatchCondition("topics", topics1);

    try {
        // Use exec() instead of toArray()
        const data = await Videos.aggregate(pipeline);
        
        if (!data || data?.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
    
        
        return res.status(200).json({ message: "Found successfully", data });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export default filterapi;

//localhost:3000/api/videos/filterapi?industry=xyz&tools=xyz&topics=xyz&languages=xyz
