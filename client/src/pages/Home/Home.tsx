import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Footer from "../../components/layout/Footer";
import Features from "../../components/home/Features";
import Services from "../../components/home/Services";
import HowItWorks from "../../components/home/HowItWorks";
import FeaturedLawyers from "../../components/home/FeaturedLawyers";
import FAQ from "../../components/home/FAQ";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <Services/>
      <HowItWorks/>
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;