import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const DashboardShowcase = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">

      <div className="text-center mb-20">

        <span className="text-cyan-400 uppercase tracking-widest">
          Product Preview
        </span>

        <h2 className="text-5xl font-bold mt-4">
          Powerful Career Dashboard
        </h2>

        <p className="text-slate-400 mt-5 text-lg">
          Everything you need to improve your profile.
        </p>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-[40px]
        p-8
        "
      >

        <div className="grid lg:grid-cols-4 gap-6">

          {/* ATS */}

          <div className="bg-[#0F172A] rounded-3xl p-6">

            <p className="text-slate-400">
              ATS Score
            </p>

            <h1 className="text-6xl font-bold mt-3 text-green-400">
              91
            </h1>

            <div className="flex items-center gap-2 mt-4 text-green-400">
              <FaArrowUp />
              +12%
            </div>

          </div>

          {/* Job Match */}

          <div className="bg-[#0F172A] rounded-3xl p-6">

            <p className="text-slate-400">
              Job Match
            </p>

            <h1 className="text-6xl font-bold mt-3 text-cyan-400">
              84%
            </h1>

            <p className="text-slate-500 mt-4">
              Frontend Developer
            </p>

          </div>

          {/* Skills */}

          <div className="bg-[#0F172A] rounded-3xl p-6 col-span-2">

            <h3 className="font-semibold text-xl">
              Current Skills
            </h3>

            <div className="flex flex-wrap gap-3 mt-6">

              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind",
              ].map((skill) => (
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

        </div>

        {/* Bottom Grid */}

        <div className="grid lg:grid-cols-2 gap-6 mt-6">

          {/* Missing Skills */}

          <div className="bg-[#0F172A] rounded-3xl p-6">

            <h3 className="text-xl font-semibold">
              Missing Skills
            </h3>

            <div className="space-y-4 mt-6">

              {[
                "TypeScript",
                "Redux",
                "Docker",
                "AWS",
              ].map((skill) => (
                <div
                  key={skill}
                  className="
                  flex
                  items-center
                  gap-3
                  "
                >
                  <FaExclamationTriangle className="text-yellow-400" />

                  {skill}
                </div>
              ))}

            </div>

          </div>

          {/* Roadmap */}

          <div className="bg-[#0F172A] rounded-3xl p-6">

            <h3 className="text-xl font-semibold">
              AI Roadmap
            </h3>

            <div className="space-y-4 mt-6">

              {[
                "Week 1 - React Fundamentals",
                "Week 2 - Advanced Components",
                "Week 3 - Redux Toolkit",
                "Week 4 - Portfolio Project",
              ].map((week) => (
                <div
                  key={week}
                  className="
                  flex
                  items-center
                  gap-3
                  "
                >
                  <FaCheckCircle className="text-green-400" />

                  {week}
                </div>
              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default DashboardShowcase;