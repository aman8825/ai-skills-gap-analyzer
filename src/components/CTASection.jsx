import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const CTASection = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-gradient-to-r
        from-violet-700/30
        via-cyan-600/20
        to-violet-700/30
        backdrop-blur-xl
        p-16
        text-center
        "
      >

        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-violet-500 blur-[140px] opacity-40" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 blur-[140px] opacity-40" />

        <div className="relative z-10">

          <span
            className="
            px-4
            py-2
            rounded-full
            bg-white/10
            border
            border-white/10
            "
          >
            AI Career Intelligence
          </span>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-black
            mt-8
            "
          >
            Ready To Unlock
            <span
              className="
              block
              bg-gradient-to-r
              from-cyan-400
              to-violet-400
              text-transparent
              bg-clip-text
              "
            >
              Your Dream Career?
            </span>
          </h2>

          <p
            className="
            text-slate-300
            text-lg
            mt-8
            max-w-3xl
            mx-auto
            "
          >
            Upload your resume, identify skill gaps,
            improve ATS score and get a personalized
            AI roadmap in minutes.
          </p>
<Link to="/upload">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
            mt-10
            px-10
            py-5
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            to-cyan-500
            font-bold
            text-lg
            flex
            items-center
            gap-3
            mx-auto
            shadow-2xl
            shadow-cyan-500/20
            "
          >
            Analyze Resume

            <FaArrowRight />
          </motion.button>
</Link>
        </div>

      </motion.div>

    </section>
  );
};

export default CTASection;