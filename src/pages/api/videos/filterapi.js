import Videos from "@/models/admin/videos/videomain";

const filterapi = async (req, res) => {
    const { industry, tools,topics,languages } = req.query;
    let pipeline = [];

    if (industry) {
        pipeline.push({
            $match: {
                industry: {$in:industry}
            }
        });
    }

    if (tools) {
        pipeline.push({
            $match: {
                tools: {$in:tools}
            }
        });
    }
    if (topics) {
        pipeline.push({
            $match: {
                topics: {$in:topics}
            }
        });
    }
    if (languages) {
        pipeline.push({
            $match: {
                language: {$in:languages}
            }
        });
    }
   


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