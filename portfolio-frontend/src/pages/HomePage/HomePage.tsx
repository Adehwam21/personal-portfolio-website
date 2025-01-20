import React from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import ScrollToTopBtn from '../../components/ScrollToTop'
import Footer from '../../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-0 min-h-screen relative">
      <div id='home-hero-section'>
          <Hero />
      </div>
      <div id='home-about-section'>
          <About />
      </div>
      <div id='home-projects-section'>
          <Projects />
      </div>
      <div id='home-contact-section'>
          <Contact />
      </div>
      <div id='home-contact-section'>
          <Footer />
      </div>
        <ScrollToTopBtn />
    </div>
  )
}

export default HomePage;