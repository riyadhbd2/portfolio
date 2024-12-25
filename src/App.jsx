import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'

import Contact from './components/Contact'
import Footer from './components/Footer'
import { Education } from './components/Education'



const App = () => {
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App