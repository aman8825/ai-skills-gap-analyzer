import { motion } from "framer-motion";
import {
  FaUpload,
  FaBrain,
  FaSearch,
  FaChartLine,
  FaRoad,
  FaUserTie,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload />,
    title: "Upload Resume",
    desc: "Upload your PDF resume securely.",
  },
  {
    icon: <FaBrain />,
    title: "AI Analysis",
    desc: "AI extracts skills and experience.",
  },
  {
    icon: <FaSearch />,
    title: "Skill Gap Detection",
    desc: "Identify missing skills instantly.",
  },
  {
    icon: <FaChartLine />,
    title: "ATS Score",
    desc: "Measure recruiter readiness.",
  },
  {
    icon: <FaRoad />,
    title: "Roadmap Generation",
    desc: "Get a personalized learning path.",
  },
  {
    icon: <FaUserTie />,
    title: "Interview Prep",
    desc: "Receive AI-generated questions.",
  },
];

const HowItWorks = () => {
  return (
    <section  id="workflow" className="max-w-7xl mx-auto px-8 py-32">

      <div className="text-center mb-20">
        <span className="text-cyan-400 uppercase tracking-widest">
          Workflow
        </span>

        <h2 className="text-5xl font-bold mt-4">
          How It Works
        </h2>

        <p className="text-slate-400 mt-5 text-lg">
          From resume upload to interview preparation
          in just a few clicks.
        </p>
      </div>

      <div className="relative">

        {/* Vertical Line */}
     <div
  className="
  absolute
  left-1/2
  top-0
  h-full
  w-[4px]
  -translate-x-1/2
  hidden
  md:block
  rounded-full
  "
  style={{
    background:
      "linear-gradient(to bottom, #06b6d4, #8b5cf6)",
    boxShadow:
      "0 0 20px #06b6d4, 0 0 40px #8b5cf6",
  }}
/>
        <div className="space-y-16">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className={`
                flex
                items-center
                ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }
                gap-8
              `}
            >

              {/* Card */}
              <div
                className="
flex-1
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
hover:border-cyan-500/50
hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]
transition-all
duration-300
"
              >
                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="text-slate-400 mt-4">
                  {step.desc}
                </p>
              </div>

              {/* Circle */}
              
<motion.div
  animate={{
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="
  h-20
  w-20
  rounded-full
  bg-gradient-to-r
  from-violet-600
  to-cyan-500
  flex
  items-center
  justify-center
  text-2xl
  shrink-0
  relative
  z-10
  "
>
  {step.icon}
</motion.div>
              <div className="flex-1 hidden md:block" />

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;