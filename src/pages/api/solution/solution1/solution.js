import SolutionSolution from "@/models/admin/solution/solution/solution";
import SolutionHero from "@/models/admin/solution/solutionHero";
const successApi = async (req, res) => {
  const { solution } = req.query;
  try {
    const { heading,mainEditorHtmlDescription,successItem } = req.body;
// console.log("req------------------body------> ",req.body)
    const data = await SolutionSolution.findOne({ solution });
    let resData;
    if (!data) {
      resData = await SolutionSolution.create({
        heading:heading,
        mainEditorHtmlDescription:mainEditorHtmlDescription,
        successItem:successItem,
        solution,
      });
      if (!resData) {
        return res.status(300).json({ message: "something went wrong" });
      }
      await SolutionHero.findOneAndUpdate({_id:solution},{$set:{success:resData?._id}})
      return res
        .status(201)
        .json({ message: "solution data saved successfully ", resData });
    }
    resData = await SolutionSolution.findOneAndReplace(
      { solution },
      { heading, mainEditorHtmlDescription, successItem, solution }
    );
    if (!resData) {
      return res.status(300).json({ message: "something went wrong" });
    }
    await SolutionHero.findOneAndUpdate({_id:solution},{$set:{success:resData?._id}})
    return res
      .status(201)
      .json({ message: "solution data updated successfully ", resData });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export default successApi;
