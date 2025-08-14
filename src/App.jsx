import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Contact from "./components/Contact";
import { Education } from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Particles from "./components/Particles";

const App = () => {
  // scrolling function
  function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

    return null;
  }

  //

  return (
    <div>
      <>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <BrowserRouter>
        <ScrollToSection />
        <Navbar></Navbar>
        <Routes>
          <Route
            path="*"
            element={
              <div>
                <section id="about">
                  <Hero></Hero>
                </section>
                <section id="skills">
                  <Skills></Skills>
                </section>
                <section id="experience">
                  <Experience></Experience>
                </section>
                <section id="projects">
                  <Projects></Projects>
                </section>
                <section id="education">
                  <Education></Education>
                </section>
                <section id="contact">
                  <Contact></Contact>
                </section>
              </div>
            }
          />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </>

      
    </div>
  );
};

export default App;
