import React from 'react'
import Hero from './Hero'
import About from './About'

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div id='home-hero-section' className="flex-grow">
          <Hero />
      </div>
      <div id='home-about-section' className="flex-grow">
          <About />
      </div>
    </div>
  )
}

export default HomePage;