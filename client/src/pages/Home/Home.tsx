import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Footer from "../../components/layout/Footer";
import Features from "../../components/home/Features";
import Services from "../../components/home/Services";
import HowItWorks from "../../components/home/HowItWorks";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <Services/>
      <HowItWorks/>
      <Footer />
    </>
  );
};

export default Home;