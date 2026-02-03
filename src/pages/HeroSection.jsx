import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail, } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center min-h-screen w-full overflow-hidden bg-gray-50"
    >
  
      {/* Optional overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-50/50 z-0"></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center max-w-2xl px-6 pt-15">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-md">
          Hey there! I’m <span className="text-[#009087]">Tariq</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-xl md:text-2xl text-gray-600 mt-3 drop-shadow-sm">
          Web Developer & AI Enthusiast
        </h2>

        {/* Description */}
        <p className="text-gray-700 mt-6 leading-relaxed text-base md:text-lg drop-shadow-sm">
          I’m a Web Developer with a passion for{" "}
          <span className="font-medium">learning new technologies</span> and
          building{" "}
          <span className="font-medium">
            clean, responsive, and scalable web applications
          </span>
          . I love integrating{" "}
          <span className="font-medium">AI-powered features</span> to create
          smarter digital experiences.
          <span className="block mt-2 text-gray-500 italic text-sm">
            ~ ChatGPT
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <a href="#contact">
            <button className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-zinc-900 shadow-lg transition">
              Get In Touch
            </button>
          </a>
          <a href="#projects">
            <button className="px-8 py-3 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 shadow-lg transition">
              View My Work
            </button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-10 text-gray-700 text-2xl justify-center">
          <a
            href="https://github.com/TariqCO"
            target="_blank"
            className="hover:text-zinc-900 transition transform hover:scale-110"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tariq-1712tr"
            target="_blank"
            className="hover:text-zinc-900 transition transform hover:scale-110"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=tariq.official1712@gmail.com"
            target="_blank"
            className="hover:text-zinc-900 transition transform hover:scale-110"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
