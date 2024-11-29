import Webinar from "@/models/admin/webinar/Webinar";
const filterapi = async (req, res) => {
    const { industry, department,tools,topics,languages,webinarType } = req.query;
    let pipeline = [];

    if (industry) {
        pipeline.push({
            $match: {
                industry: {$in:industry}
            }
        });
    }
    if (department) {
        pipeline.push({
            $match: {
                department: {$in:department}
            }
        });
    }
    if (tools) {
        pipeline.push({
            $match: {
                toolsAndSoftware: {$in:tools}
            }
        });
    }
    if (topics) {
        pipeline.push({
            $match: {
                topic: {$in:topics}
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
    if (webinarType) {
        pipeline.push({
            $match: {
                selectType: {$in:webinarType}
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

export default filterapi;

//localhost:3000/api/webinar/filterapi?industry=xyz&department=xyz&tools=xyz&topics=xyz&languages=xyz&webinarType=xyz 
