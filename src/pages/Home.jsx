import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import ChatBot from "../components/ChatBot";
import SkillsSection from "./SkillsSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <ChatBot />
      </div>
    </>
  );
};

export default Home;
