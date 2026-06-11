
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
   const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-[#030712]/70
      border-b
      border-white/10
      "
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}

        {/* <Link to="/upload"  className="
            text-3xl
            font-black
            cursor-pointer
            ">
          
            Skill
            <span className="text-cyan-400">
              GapAI
            </span>
          
        </Link>  */}
        <h1
  onClick={() => {
    window.location.href = "/";
  }}
  className="text-3xl font-black cursor-pointer"
>
  Skill
  <span className="text-cyan-400">
    GapAI
  </span>
</h1>

        {/* Menu */}

        <div
          className="
          hidden
          md:flex
          gap-10
          text-slate-300
          font-medium
          "
        >
          <a
            href="#features"
            className="
            hover:text-cyan-400
            duration-300
            "
          >
            Features
          </a>

          <a
            href="#workflow"
            className="
            hover:text-cyan-400
            duration-300
            "
          >
            Roadmaps
          </a>

          <a
            href="#contact"
            className="
            hover:text-cyan-400
            duration-300
            "
          >
            Contact
          </a>
        </div>

        {/* Button */}

        <Link to="/upload">
          <button
            className="
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-cyan-500
            font-semibold
            shadow-lg
            shadow-cyan-500/20
            hover:scale-105
            hover:shadow-cyan-500/40
            duration-300
            "
          >
            Analyze Resume
          </button>
        </Link>

      </div>
    </motion.nav>
  );
};

export default Navbar;