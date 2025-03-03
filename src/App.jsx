import React from "react";
import Navbar from "./Navbar";
import GradientBackground from "./GradientBackground";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Projects from "./Projects";
import ExperienceSection from "./ExperienceSection";
import PhotographySection from "./PhotographySection";
import Footer from "./Footer";

const App = () => {
  return (
    <GradientBackground>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Photography Section */}
        <PhotographySection />

        {/* Footer */}
        <Footer />
      </main>
    </GradientBackground>
  );
};

export default App;