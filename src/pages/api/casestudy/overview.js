import CaseStudy from "@/models/admin/casestudy/casestudy";
import CaseOverview from "@/models/admin/casestudy/Overview";
const overviewApi = async (req, res) => {
  const { aboutEditorHtml, casestudy } = req.body;
  if (req.method === "POST") {
    try {
      // Update or insert the Overview document for the webinar
      const data = await CaseOverview.findOneAndReplace(
        { casestudy },
        { description: aboutEditorHtml, casestudy },
        { upsert: true, new: true } // `new: true` returns the updated document
      );

      // Handle case where data might not be returned correctly
      if (!data) {
        return res.status(300).json({ message: "Something went wrong" });
      }

      // Update the related Webinar document with the overview's ID
      await CaseStudy.findByIdAndUpdate(
        { _id: casestudy },
        { $set: { overview: data._id } }
      );

      return res.status(201).json({ message: "Saved data of overview", data });
    } catch (error) {
      console.error("Error saving overview:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    const { casestudy } = req.query;
    try {
      // Find the Overview document by webinar ID
      const data = await CaseOverview.findOne({ casestudy });

      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }

      return res.status(200).json({ message: "Data found", data });
    } catch (error) {
      console.error("Error retrieving overview:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default overviewApi;
