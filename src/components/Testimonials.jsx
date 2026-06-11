import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aman Patel",
    role: "Frontend Developer",
    quote:
      "The AI roadmap helped me identify missing React and TypeScript skills. My ATS score improved significantly.",
    before: 61,
    after: 89,
  },
  {
    name: "Rohit Sharma",
    role: "Full Stack Developer",
    quote:
      "The interview preparation feature generated exactly the type of questions I faced during interviews.",
    before: 68,
    after: 92,
  },
  {
    name: "Priya Verma",
    role: "Data Analyst",
    quote:
      "I discovered important missing skills and followed the roadmap to become interview ready.",
    before: 57,
    after: 86,
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">

      <div className="text-center mb-20">

        <span className="text-cyan-400 uppercase tracking-widest">
          Success Stories
        </span>

        <h2 className="text-5xl font-bold mt-4">
          Trusted By Students
        </h2>

        <p className="text-slate-400 mt-5 text-lg">
          Real results through AI-powered career guidance.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
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
            className="
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            p-8
            hover:border-cyan-400
            hover:-translate-y-2
            duration-300
            "
          >

            <div className="flex gap-1 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-slate-300 mt-6 leading-8">
              "{item.quote}"
            </p>

            <div className="mt-8">

              <h3 className="font-bold text-xl">
                {item.name}
              </h3>

              <p className="text-slate-400">
                {item.role}
              </p>

            </div>

            <div className="mt-8 flex justify-between">

              <div>
                <p className="text-slate-500 text-sm">
                  Before
                </p>

                <h2 className="text-red-400 text-3xl font-bold">
                  {item.before}
                </h2>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  After
                </p>

                <h2 className="text-green-400 text-3xl font-bold">
                  {item.after}
                </h2>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Testimonials;