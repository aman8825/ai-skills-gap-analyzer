import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import DashboardShowcase from "../components/DashboardShowcase";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import TrustedBy from "../components/TrustedBy";

const Home = () => {
  return (
    <div className="bg-[#030712] text-white">

      <Navbar />

      <Hero />
<TrustedBy/>
      <Features />

      <HowItWorks />
<DashboardShowcase/>
<StatsSection/>
<Testimonials/>
<CTASection/>
<Footer/>
    </div>
  );
};

export default Home;