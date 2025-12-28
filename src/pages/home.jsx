import Header from "../components/header";
import About from "./about";
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
    </>
  );
};

export default Home;
