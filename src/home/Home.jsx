import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skillls from "./sections/Skills/Skillls";

function All() {
  return (
    <>
      <Hero />
      <Projects />
      <Skillls />
      <Contact />
      <Footer />
    </>
  );
}

export default All;
