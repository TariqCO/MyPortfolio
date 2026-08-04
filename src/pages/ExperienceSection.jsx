import React from "react";
import { motion } from "framer-motion";

const experienceList = [
  {
    role: "Web Developer Intern",
    company: "IWS Solutions",
    type: "Full-time · On-site",
    duration: "Feb 2024 – Jan 2025",
    description:
      "Contributed to production-level MERN applications across two major products. Built a Bulk Product Editor with import/export, inline editing, and bulk price/category updates. Also developed booking flows, admin dashboards, and secure auth for a Hotel Booking Web App.",
    highlights: [
      "Bulk Product Editor with CSV import/export",
      "Hotel Booking admin dashboard & auth flows",
      "Responsive UIs with ShadCN UI + Tailwind",
      "MySQL & RESTful API integration",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Tailwind CSS", "ShadCN UI", "JWT"],
  },
  {
    role: "Freelance Web Developer",
    company: "Independent",
    type: "Freelance · Remote",
    duration: "2023 – Present",
    description:
      "Designed and developed client-facing web products end-to-end. Delivered a custom Wedding Website with RSVP, event timeline, and photo gallery. Managed the full project lifecycle from requirements through post-launch support.",
    highlights: [
      "Custom Wedding Website — RSVP + gallery",
      "Mobile-first responsive layouts",
      "Full project lifecycle management",
      "Client iterations & post-launch support",
    ],
    skills: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const ExperienceSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .ex-root {
          --paper: #FAFAF9; --surface: #FFFFFF; --ink: #14161A;
          --ink-2: #6B7178; --ink-3: #9BA0A6; --line: #E4E4E1;
          --blue: #2F6FED; --blue-soft: rgba(47,111,237,0.07);
          font-family: 'Inter', sans-serif;
          background: var(--surface);
          color: var(--ink);
        }
        .ex-mono { font-family: 'JetBrains Mono', monospace; }
        .ex-display { font-family: 'Space Grotesk', sans-serif; }

        .ex-endpoint {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.78rem;
          padding-bottom: 16px;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }
        .ex-badge {
          font-size: 0.68rem; font-weight: 600;
          padding: 2px 7px; border-radius: 3px;
          background: var(--blue-soft); color: var(--blue);
        }
        .ex-status { margin-left: auto; font-size: 0.7rem; color: var(--ink-3); }

        .ex-log {
          border: 1px solid var(--line);
          border-radius: 8px;
          overflow: hidden;
        }
        .ex-entry {
          padding: 22px 22px;
          border-bottom: 1px solid var(--line);
          position: relative;
        }
        .ex-entry:last-child { border-bottom: none; }

        .ex-timestamp {
          font-size: 0.72rem; color: var(--blue);
          margin-bottom: 8px;
          display: flex; align-items: center; gap: 8px;
        }

        .ex-role { font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 600; color: var(--ink); }
        .ex-company { font-size: 0.82rem; color: var(--ink-2); margin-top: 2px; margin-bottom: 12px; }
        .ex-company b { color: var(--ink); font-weight: 600; }

        .ex-desc { font-size: 0.85rem; color: var(--ink-2); line-height: 1.7; margin-bottom: 14px; max-width: 640px; }

        .ex-highlight-line {
          font-size: 0.8rem; color: var(--ink-2);
          display: flex; align-items: flex-start; gap: 8px;
          line-height: 1.6;
        }
        .ex-highlight-line::before { content: '›'; color: var(--blue); font-weight: 600; }

        .ex-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
        .ex-tag {
          font-size: 0.68rem; font-weight: 500;
          padding: 3px 9px; border-radius: 3px;
          background: #F5F5F3; color: var(--ink-2);
        }
      `}</style>

      <section id="experience" className="ex-root w-full px-6 py-24 flex justify-center">
        <div className="max-w-4xl w-full">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="ex-endpoint ex-mono"
          >
            <span className="ex-badge">GET</span>
            /experience
            <span className="ex-status">200 OK</span>
          </motion.div>

          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="ex-display text-4xl md:text-5xl font-semibold mb-3"
          >
            Work log
          </motion.h2>
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[var(--ink-2)] max-w-lg text-sm md:text-base leading-relaxed mb-12"
          >
            Where I've shipped — from a production software house to
            client work I owned start to finish.
          </motion.p>

          <div className="ex-log">
            {experienceList.map((exp, i) => (
              <motion.div
                key={exp.role}
                custom={i + 3}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="ex-entry"
              >
                <div className="ex-timestamp ex-mono">
                  [{exp.duration}]
                </div>
                <h3 className="ex-role">{exp.role}</h3>
                <p className="ex-company">
                  <b>{exp.company}</b> · {exp.type}
                </p>
                <p className="ex-desc">{exp.description}</p>
                <div className="space-y-1.5 mb-1">
                  {exp.highlights.map((h) => (
                    <div key={h} className="ex-highlight-line">{h}</div>
                  ))}
                </div>
                <div className="ex-tags">
                  {exp.skills.map((s) => (
                    <span key={s} className="ex-tag ex-mono">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
