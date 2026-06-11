// import Groq from "groq-sdk";

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "your-api-key",
});
export const analyzeResumeWithAI = async (role) => {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: `
Generate career analysis for ${role}.

Return ONLY valid JSON.

{
  "atsScore": 85,
  "jobMatch": 80,
  "currentSkills": [],
  "missingSkills": [],
  "roadmap": [],
  "interviewQuestions": [],
  "courses": [],
  "suggestions": [],
  "strengths": [],
  "weaknesses": []
}
`,
      },
    ],
  });

  const content =
  completion.choices[0].message.content;

try {
  const cleanJson = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanJson);
} catch (err) {
  console.log("RAW AI RESPONSE:");
  console.log(content);

  throw err;
}
};