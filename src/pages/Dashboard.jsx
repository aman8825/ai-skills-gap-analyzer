import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import { FaDownload } from "react-icons/fa";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaBook,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  
  const [analysis, setAnalysis] = useState(null);
const selectedRole =
  localStorage.getItem("selectedRole");
useEffect(() => {
  const data = localStorage.getItem("analysis");

  if (data) {
    setAnalysis(JSON.parse(data));
  }
}, []);
if (!analysis) {
  
  return (
    <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Loading Analysis...
      </h1>
    </div>
  );
}
const atsColor =
  analysis.atsScore >= 80
    ? "#22c55e"
    : analysis.atsScore >= 60
    ? "#eab308"
    : "#ef4444";

const resumeStrength =
  analysis.atsScore >= 80
    ? "Strong"
    : analysis.atsScore >= 60
    ? "Average"
    : "Weak";

const strengthColor =
  analysis.atsScore >= 80
    ? "text-green-400"
    : analysis.atsScore >= 60
    ? "text-yellow-400"
    : "text-red-400";
const downloadRoadmap = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("AI Learning Roadmap", 20, 20);

  doc.text("Week 1 - React Fundamentals", 20, 40);
  doc.text("Week 2 - Advanced React", 20, 55);
  doc.text("Week 3 - Redux Toolkit", 20, 70);
  doc.text("Week 4 - Build Portfolio Project", 20, 85);

  doc.save("AI-Roadmap.pdf");
};

const downloadInterviewQuestions = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Interview Questions", 20, 20);

  doc.text("1. What is Virtual DOM?", 20, 40);
  doc.text("2. Difference between useState and useEffect?", 20, 55);
  doc.text("3. What is Redux Toolkit?", 20, 70);
  doc.text("4. Explain React Lifecycle.", 20, 85);

  doc.save("Interview-Questions.pdf");
};

