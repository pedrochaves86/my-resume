import './App.scss'
import Header from './components/Header'
import AboutSection from './components/sections/About'
import EducationSection from './components/sections/Education'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <Header />
      <section id='about'>
        <AboutSection />
      </section>
      <section id='education'>
        <EducationSection />
      </section>
      <section id='experience'>experience</section>
      <section id='contacts'>contacts</section>
    </div>
  )
}

export default App
