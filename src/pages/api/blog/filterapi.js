import BlogDetail from "@/models/admin/blog copy/BlogDetail";


const filterapi = async (req, res) => {
    const { industry, tools,topics,department } = req.query;
    let pipeline = [];

    if (industry) {
        pipeline.push({
            $match: {
                selectIndustry: {$in:industry}
            }
        });
    }

    if (tools) {
        pipeline.push({
            $match: {
                selectTools: {$in:tools}
            }
        });
    }
    if (topics) {
        pipeline.push({
            $match: {
                selectTopic: {$in:topics}
            }
        });
    }
    if (department) {
        pipeline.push({
            $match: {
                selectDepartment: {$in:department}
            }
        });
    }
   


    try {
        // Use exec() instead of toArray()
        const data = await BlogDetail.aggregate(pipeline);
        
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

//localhost:3000/api/blog/filterapi?industry=xyz&tools=xyz&topics=xyz&department=xyz
