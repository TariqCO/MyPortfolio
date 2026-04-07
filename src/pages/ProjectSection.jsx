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
    accent: "#00b8ac",
    accentDark: "#00635d",
  },
  {
    title: "Wedding Invitation Site",
    tag: "Freelance · Client Work",
    description:
      "Custom wedding website with RSVP form that sends responses to WhatsApp and saves to Google Sheets. Mobile-first, animated, and delivered end-to-end for a real client.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Google Sheets API"],
    image: "/images/wedding.PNG",
    github: "https://github.com/TariqCO/wedding",
    link: "https://wedding-eight-wheat-48.vercel.app/",
    highlights: ["WhatsApp RSVP integration", "Google Sheets sync", "Mobile-first layout"],
    accent: "#d4a853",
    accentDark: "#8a6520",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 },
  }),
};

export default function ProjectsSection() {
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 480, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .ps-root { font-family: 'DM Sans', sans-serif; }
        .ps-serif { font-family: 'Instrument Serif', serif; }

        /* ── Section tag ── */
        .ps-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.14em;
          color: #009087;
        }
        .ps-tag::before {
          content: '';
          width: 28px; height: 1.5px;
          background: currentColor;
          display: block;
        }

        /* ── Scroll buttons ── */
        .ps-scroll-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #374151;
          transition: all 0.25s ease;
        }
        .ps-scroll-btn:hover {
          border-color: #009087;
          background: #f0fafa;
          color: #009087;
          transform: scale(1.07);
          box-shadow: 0 4px 16px rgba(0,144,135,0.18);
        }

        /* ── Card shell ── */
        .ps-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          height: 480px;
          background: #111;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.06),
            0 12px 32px rgba(0,0,0,0.14);
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.45s cubic-bezier(0.22,1,0.36,1);
          cursor: pointer;
        }
        .ps-card:hover {
          transform: translateY(-6px) scale(1.005);
          box-shadow:
            0 4px 8px rgba(0,0,0,0.08),
            0 32px 80px rgba(0,0,0,0.28);
        }

        /* ── Image ── */
        .ps-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .ps-card:hover .ps-img { transform: scale(1.07); }

        /* ── Gradient overlay ── */
        .ps-overlay {
          position: absolute; inset: 0;
          transition: opacity 0.4s ease;
        }

        /* ── Top strip: tag + links ── */
        .ps-top {
          position: absolute; top: 0; left: 0; right: 0;
          padding: 20px 20px 0;
          display: flex; justify-content: space-between; align-items: flex-start;
          z-index: 10;
        }

        .ps-pill {
          font-size: 0.62rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.1em;
          padding: 5px 12px; border-radius: 99px;
          backdrop-filter: blur(10px);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(0,0,0,0.35);
        }

        .ps-links { display: flex; gap: 8px; }

        .ps-icon-btn {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          transition: all 0.22s ease;
          cursor: pointer;
        }
        .ps-icon-btn:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.5);
          color: #fff;
          transform: scale(1.12);
        }

        /* ── Bottom content ── */
        .ps-content {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 28px 26px 26px;
          z-index: 10;
        }

        .ps-number {
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 8px;
        }

        .ps-title {
          font-family: 'Instrument Serif', serif;
          font-size: 1.5rem; line-height: 1.15;
          color: #fff; margin-bottom: 10px;
          font-weight: 400;
        }

        .ps-desc {
          font-size: 0.78rem; line-height: 1.7;
          color: rgba(255,255,255,0.62);
          margin-bottom: 16px;
          max-height: 0; overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.22,1,0.36,1),
                      opacity 0.35s ease,
                      margin 0.35s ease;
          opacity: 0;
        }
        .ps-card:hover .ps-desc {
          max-height: 120px; opacity: 1;
        }

        .ps-highlights {
          display: flex; flex-wrap: wrap; gap: 5px;
          margin-bottom: 14px;
          transform: translateY(6px); opacity: 0;
          transition: opacity 0.35s 0.05s ease, transform 0.35s 0.05s ease;
        }
        .ps-card:hover .ps-highlights { opacity: 1; transform: translateY(0); }

        .ps-highlight {
          font-size: 0.62rem; font-weight: 500;
          padding: 3px 10px; border-radius: 99px;
          backdrop-filter: blur(6px);
          color: rgba(255,255,255,0.88);
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.08);
        }

        /* ── Divider ── */
        .ps-divider {
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin-bottom: 12px;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .ps-card:hover .ps-divider { transform: scaleX(1); }

        /* ── Tech tags ── */
        .ps-techs { display: flex; flex-wrap: wrap; gap: 5px; }
        .ps-tech {
          font-size: 0.62rem; font-weight: 400;
          padding: 3px 9px; border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.65);
          backdrop-filter: blur(4px);
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .ps-card:hover .ps-tech {
          border-color: rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.11);
          color: rgba(255,255,255,0.85);
        }

        /* ── Live badge ── */
        .ps-live {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.6rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: #4ade80;
        }
        .ps-live-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4ade80;
          animation: ps-pulse 1.8s ease infinite;
        }
        @keyframes ps-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.8); }
        }

        /* ── Scrollbar hide ── */
        .ps-scroll::-webkit-scrollbar { display: none; }
        .ps-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        /* ── Subtle grid bg ── */
        .ps-section {
          background:
            linear-gradient(rgba(0,144,135,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,144,135,0.025) 1px, transparent 1px),
            #ffffff;
          background-size: 44px 44px;
        }
      `}</style>

      <section id="projects" className="ps-root ps-section w-full py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* ── Header ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          >
            <div>
              <motion.span custom={0} variants={fadeUp} className="ps-tag block mb-3">
                What I've Built
              </motion.span>
              <motion.h2
                custom={1} variants={fadeUp}
                className="ps-serif text-4xl md:text-5xl font-normal text-gray-900 leading-tight mb-3"
              >
                Selected{" "}
                <em style={{ color: "#009087" }}>Work</em>
              </motion.h2>
              <motion.p
                custom={2} variants={fadeUp}
                className="text-gray-400 max-w-md text-sm leading-relaxed"
              >
                Projects I've shipped while exploring, building, and pushing
                what I know — from AI tools to client work.
              </motion.p>
            </div>

            <motion.div custom={3} variants={fadeUp} className="flex items-center gap-3 shrink-0">
              <span className="text-xs text-gray-400 font-medium mr-1">
                {projects.length} projects
              </span>
              <button className="ps-scroll-btn" onClick={() => scroll(-1)}>
                <ChevronLeft size={16} />
              </button>
              <button className="ps-scroll-btn" onClick={() => scroll(1)}>
                <ChevronRight size={16} />
              </button>
            </motion.div>
          </motion.div>

          {/* ── Cards ── */}
          <div
            ref={scrollRef}
            className="ps-scroll flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 touch-pan-x"
          >
            {projects.map((p, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="snap-start shrink-0 w-[88%] sm:w-[70%] md:w-[54%] lg:w-[44%]"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="ps-card">

                  {/* Image */}
                  <img src={p.image} alt={p.title} className="ps-img" />

                  {/* Gradient overlay — two layers: base + accent tint */}
                  <div
                    className="ps-overlay"
                    style={{
                      background: `linear-gradient(
                        170deg,
                        rgba(0,0,0,0.08) 0%,
                        rgba(0,0,0,0.3) 38%,
                        rgba(0,0,0,0.82) 72%,
                        rgba(0,0,0,0.95) 100%
                      )`,
                    }}
                  />
                  {/* Accent color wash on hover */}
                  <div
                    className="ps-overlay"
                    style={{
                      background: `radial-gradient(ellipse at 50% 100%, ${p.accent}22 0%, transparent 70%)`,
                      opacity: hovered === i ? 1 : 0,
                      transition: "opacity 0.4s ease",
                    }}
                  />

                  {/* Top strip */}
                  <div className="ps-top">
                    <span className="ps-pill">{p.tag}</span>
                    <div className="ps-links">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ps-icon-btn"
                          onClick={(e) => e.stopPropagation()}
                          title="View on GitHub"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ps-icon-btn"
                        onClick={(e) => e.stopPropagation()}
                        title="View live site"
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="ps-content">
                    {/* Live badge */}
                    <div className="ps-live mb-2">
                      <span className="ps-live-dot" />
                      Live
                    </div>

                    {/* Index */}
                    <div className="ps-number">Project {String(i + 1).padStart(2, "0")}</div>

                    {/* Title */}
                    <h3 className="ps-title">{p.title}</h3>

                    {/* Description — reveal on hover */}
                    <p className="ps-desc">{p.description}</p>

                    {/* Highlights */}
                    <div className="ps-highlights">
                      {p.highlights.map((h, j) => (
                        <span key={j} className="ps-highlight"
                          style={{ borderColor: `${p.accent}44`, background: `${p.accent}18` }}
                        >
                          ✦ {h}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="ps-divider" style={{ background: `${p.accent}44` }} />

                    {/* Tech + CTA row */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="ps-techs">
                        {p.tech.map((t, j) => (
                          <span key={j} className="ps-tech">{t}</span>
                        ))}
                      </div>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 5,
                          fontSize: "0.65rem", fontWeight: 600,
                          letterSpacing: "0.08em", textTransform: "uppercase",
                          color: p.accent, textDecoration: "none",
                          whiteSpace: "nowrap",
                          opacity: hovered === i ? 1 : 0,
                          transform: hovered === i ? "translateX(0)" : "translateX(6px)",
                          transition: "opacity 0.3s ease, transform 0.3s ease",
                        }}
                      >
                        Visit <ArrowUpRight size={11} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* End CTA card */}
            <motion.div
              custom={projects.length}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="snap-start shrink-0 w-[88%] sm:w-[70%] md:w-[54%] lg:w-[44%]"
            >
              <div
                className="ps-card flex flex-col items-center justify-center text-center gap-4"
                style={{
                  background: "linear-gradient(135deg, #0a1a1a 0%, #001f1e 100%)",
                  border: "1.5px dashed rgba(0,184,172,0.25)",
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  border: "1.5px solid rgba(0,184,172,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#009087",
                }}>
                  <Github size={22} />
                </div>
                <div>
                  <p className="ps-serif" style={{ fontSize: "1.3rem", color: "#fff", marginBottom: 8 }}>
                    More on GitHub
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 220 }}>
                    Explore all my repositories and open-source contributions.
                  </p>
                </div>
                <a
                  href="https://github.com/TariqCO"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "10px 24px", borderRadius: 99,
                    background: "rgba(0,184,172,0.12)",
                    border: "1px solid rgba(0,184,172,0.3)",
                    color: "#00b8ac", fontSize: "0.72rem",
                    fontWeight: 600, letterSpacing: "0.1em",
                    textTransform: "uppercase", textDecoration: "none",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,184,172,0.2)"; e.currentTarget.style.borderColor = "rgba(0,184,172,0.5)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,184,172,0.12)"; e.currentTarget.style.borderColor = "rgba(0,184,172,0.3)"; }}
                >
                  View GitHub <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Dot indicators ── */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, i) => (
              <div
                key={i}
                style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: hovered === i ? "#009087" : "#d1d5db",
                  transition: "background 0.3s, transform 0.3s",
                  transform: hovered === i ? "scale(1.4)" : "scale(1)",
                }}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}