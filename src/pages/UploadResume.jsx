import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnalysisPreview from "../components/AnalysisPreview";
import API from "../services/api";
import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaBriefcase,
} from "react-icons/fa";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "AI Engineer",
  "Data Analyst",
  "DevOps Engineer",
];

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });
 

const handleAnalyzeResume = async () => {
  if (!file || !role) {
    alert("Please upload resume and select role");
    return;
  }

  try {
    setLoading(true);

    const formData = new FormData();

    formData.append("resume", file);
    formData.append("role", role);

    const response = await API.post(
      "/api/resume/upload",
      formData
    );

    console.log(response.data);

// Analysis save karo
localStorage.setItem(
  "analysis",
  JSON.stringify(response.data.analysis)
);

alert("Resume Uploaded Successfully 🚀");
localStorage.setItem("selectedRole", role);
navigate("/dashboard");
  } catch (error) {
  console.log("ERROR:", error);

  console.log("RESPONSE:", error.response);

  alert("Upload Failed");
} finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#030712] text-white px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black">
            Upload Resume
          </h1>

          <p className="text-slate-400 mt-5 text-lg">
            Analyze your resume and discover
            the fastest path to your dream job.
          </p>
        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
          mt-16
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          lg:p-10
          "
        >
          <div className="grid lg:grid-cols-2 gap-8">

            {/* LEFT SIDE */}

            <div>

              {/* Upload Area */}

              <div
                {...getRootProps()}
                className="
                border-2
                border-dashed
                border-cyan-500/40
                rounded-3xl
                p-12
                text-center
                cursor-pointer
                hover:border-cyan-400
                transition-all
                duration-300
                "
              >
                <input {...getInputProps()} />

                <FaCloudUploadAlt
                  className="
                  text-7xl
                  mx-auto
                  text-cyan-400
                  "
                />

                <h2 className="text-3xl font-bold mt-6">
                  Drag & Drop Resume
                </h2>

                <p className="text-slate-400 mt-4">
                  PDF only • Maximum 5 MB
                </p>
              </div>

              {/* File Preview */}

              {file && (
                <div
                  className="
                  mt-6
                  bg-[#0F172A]
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  flex
                  items-center
                  gap-4
                  "
                >
                  <FaFilePdf className="text-red-500 text-3xl" />

                  <div>
                    <h3 className="font-semibold">
                      {file.name}
                    </h3>

                    <p className="text-slate-400 text-sm">
                      Resume Uploaded Successfully
                    </p>
                  </div>
                </div>
              )}

              {/* Role Selection */}

              <div className="mt-8">

                <label
                  className="
                  flex
                  items-center
                  gap-3
                  mb-4
                  text-lg
                  font-medium
                  "
                >
                  <FaBriefcase />
                  Select Target Role
                </label>

                <select
                  value={role}
                  onChange={(e) =>
                    setRole(e.target.value)
                  }
                  className="
                  w-full
                  bg-[#0F172A]
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  outline-none
                  "
                >
                  <option value="">
                    Choose Target Role
                  </option>

                  {roles.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Analyze Button */}
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  onClick={handleAnalyzeResume}
  className="
  mt-8
  w-full
  py-5
  rounded-2xl
  text-lg
  font-bold
  bg-gradient-to-r
  from-violet-600
  to-cyan-500
  shadow-xl
  shadow-cyan-500/20
  "
>
  {loading ? "Analyzing..." : "Analyze Resume"}
</motion.button>

            </div>

            {/* RIGHT SIDE */}

            <AnalysisPreview />

          </div>
        </motion.div>

      </div>

    </div>
  );
};

export default UploadResume;