import Workflow from "./components/Workflow";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Prisyn from "./components/Prisyn";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import UnlockCrypto from "./components/UnlockCrypto";
import Questions from "./components/Questions";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <UnlockCrypto />
        <Testimonials />
        <Prisyn />
        <Questions />
        <Footer />
      </div>
    </>
  );
};

export default App;
