import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Education } from './components/Education'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { useEffect } from 'react';




const App = () => {
  function ScrollToSection() {
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  
    return null;
  }
  return (
    <div className='container mx-auto'>
      <BrowserRouter>
      <ScrollToSection />
      <Navbar></Navbar>
      <Routes>
      <Route path="*" element={
          <div>
            <section id="about"><Hero></Hero></section>
            <section id="skills"><Skills></Skills></section>
            <section id="experience"><Experience></Experience></section>
            <section id="projects"><Projects></Projects></section>
            <section id="education"><Education></Education></section>
            <section id="contact"><Contact></Contact></section>        
          </div>
        } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App