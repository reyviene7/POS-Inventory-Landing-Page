import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6 overflow-x-hidden">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;