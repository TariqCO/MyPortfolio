import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";

const projects = [
  {
    title: "Crypto Prediction Platform",
    tag: "AI · Full-Stack",
    description:
      "Full-stack app for predicting cryptocurrency price movements with real-time result validation and Gemini AI-generated plain-language market summaries.",
    tech: ["React", "Node.js", "MongoDB", "Gemini AI", "JWT"],
    image: "/images/crypto1.PNG",
    github: "https://github.com/TariqCO/cryptoPrediction",
    link: "https://crypto-prediction-gew7.vercel.app/",
    highlights: ["Gemini AI summaries", "JWT + refresh token auth", "Real-time validation"],
  },
  {
    title: "Wedding Invitation Site",
    tag: "Freelance · Client Work",
    description:
      "Custom wedding website with RSVP form that sends responses to WhatsApp and saves to Google Sheets. Mobile-first, animated, and delivered end-to-end for a real client.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Google Sheets API"],
    image: "/images/wedding.PNG",
    github: "https://github.com/TariqCO/wedding",
    link: "https://wedding-git-main-tariqs-projects-b75217c0.vercel.app/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 },
  }),
};

export default function ProjectsSection() {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 460, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        .projects-section { font-family: 'DM Sans', sans-serif; }
        .projects-heading { font-family: 'Instrument Serif', serif; }

        .section-tag {
          display: inline-flex; align-items: center;
          font-size: 0.72rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: #009087;
        }
        .section-tag::before {
          content: '';
          display: inline-block;
          width: 20px; height: 1.5px;
          background: #009087; margin-right: 8px;
        }

        .scroll-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid #e5e7eb;
          background: white;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s;
          color: #374151;
        }
        .scroll-btn:hover {
          border-color: #009087;
          background: rgba(0,144,135,0.06);
          color: #009087;
          transform: scale(1.08);
          box-shadow: 0 4px 14px rgba(0,144,135,0.15);
        }

        .project-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          transition: box-shadow 0.4s ease, transform 0.4s ease;
        }
        .project-card:hover {
          box-shadow: 0 24px 60px rgba(0,0,0,0.22);
          transform: translateY(-4px);
        }

        .card-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .project-card:hover .card-img { transform: scale(1.06); }

        .card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.88) 0%,
            rgba(0,0,0,0.45) 50%,
            rgba(0,0,0,0.10) 100%
          );
          transition: background 0.4s ease;
        }
        .project-card:hover .card-overlay {
          background: linear-gradient(
            to top,
            rgba(0,20,19,0.92) 0%,
            rgba(0,80,75,0.35) 55%,
            rgba(0,0,0,0.08) 100%
          );
        }

        .card-content {
          position: relative; z-index: 10;
          height: 100%;
          padding: 28px;
          display: flex; flex-direction: column; justify-content: flex-end;
          color: white;
        }

        .card-tag-pill {
          position: absolute;
          top: 20px; left: 20px;
          font-size: 0.65rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.09em;
          background: rgba(0,144,135,0.75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0,184,172,0.4);
          border-radius: 99px;
          padding: 3px 11px;
          color: white;
          z-index: 10;
        }

        .card-links {
          position: absolute;
          top: 16px; right: 16px;
          display: flex; gap: 8px;
          z-index: 10;
        }

        .icon-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          color: white;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .icon-btn:hover {
          background: rgba(0,144,135,0.6);
          border-color: rgba(0,184,172,0.5);
          transform: scale(1.1);
        }

        .card-title {
          font-family: 'Instrument Serif', serif;
          font-size: 1.4rem;
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .card-desc {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.72);
          line-height: 1.65;
          margin-bottom: 14px;
          max-width: 400px;
        }

        .card-highlights {
          display: flex; flex-wrap: wrap; gap: 6px;
          margin-bottom: 12px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .project-card:hover .card-highlights {
          opacity: 1; transform: translateY(0);
        }
        .highlight-pill {
          font-size: 0.65rem; font-weight: 500;
          background: rgba(0,144,135,0.35);
          border: 1px solid rgba(0,184,172,0.3);
          border-radius: 99px;
          padding: 3px 10px;
          color: rgba(255,255,255,0.9);
          backdrop-filter: blur(6px);
        }

        .tech-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .tech-tag {
          padding: 3px 10px;
          font-size: 0.68rem; font-weight: 500;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 99px;
          color: rgba(255,255,255,0.8);
          backdrop-filter: blur(6px);
          transition: background 0.2s, border-color 0.2s;
        }
        .project-card:hover .tech-tag {
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.25);
        }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        .grid-bg-proj {
          background-image:
            linear-gradient(rgba(0,144,135,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,144,135,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <section
        id="projects"
        className="projects-section grid-bg-proj w-full py-24 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* ── Header ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          >
            <div>
              <motion.span custom={0} variants={fadeUp} className="section-tag block mb-2">
                What I've Built
              </motion.span>
              <motion.h2
                custom={1}
                variants={fadeUp}
                className="projects-heading text-4xl md:text-5xl font-normal text-gray-900 leading-tight mb-3"
              >
                Selected <span className="italic" style={{ color: "#009087" }}>Work</span>
              </motion.h2>
              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed"
              >
                Projects I've shipped while exploring, building, and pushing
                what I know — from AI tools to client work.
              </motion.p>
            </div>

            {/* Scroll controls */}
            <motion.div custom={3} variants={fadeUp} className="flex gap-2 shrink-0">
              <button className="scroll-btn" onClick={() => scroll(-1)}>
                <ChevronLeft size={17} />
              </button>
              <button className="scroll-btn" onClick={() => scroll(1)}>
                <ChevronRight size={17} />
              </button>
            </motion.div>
          </motion.div>

          {/* ── Scrollable row ── */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 touch-pan-x"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="snap-start shrink-0 w-[88%] sm:w-[68%] md:w-[52%] lg:w-[42%]"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="project-card" style={{ height: "460px" }}>
                  <img src={project.image} alt={project.title} className="card-img" />
                  <div className="card-overlay" />

                  {/* Top-left tag */}
                  <div className="card-tag-pill">{project.tag}</div>

                  {/* Top-right links */}
                  <div className="card-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-btn">
                        <Github size={16} />
                      </a>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-btn">
                      <ArrowUpRight size={16} />
                    </a>
                  </div>

                  {/* Bottom content */}
                  <div className="card-content">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-desc">{project.description}</p>

                    {/* Highlights — reveal on hover */}
                    <div className="card-highlights">
                      {project.highlights.map((h, j) => (
                        <span key={j} className="highlight-pill">✦ {h}</span>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="tech-tags">
                      {project.tech.map((tag, j) => (
                        <span key={j} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}