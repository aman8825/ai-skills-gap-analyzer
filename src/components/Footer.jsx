import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer   id="contact"
      className="
      border-t
      border-white/10
      bg-[#030712]
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-20
        "
      >
        <div
          className="
          grid
          lg:grid-cols-4
          gap-12
          "
        >
          {/* Logo Section */}

          <div>
            <h2
              className="
              text-3xl
              font-black
              "
            >
              SkillGap
              <span className="text-cyan-400">
                AI
              </span>
            </h2>

            <p
              className="
              text-slate-400
              mt-6
              leading-8
              "
            >
              AI powered career intelligence
              platform helping students
              identify skill gaps and build
              personalized learning roadmaps.
            </p>

            <div
              className="
              flex
              gap-4
              mt-8
              "
            >
              {[FaGithub, FaLinkedin, FaTwitter, FaInstagram].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="
                    h-12
                    w-12
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    hover:border-cyan-400
                    hover:text-cyan-400
                    duration-300
                    cursor-pointer
                    "
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Product */}

          <div>
            <h3
              className="
              font-bold
              text-xl
              mb-6
              "
            >
              Product
            </h3>

            <ul
              className="
              space-y-4
              text-slate-400
              "
            >
              <li>Features</li>
              <li>ATS Analysis</li>
              <li>AI Roadmaps</li>
              <li>Interview Prep</li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3
              className="
              font-bold
              text-xl
              mb-6
              "
            >
              Resources
            </h3>

            <ul
              className="
              space-y-4
              text-slate-400
              "
            >
              <li>Blog</li>
              <li>Documentation</li>
              <li>Tutorials</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3
              className="
              font-bold
              text-xl
              mb-6
              "
            >
              Company
            </h3>

            <ul
              className="
              space-y-4
              text-slate-400
              "
            >
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
          border-t
          border-white/10
          mt-16
          pt-8
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          "
        >
          <p className="text-slate-500">
            © 2026 SkillGapAI. All rights reserved.
          </p>

          <p className="text-slate-500 mt-4 md:mt-0">
            Built with React + AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;