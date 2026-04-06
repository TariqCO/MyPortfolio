import React, { useEffect, useRef } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const HeroSection = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 160}px, ${e.clientY - 160}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes softPulse {
          0%, 100% { opacity: 0.18; }
          50%       { opacity: 0.28; }
        }
        @keyframes cursorMove {
          to { opacity: 1; }
        }
        @keyframes badgePop {
          from { opacity: 0; transform: scale(0.85) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }

        .hero-section { font-family: 'DM Sans', sans-serif; }

        .hero-heading {
          font-family: 'Instrument Serif', serif;
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.1s both;
        }
        .hero-sub {
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.25s both;
        }
        .hero-desc {
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.4s both;
        }
        .hero-buttons {
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.55s both;
        }
        .hero-icons {
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.7s both;
        }
        .hero-badge {
          animation: badgePop 0.6s cubic-bezier(.34,1.56,.64,1) 0.9s both;
        }

        .orb-1 {
          animation: floatOrb 7s ease-in-out infinite, softPulse 7s ease-in-out infinite;
        }
        .orb-2 {
          animation: floatOrb 9s ease-in-out 1.5s infinite, softPulse 9s ease-in-out 1s infinite;
        }
        .orb-3 {
          animation: floatOrb 11s ease-in-out 3s infinite;
        }

        .cursor-glow {
          pointer-events: none;
          position: fixed;
          top: 0; left: 0;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,144,135,0.10) 0%, transparent 70%);
          transition: transform 0.18s ease;
          z-index: 0;
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
        .btn-primary:hover::after { opacity: 1; animation: shimmer 0.6s linear; }
        .btn-primary:active { transform: translateY(0); }

        .btn-secondary {
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }
        .btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          background: #f9fafb;
        }
        .btn-secondary:active { transform: translateY(0); }

        .social-icon {
          transition: color 0.2s, transform 0.2s;
        }
        .social-icon:hover {
          color: #009087;
          animation: iconFloat 0.6s ease;
        }

        .teal-name {
          background: linear-gradient(135deg, #009087 0%, #00b8ac 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .divider-dot {
          display: inline-block;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #d1d5db;
          margin: 0 10px;
          vertical-align: middle;
        }

        .status-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #009087;
          display: inline-block;
          animation: softPulse 2s ease-in-out infinite;
          box-shadow: 0 0 0 2px rgba(0,144,135,0.2);
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(0,144,135,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,144,135,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <section
        id="hero"
        className="hero-section relative flex flex-col justify-center items-center min-h-screen w-full overflow-hidden bg-gray-50 grid-bg"
      >
        {/* Cursor glow */}
        <div ref={cursorRef} className="cursor-glow" />

        {/* Orbs */}
        <div className="orb-1 absolute top-[10%] left-[8%] w-72 h-72 rounded-full bg-[#009087]/10 blur-3xl z-0" />
        <div className="orb-2 absolute bottom-[12%] right-[6%] w-80 h-80 rounded-full bg-[#009087]/08 blur-3xl z-0" />
        <div className="orb-3 absolute top-[55%] left-[50%] w-48 h-48 rounded-full bg-gray-300/30 blur-2xl z-0 -translate-x-1/2" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl px-6 pt-8 pb-16">
          {/* Availability badge */}
          <div className="hero-badge inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-medium text-gray-500">
            <span className="status-dot" />
            Available for opportunities
          </div>

          {/* Main heading */}
          <h1 className="hero-heading text-5xl md:text-6xl font-normal text-gray-900 leading-tight">
            Hey there! I'm <span className="teal-name italic">Tariq</span>
          </h1>

          {/* Subheading */}
          <div className="hero-sub flex items-center justify-center gap-1 mt-4 text-sm text-gray-400 font-medium tracking-wide uppercase">
            <span>Full-Stack Developer</span>
            <span className="divider-dot" />
            <span>MERN Stack</span>
            <span className="divider-dot" />
            <span>AI Enthusiast</span>
          </div>

          {/* Description */}
          <p className="hero-desc text-gray-600 mt-7 leading-relaxed text-base md:text-lg max-w-xl mx-auto">
            In the era of AI, I focus on{" "}
            <span className="text-gray-800 font-medium">
              sharpening core engineering skills
            </span>{" "}
            — building scalable web apps while{" "}
            <span className="text-gray-800 font-medium">
              leveraging AI tools
            </span>{" "}
            to ship faster and better.
          </p>

          {/* Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-3 mt-10 justify-center">
            <a href="#contact">
              <button className="btn-primary px-8 py-3 bg-[#009087] text-white rounded-full text-sm font-medium shadow-md">
                Get In Touch
              </button>
            </a>
            <a href="#projects">
              <button className="btn-secondary px-8 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                View My Work
              </button>
            </a>
          </div>

          {/* Social icons */}
          <div className="hero-icons flex gap-7 mt-10 text-gray-400 text-xl justify-center">
            <a
              href="https://github.com/TariqCO"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tariq-1712tr"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=tariq.official1712@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
