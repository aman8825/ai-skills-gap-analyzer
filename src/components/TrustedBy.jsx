import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Adobe",
];

const TrustedBy = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <p className="text-center text-slate-500 uppercase tracking-widest">
        Inspired By Industry Standards
      </p>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-10">

        {companies.map((company, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
            }}
           
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
            {company}
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default TrustedBy;