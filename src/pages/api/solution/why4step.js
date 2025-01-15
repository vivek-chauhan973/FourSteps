import Why4StepSolution from "@/models/admin/solution/Why4StepS.js";
import SolutionHero from "@/models/admin/solution/solutionHero";

const why4stepApi = async (req, res) => {
  try {
    const { heading, SelectedPartnersData, industry, overviewData } = req.body;
    const saveData = {
      heading,
      overviewData,
      industry,
      partnersData: SelectedPartnersData,
    };

    if (!solution) {
      return res.status(400).json({ message: "Industry ID is required!" });
    }

    const data = await Why4StepSolution.findOne({ solution });
    let updatedData;

    if (!data) {
      updatedData = await Why4StepSolution.create(saveData);
      if (!updatedData) {
        return res.status(500).json({ message: "Something went wrong!" });
      }
      await SolutionHero.findOneAndUpdate(
        { _id: solution },
        { $set: { why4step: updatedData._id } }
      );
      return res.status(201).json({
        message: "Successfully created data",
        data: updatedData,
      });
    }

    updatedData = await Why4StepSolution.findOneAndUpdate(
      { solution },
      { $set: saveData },
      { new: true } // Return the updated document
    );
    if (!updatedData) {
      return res.status(500).json({ message: "Something went wrong!" });
    }
    await SolutionHero.findOneAndUpdate(
      { _id: solution },
      { $set: { why4step: updatedData._id } }
    );
    return res.status(200).json({
      message: "Successfully updated data",
      data: updatedData,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export default why4stepApi;