const downloadCourses = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Recommended Courses", 20, 20);

  doc.text("React - Coursera", 20, 40);
  doc.text("Redux Toolkit - Udemy", 20, 55);
  doc.text("TypeScript - FreeCodeCamp", 20, 70);
  doc.text("AWS Basics - AWS Skill Builder", 20, 85);

  doc.save("Recommended-Courses.pdf");
};
const generateCareerReport = () => {
  const doc = new jsPDF();

  doc.setFontSize(24);
  doc.text("AI Career Report", 20, 20);

  doc.setFontSize(14);

  doc.text(
    `Target Role: ${selectedRole}`,
    20,
    40
  );

  doc.text(
    `ATS Score: ${analysis.atsScore}%`,
    20,
    50
  );

  doc.text(
    `Job Match: ${analysis.jobMatch}%`,
    20,
    60
  );

  doc.text(
    `Resume Strength: ${resumeStrength}`,
    20,
    70
  );

  // Current Skills

  doc.text("Current Skills:", 20, 90);

  analysis.currentSkills.forEach(
    (skill, index) => {
      doc.text(
        `• ${skill}`,
        30,
        100 + index * 10
      );
    }
  );

  // Missing Skills

  let y =
    120 +
    analysis.currentSkills.length * 10;

  doc.text("Missing Skills:", 20, y);

  analysis.missingSkills.forEach(
    (skill, index) => {
      doc.text(
        `• ${skill}`,
        30,
        y + 10 + index * 10
      );
    }
  );

  // New Page

  doc.addPage();

  doc.text(
    "AI Learning Roadmap",
    20,
    20
  );

 analysis.roadmap.forEach(
  (item, index) => {
    doc.text(
      `Step ${item.step}: ${item.skill} (${item.timeframe})`,
      20,
      40 + index * 15
    );
  }
);

  doc.text(
    "Interview Questions",
    20,
    120
  );

  analysis.interviewQuestions.forEach(
    (question, index) => {
      doc.text(
        `${index + 1}. ${question}`,
        20,
        135 + index * 15
      );
    }
  );

  doc.addPage();

  doc.text(
    "Recommended Courses",
    20,
    20
  );

  analysis.courses.forEach(
  (course, index) => {
    doc.text(
      `• ${course.name} | ${course.platform} | ${course.duration}`,
      20,
      40 + index * 15
    );
  }
);
  doc.save("Career-Report.pdf");
};
  return (
    <div className="min-h-screen bg-[#030712] text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <h1 className="text-6xl font-black">
          AI Career Dashboard
        </h1>

        <p className="text-cyan-400 mt-3">
  {selectedRole} Analysis Report
</p>
<div className="flex justify-end mt-6">

  <button
    onClick={generateCareerReport}
    className="
    px-6
    py-3
    rounded-2xl
    bg-gradient-to-r
     from-cyan-500
    to-violet-500
    font-semibold
    shadow-lg
    hover:scale-105
    duration-300
    "
  >
    Generate Career Report
  </button>

</div>
        {/* Top Cards */}

        <div className="grid lg:grid-cols-3 gap-6 mt-10">

          {/* ATS Score */}

          <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

            <h3 className="text-slate-400 mb-6">
              ATS Score
            </h3>

            <div className="w-36 h-36 mx-auto">

              <CircularProgressbar
                value={analysis.atsScore}
text={`${analysis.atsScore}%`}
                styles={buildStyles({
  pathColor: atsColor,
  textColor: atsColor,
  trailColor: "#1e293b",
})}
              />

            </div>

          </div>

          {/* Job Match */}

          <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

            <div className="flex items-center gap-3">
              <FaBriefcase className="text-cyan-400" />
              <h3>Job Match</h3>
            </div>

            <h1 className="text-6xl font-black text-cyan-400 mt-6">
         {analysis.jobMatch}%
            </h1>

           <p className="text-slate-400 mt-4">
  {selectedRole}
</p>

          </div>

          {/* Resume Strength */}

          <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

            <div className="flex items-center gap-3">
              <FaChartLine className="text-violet-400" />
              <h3>Resume Strength</h3>
            </div>

           <h1
  className={`text-5xl font-black mt-6 ${strengthColor}`}
>
  {resumeStrength}
</h1>

<p className="text-slate-400 mt-3">
  Based on ATS score and skill match
</p>

          </div>

        </div>

        {/* Skills */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Current Skills */}

          <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

            <h2 className="text-2xl font-bold">
              Current Skills
            </h2>

            <div className="flex flex-wrap gap-3 mt-6">

              {
              analysis.currentSkills.map((skill) => (
                <span
                  key={skill}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-green-500/20
                  text-green-400
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Missing Skills */}

          <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

            <h2 className="text-2xl font-bold">
              Missing Skills
            </h2>

            <div className="space-y-4 mt-6">

              {
              analysis.missingSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3"
                >
                  <FaExclamationTriangle className="text-yellow-400" />

                  {skill}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Skill Match Analysis */}

        <div className="bg-white/5 rounded-3xl border border-white/10 p-8 mt-10">

          <h2 className="text-2xl font-bold mb-8">
            Skill Match Analysis
          </h2>

          {[
  ...analysis.currentSkills.map((skill) => ({
    skill,
    score: 90,
  })),
  ...analysis.missingSkills.map((skill) => ({
    skill,
    score: 30,
  })),
].map((item, index) => (
  <div
    key={index}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span>{item.skill}</span>
      <span>{item.score}%</span>
    </div>

    <div className="h-3 bg-slate-800 rounded-full">
      <div
        className={`
        h-3
        rounded-full
        ${
          item.score >= 80
            ? "bg-green-500"
            : item.score >= 60
            ? "bg-yellow-500"
            : "bg-red-500"
        }
        `}
        style={{
          width: `${item.score}%`,
        }}
      />
    </div>
  </div>
))}

        </div>
{/* Skill Gap Summary */}

<div className="bg-white/5 rounded-3xl border border-white/10 p-8 mt-10">

  <h2 className="text-2xl font-bold">
    Skill Gap Summary
  </h2>

  <div className="mt-6 space-y-4">

    <p>
      Skills Found: {analysis.currentSkills.length}
    </p>

    <p>
      Skills Missing: {analysis.missingSkills.length}
    </p>

    <p>
      Readiness Score: {analysis.jobMatch}%
    </p>

  </div>

</div>
{/* AI Suggestions */}

<div className="bg-white/5 rounded-3xl border border-white/10 p-8 mt-10">

  <h2 className="text-2xl font-bold">
    AI Suggestions
  </h2>

  <div className="mt-6 space-y-4">
  {analysis.suggestions?.map(
    (item, index) => (
      <div
        key={index}
        className="
        flex
        items-center
        gap-3
        "
      >
        <FaCheckCircle className="text-green-400" />

        {typeof item === "string"
          ? item
          : JSON.stringify(item)}
      </div>
    )
  )}
</div>

</div>
 {/* Roadmap */}

<div className="bg-white/5 rounded-3xl border border-white/10 p-8 mt-10">

  <h2 className="text-2xl font-bold mb-6">
    AI Learning Roadmap
  </h2>

  <div className="space-y-8">

    <div>
      <h3 className="text-cyan-400 font-bold mb-3">
        Short Term (0-3 Months)
      </h3>

      {analysis.roadmap?.[0]?.shortTerm?.map(
        (item, index) => (
          <div
            key={index}
            className="flex gap-3 mb-3"
          >
            <FaCheckCircle className="text-green-400 mt-1" />
            <span>{item}</span>
          </div>
        )
      )}
    </div>

    <div>
      <h3 className="text-yellow-400 font-bold mb-3">
        Mid Term (3-12 Months)
      </h3>

      {analysis.roadmap?.[0]?.midTerm?.map(
        (item, index) => (
          <div
            key={index}
            className="flex gap-3 mb-3"
          >
            <FaCheckCircle className="text-green-400 mt-1" />
            <span>{item}</span>
          </div>
        )
      )}
    </div>

    <div>
      <h3 className="text-violet-400 font-bold mb-3">
        Long Term (1+ Year)
      </h3>

      {analysis.roadmap?.[0]?.longTerm?.map(
        (item, index) => (
          <div
            key={index}
            className="flex gap-3 mb-3"
          >
            <FaCheckCircle className="text-green-400 mt-1" />
            <span>{item}</span>
          </div>
        )
      )}
    </div>

  </div>

</div>

        {/* Interview Questions */}

     <div
  className="
  relative
  bg-white/5
  rounded-3xl
  border
  border-white/10
  p-8
  mt-10
  "
>

  <h2 className="text-2xl font-bold">
    Interview Questions
  </h2>

  <ul className="mt-6 space-y-4">
{analysis.interviewQuestions.map((question) => (
  <li key={question}>
    {question}
  </li>
))}

  </ul>

  {/* Download Button */}

  <button
    onClick={downloadInterviewQuestions}
    title="Download PDF"
    className="
    absolute
    bottom-6
    right-6
    h-12
    w-12
    rounded-full
   bg-green-500
    hover:bg-green-600
    flex
    items-center
    justify-center
    shadow-lg
    hover:scale-110
    duration-300
    "
  >
    <FaDownload />
  </button>

</div>
        {/* Courses */}

        <div
  className="
  relative
  bg-white/5
  rounded-3xl
  border
  border-white/10
  p-8
  pb-20
  mt-10
  "
>

  <h2 className="text-2xl font-bold flex items-center gap-3">
    <FaBook />
    Recommended Courses
  </h2>
<div className="mt-6 space-y-4">
  {analysis.courses?.map((course, index) => (
    <div
      key={index}
      className="
      p-4
      rounded-xl
      bg-white/5
      border
      border-white/10
      "
    >
      <h3 className="font-bold text-lg">
       {course.title}
      </h3>

      <p className="text-cyan-400 mt-2">
        Platform: {course.platform}
      </p>

      <p className="text-slate-400">
        Duration: {course.duration}
      </p>
    </div>
  ))}
</div>

  {/* Download Button */}

  <button
    onClick={downloadCourses}
    title="Download Courses PDF"
    className="
    absolute
    bottom-6
    right-6
    h-12
    w-12
    rounded-full
   bg-violet-500
    hover:bg-violet-600
    flex
    items-center
    justify-center
    shadow-lg
    hover:scale-110
    duration-300
    "
  >
    <FaDownload />
  </button>

</div>

      </div>

    </div>
  );
};

export default Dashboard;