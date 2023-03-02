import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import NavBar from "../Components/NavBar";
import ServicesSection from "../Components/ServicesSection";
import ShowCase from "../Components/ShowCase";

function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <ShowCase />
      <Footer />
    </>
  );
}

export default Home;