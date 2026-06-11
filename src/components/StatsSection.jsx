import { motion } from "framer-motion";

const stats = [
  {
    number: "50K+",
    title: "Students Guided",
  },
  {
    number: "100+",
    title: "Career Paths",
  },
  {
    number: "95%",
    title: "Skill Detection Accuracy",
  },
  {
    number: "10K+",
    title: "Roadmaps Generated",
  },
];

const StatsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <div className="
        rounded-[40px]
        bg-gradient-to-r
        from-violet-600/10
        to-cyan-500/10
        border
        border-white/10
        backdrop-blur-xl
        p-10
      ">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <h2 className="
                text-5xl
                font-black
                bg-gradient-to-r
                from-cyan-400
                to-violet-400
                text-transparent
                bg-clip-text
              ">
                {item.number}
              </h2>

              <p className="text-slate-400 mt-3">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default StatsSection;