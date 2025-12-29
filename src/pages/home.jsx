import Footer from "../components/footer";
import Header from "../components/header";
import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experAch";
import Hero from "./hero";
import FeaturedProjects from "./projects";
import Skills from "./skills";

const Home = () => {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Skills/>
      <FeaturedProjects/>
      <Experience />
      <Education/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
