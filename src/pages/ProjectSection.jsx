import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

<<<<<<< HEAD
const projects = [
  {
    title: "Crypto Prediction Platform",
    tag: "AI · Full-Stack",
    description:
      "Full-stack app for predicting cryptocurrency price movements with real-time result validation and Gemini AI-generated plain-language market summaries.",
    tech: ["React", "Node.js", "MongoDB", "Gemini AI", "JWT"],
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
    github: "https://github.com/TariqCO/wedding",
    link: "https://wedding-eight-wheat-48.vercel.app/",
    highlights: ["WhatsApp RSVP integration", "Google Sheets sync", "Mobile-first layout"],
  },
];
=======
// Projects temporarily removed — add entries back here when ready
const projects = [];
>>>>>>> 5fd0e0e667ae2b31f219414f99110608681a4354

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function ProjectsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .pr-root {
          --paper: #FAFAF9; --surface: #FFFFFF; --ink: #14161A;
          --ink-2: #6B7178; --ink-3: #9BA0A6; --line: #E4E4E1;
          --blue: #2F6FED; --blue-soft: rgba(47,111,237,0.07);
          --green: #16A34A;
          font-family: 'Inter', sans-serif;
          background: var(--paper);
          color: var(--ink);
        }
        .pr-mono { font-family: 'JetBrains Mono', monospace; }
        .pr-display { font-family: 'Space Grotesk', sans-serif; }

        .pr-endpoint {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.78rem;
          padding-bottom: 16px;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }
        .pr-badge {
          font-size: 0.68rem; font-weight: 600;
          padding: 2px 7px; border-radius: 3px;
          background: var(--blue-soft); color: var(--blue);
        }
        .pr-status { margin-left: auto; font-size: 0.7rem; color: var(--ink-3); }

        .pr-list {
          border: 1px solid var(--line);
          border-radius: 8px;
          overflow: hidden;
          background: var(--surface);
        }

        .pr-row {
          display: block;
          padding: 24px;
          border-bottom: 1px solid var(--line);
          text-decoration: none;
          color: inherit;
          transition: background 0.15s ease;
        }
        .pr-row:last-child { border-bottom: none; }
        .pr-row:hover { background: #FCFCFB; }

        .pr-row-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 8px; }

        .pr-title-line { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .pr-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 600; color: var(--ink); }
        .pr-tag {
          font-size: 0.66rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;
          padding: 2px 8px; border-radius: 99px;
          background: #F5F5F3; color: var(--ink-2);
        }

        .pr-live { display: inline-flex; align-items: center; gap: 5px; font-size: 0.68rem; font-weight: 600; color: var(--green); flex-shrink: 0; }
        @keyframes prPulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
        .pr-live-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); animation: prPulse 1.8s ease infinite; }

        .pr-desc { font-size: 0.85rem; color: var(--ink-2); line-height: 1.65; max-width: 640px; margin-bottom: 12px; }

        .pr-meta-row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
        .pr-techs { display: flex; flex-wrap: wrap; gap: 6px; }
        .pr-tech { font-size: 0.68rem; padding: 3px 9px; border-radius: 3px; background: #F5F5F3; color: var(--ink-2); }

        .pr-links { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
        .pr-link { display: inline-flex; align-items: center; gap: 4px; font-size: 0.72rem; font-weight: 600; color: var(--ink); text-decoration: none; }
        .pr-link:hover { color: var(--blue); }

        .pr-more {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 24px;
          background: #FCFCFB;
        }
<<<<<<< HEAD
        .pr-more-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.82rem; font-weight: 500;
          color: var(--ink);
        }
        .pr-more-link:hover { color: var(--blue); }
=======

        /* ── Empty state ── */
        .ps-empty {
          border-radius: 20px;
          border: 1.5px dashed #d1d5db;
          padding: 64px 24px;
          text-align: center;
          background: rgba(0,144,135,0.02);
        }
>>>>>>> 5fd0e0e667ae2b31f219414f99110608681a4354
      `}</style>

      <section id="projects" className="pr-root w-full px-6 py-24 flex justify-center">
        <div className="max-w-4xl w-full">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="pr-endpoint pr-mono"
          >
<<<<<<< HEAD
            <span className="pr-badge">GET</span>
            /projects
            <span className="pr-status">200 OK</span>
          </motion.div>

          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="pr-display text-4xl md:text-5xl font-semibold mb-3"
          >
            Selected work
          </motion.h2>
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[var(--ink-2)] max-w-lg text-sm md:text-base leading-relaxed mb-12"
          >
            A short list, not a portfolio dump — things I shipped and
            am willing to stand behind.
          </motion.p>

          <div className="pr-list">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i + 3}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              >
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="pr-row">
                  <div className="pr-row-top">
                    <div className="pr-title-line">
                      <span className="pr-title">{p.title}</span>
                      <span className="pr-tag pr-mono">{p.tag}</span>
                    </div>
                    <span className="pr-live"><span className="pr-live-dot" /> live</span>
                  </div>
                  <p className="pr-desc">{p.description}</p>
                  <div className="pr-meta-row">
                    <div className="pr-techs">
                      {p.tech.map((t) => (
                        <span key={t} className="pr-tech pr-mono">{t}</span>
                      ))}
                    </div>
                    <div className="pr-links">
                      {p.github && (
                        <a
                          href={p.github} target="_blank" rel="noopener noreferrer"
                          className="pr-link" onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={13} /> code
                        </a>
                      )}
                      <span className="pr-link">
                        visit <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}

            <div className="pr-more">
              <span className="pr-mono text-xs text-[var(--ink-3)]">
                showing {projects.length} of many
              </span>
              <a
                href="https://github.com/TariqCO"
                target="_blank" rel="noopener noreferrer"
                className="pr-more-link"
              >
                View all on GitHub <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
=======
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

            {projects.length > 0 && (
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
            )}
          </motion.div>

          {/* ── Empty state ── */}
          {projects.length === 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="ps-empty"
            >
              <p className="ps-serif" style={{ fontSize: "1.4rem", color: "#111827", marginBottom: 8 }}>
                Projects coming soon
              </p>
              <p className="text-sm text-gray-400 mb-6 max-w-sm mx-auto leading-relaxed">
                This section is being refreshed. In the meantime, check out my work on GitHub.
              </p>
              <a
                href="https://github.com/TariqCO"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 24px", borderRadius: 99,
                  background: "rgba(0,144,135,0.08)",
                  border: "1px solid rgba(0,144,135,0.25)",
                  color: "#009087", fontSize: "0.72rem",
                  fontWeight: 600, letterSpacing: "0.1em",
                  textTransform: "uppercase", textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                <Github size={14} /> View GitHub <ArrowUpRight size={13} />
              </a>
            </motion.div>
          )}

          {/* ── Cards ── */}
          {projects.length > 0 && (
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
          )}

          {/* ── Dot indicators ── */}
          {projects.length > 0 && (
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
          )}

>>>>>>> 5fd0e0e667ae2b31f219414f99110608681a4354
        </div>
      </section>
    </>
  );
}
