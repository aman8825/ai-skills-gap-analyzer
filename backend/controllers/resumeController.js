import { analyzeResumeWithAI } from "../services/groqService.js";
export const uploadResume = async (req, res) => {
  try {
    console.log("File Received:");
    console.log(req.file);

    const role = req.body.role;

const aiResponse = await analyzeResumeWithAI(role);

res.json({
  success: true,
  analysis: aiResponse,
});
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};