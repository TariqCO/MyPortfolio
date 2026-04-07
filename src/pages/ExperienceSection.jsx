import React, { useState } from "react";
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
    accent: "#009087",
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
    accent: "#009087",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 },
  }),
};

const ExperienceSection = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        .exp-section { font-family: 'DM Sans', sans-serif; }
        .exp-heading { font-family: 'Instrument Serif', serif; }

        .section-tag {
          display: inline-flex; align-items: center;
          font-size: 0.72rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: #009087; margin-bottom: 10px;
        }
        .section-tag::before {
          content: '';
          display: inline-block;
          width: 20px; height: 1.5px;
          background: #009087; margin-right: 8px;
        }

        .timeline-line {
          position: absolute;
          left: 19px; top: 0; bottom: 0;
          width: 1.5px;
          background: linear-gradient(to bottom, #009087 0%, #e5e7eb 100%);
        }

        .timeline-dot-outer {
          position: absolute;
          left: -41px;
          top: 28px;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: white;
          border: 2px solid #009087;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 0 4px rgba(0,144,135,0.1);
          z-index: 2;
          transition: box-shadow 0.3s ease;
        }
        .timeline-dot-inner {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #009087;
        }
        .exp-card:hover .timeline-dot-outer {
          box-shadow: 0 0 0 7px rgba(0,144,135,0.15);
        }

        .exp-card {
          background: white;
          border: 1px solid #f0f0f0;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #006f68, #009087, #00b3a4);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .exp-card:hover {
          box-shadow: 0 20px 50px rgba(0,144,135,0.1);
          border-color: rgba(0,144,135,0.18);
          transform: translateY(-4px);
        }
        .exp-card:hover::before { opacity: 1; }

        .exp-role {
          font-family: 'Instrument Serif', serif;
          font-size: 1.35rem;
          color: #111;
        }

        .exp-company {
          font-size: 0.875rem;
          font-weight: 600;
          color: #009087;
        }

        .exp-meta {
          display: flex; align-items: center; gap: 10px;
          flex-wrap: wrap;
          margin-top: 4px; margin-bottom: 14px;
        }

        .exp-type {
          font-size: 0.7rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: #9ca3af;
        }

        .exp-duration {
          font-size: 0.7rem; font-weight: 500;
          background: rgba(0,144,135,0.08);
          color: #009087;
          border-radius: 99px;
          padding: 2px 10px;
        }

        .exp-desc {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 18px;
        }
        .highlight-item {
          display: flex; align-items: flex-start; gap: 7px;
          font-size: 0.78rem; color: #374151;
          line-height: 1.4;
        }
        .highlight-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #009087; flex-shrink: 0; margin-top: 5px;
        }

        .skill-tag {
          padding: 3px 11px;
          font-size: 0.7rem; font-weight: 500;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 99px;
          color: #374151;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .skill-tag:hover {
          background: rgba(0,144,135,0.07);
          border-color: rgba(0,144,135,0.25);
          color: #009087;
        }

        .toggle-btn {
          font-size: 0.75rem; font-weight: 500;
          color: #009087;
          background: none; border: none; cursor: pointer;
          padding: 0; margin-top: 10px;
          display: inline-flex; align-items: center; gap: 4px;
          transition: gap 0.2s ease;
        }
        .toggle-btn:hover { gap: 8px; }

        .grid-bg-exp {
          background-image:
            linear-gradient(rgba(0,144,135,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,144,135,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <section
        id="experience"
        className="exp-section grid-bg-exp w-full px-6 py-24 bg-gray-50 text-gray-900 flex justify-center"
      >
        <div className="max-w-4xl w-full">

          {/* ── Heading ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <motion.span custom={0} variants={fadeUp} className="section-tag" style={{ justifyContent: "center" }}>
              Where I've Worked
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="exp-heading text-4xl md:text-5xl font-normal text-gray-900 leading-tight mb-4"
            >
              My <span className="italic" style={{ color: "#009087" }}>Experience</span>
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-gray-500 max-w-lg mx-auto text-sm md:text-base leading-relaxed"
            >
              From shipping production features at a software house to delivering
              client projects independently — here's where I've put my skills to work.
            </motion.p>
          </motion.div>

          {/* ── Timeline ── */}
          <div className="relative pl-14">
            <div className="timeline-line" />

            <div className="space-y-10">
              {experienceList.map((exp, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative exp-card"
                >
                  {/* Timeline dot */}
                  <div className="timeline-dot-outer">
                    <div className="timeline-dot-inner" />
                  </div>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-duration shrink-0">{exp.duration}</span>
                  </div>

                  <div className="exp-meta">
                    <span className="exp-company">{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                    <span className="exp-type">{exp.type}</span>
                  </div>

                  {/* Description */}
                  <p className="exp-desc">{exp.description}</p>

                  {/* Highlights */}
                  <div className="highlights-grid">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="highlight-item">
                        <span className="highlight-dot" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ExperienceSection;