import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Process from "../components/Process";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import WhyUs from "../components/WhyUs";
import { navLinks } from "../data/siteData";

function Divider() {
  return (
    <div className="container-shell">
      <div className="section-divider" />
    </div>
  );
}

function Home({ theme, onToggleTheme }) {
  return (
    <>
      <Navbar links={navLinks} theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Services />
        <Divider />
        <Technologies />
        <Divider />
        <Projects />
        <Divider />
        <WhyUs />
        <Divider />
        <Process />
        <Divider />
        <Contact />
      </main>
      <Footer links={navLinks} />
    </>
  );
}

export default Home;
