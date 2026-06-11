import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import resumeRoutes from "./routes/resumeRoutes.js";
import { analyzeResumeWithAI } from "./services/groqService.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});


app.get("/test-groq", async (req, res) => {
  try {
    const data = await analyzeResumeWithAI(
      "Frontend Developer"
    );

    res.json(data);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});