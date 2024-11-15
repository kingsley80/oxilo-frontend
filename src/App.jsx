import Workflow from "./components/Workflow";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import UnlockCrypto from "./components/UnlockCrypto";
import Pricing from "./components/Pricing";
import Answers from "./components/Answers";

const App = () => {
  return (
    <>
      <Navbar />

      <HeroSection />
      <div className="max-w-7xl mx-auto px-6">
        <FeatureSection />
        <Workflow />
        <UnlockCrypto />
        <Testimonials />
        <Pricing />
        <Answers />
        <Footer />
      </div>
    </>
  );
};

export default App;
