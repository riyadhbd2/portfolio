import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Contact from "./components/Contact";
import { Education } from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

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
    </div>
  );
};

export default App;
