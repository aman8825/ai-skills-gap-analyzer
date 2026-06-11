import { FaCheckCircle } from "react-icons/fa";

const AnalysisPreview = () => {
  return (
    <div
      className="
      h-full
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      "
    >
      <h2 className="text-2xl font-bold">
        Analysis Preview
      </h2>

      {/* ATS */}

      <div className="mt-8">
        <p className="text-slate-400">
          ATS Score
        </p>

        <h1 className="text-6xl font-black text-green-400">
          91
        </h1>
      </div>

      {/* Job Match */}

      <div className="mt-8">
        <p className="text-slate-400">
          Job Match
        </p>

        <h2 className="text-4xl font-bold text-cyan-400">
          84%
        </h2>
      </div>

      {/* Missing Skills */}

      <div className="mt-8">
        <h3 className="font-semibold">
          Missing Skills
        </h3>

        <div className="flex flex-wrap gap-2 mt-4">

          {[
            "TypeScript",
            "Redux",
            "Docker",
          ].map((skill) => (
            <span
              key={skill}
              className="
              px-3
              py-2
              rounded-full
              bg-red-500/20
              text-red-300
              "
            >
              {skill}
            </span>
          ))}

        </div>
      </div>

      {/* Roadmap */}

      <div className="mt-8">
        <h3 className="font-semibold">
          AI Roadmap
        </h3>

        <div className="space-y-3 mt-4">

          {[
            "React Fundamentals",
            "Redux Toolkit",
            "TypeScript",
            "Portfolio Project",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <FaCheckCircle className="text-green-400" />
              {item}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AnalysisPreview;