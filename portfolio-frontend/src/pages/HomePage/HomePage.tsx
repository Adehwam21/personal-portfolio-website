import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-0 min-h-screen relative">
      <div id="home-hero-section">
        <Hero />
      </div>
      <div id="home-about-section">
        <About />
      </div>
      <div id="home-projects-section">
        <Projects />
      </div>
      <div id="home-contact-section">
        <Contact />
      </div>
      
    </div>
  );
};

export default HomePage;
