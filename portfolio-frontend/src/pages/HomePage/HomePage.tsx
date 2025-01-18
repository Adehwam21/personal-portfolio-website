import React from 'react'
import Hero from './Hero'
import About from './About'

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-0 min-h-screen relative">
      <div id='home-hero-section'>
          <Hero />
      </div>
      <div id='home-about-section'>
          <About />
      </div>
    </div>
  )
}

export default HomePage;