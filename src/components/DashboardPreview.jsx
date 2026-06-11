import { motion } from "framer-motion";

const DashboardPreview = () => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="
      w-full
      max-w-xl
      rounded-3xl
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-6
      shadow-2xl
      "
    >
      <div className="flex justify-between">
        <div>
          <h2 className="text-slate-400">ATS Score</h2>
          <h1 className="text-4xl font-bold text-green-400">
            91
          </h1>
        </div>

        <div>
          <h2 className="text-slate-400">Job Match</h2>
          <h1 className="text-4xl font-bold text-cyan-400">
            84%
          </h1>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-3">
          Missing Skills
        </h3>

        <div className="flex flex-wrap gap-3">
          <span className="bg-red-500/20 px-4 py-2 rounded-full">
            TypeScript
          </span>

          <span className="bg-red-500/20 px-4 py-2 rounded-full">
            Docker
          </span>

          <span className="bg-red-500/20 px-4 py-2 rounded-full">
            Redux
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardPreview;