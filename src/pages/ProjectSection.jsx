import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

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
        .pr-more-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.82rem; font-weight: 500;
          color: var(--ink);
        }
        .pr-more-link:hover { color: var(--blue); }
      `}</style>

      <section id="projects" className="pr-root w-full px-6 py-24 flex justify-center">
        <div className="max-w-4xl w-full">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="pr-endpoint pr-mono"
          >
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
        </div>
      </section>
    </>
  );
}
