import DashboardPreview from "./DashboardPreview";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      "
    >
      <div className="absolute top-20 left-20 h-80 w-80 bg-violet-600 rounded-full blur-[150px]" />

      <div className="absolute bottom-10 right-20 h-80 w-80 bg-cyan-500 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center px-8">

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span
            className="
            px-4
            py-2
            rounded-full
            bg-cyan-500/20
            text-cyan-300
            "
          >
            AI Powered Career Intelligence
          </span>

          <h1
            className="
            text-6xl
            font-black
            leading-tight
            mt-6
            "
          >
            Discover Your
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
              Career Skill Gap
            </span>
          </h1>

          <p
            className="
            text-slate-400
            text-xl
            mt-8
            max-w-xl
            "
          >
            Upload your resume, identify missing skills,
            improve ATS score and generate personalized
            AI learning roadmaps.
          </p>

          <div className="flex gap-5 mt-10">
             <Link to="/upload">
            <button
              className="
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              font-semibold
              hover:scale-105
              duration-300
              "
            >
              Analyze Resume
            </button>
</Link>
            <button
              className="
              px-8
              py-4
              rounded-2xl
              border
              border-white/20
              "
            >
              Watch Demo
            </button>
          </div>

          <div className="flex gap-10 mt-12">
            <div>
              <h2 className="text-3xl font-bold">
                50K+
              </h2>
              <p className="text-slate-400">
                Students
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                95%
              </h2>
              <p className="text-slate-400">
                Accuracy
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                100+
              </h2>
              <p className="text-slate-400">
                Roles
              </p>
            </div>
          </div>
        </motion.div>

        <DashboardPreview />
      </div>
    </section>
  );
};

export default Hero;