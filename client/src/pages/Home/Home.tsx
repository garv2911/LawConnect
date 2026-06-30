import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Footer from "../../components/layout/Footer";
import Features from "../../components/home/Features";
import Services from "../../components/home/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <Services/>
      <Footer />
    </>
  );
};

export default Home;