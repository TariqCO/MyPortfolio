import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt,
  FaNodeJs, FaGitAlt, FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss, SiFramer, SiMongodb,
  SiExpress, SiPostman, SiTypescript,
  SiMysql, SiJsonwebtokens, SiDocker,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    tag: "What users see",
    color: "#009087",
    skills: [
      { name: "React.js",       level: 90, icon: <FaReact />,      iconColor: "#61DAFB" },
      { name: "JavaScript",     level: 85, icon: <FaJs />,         iconColor: "#F7DF1E" },
      { name: "TypeScript",     level: 72, icon: <SiTypescript />, iconColor: "#3178C6" },
      { name: "Tailwind CSS",   level: 90, icon: <SiTailwindcss />,iconColor: "#38BDF8" },
      { name: "HTML & CSS",     level: 95, icon: <FaHtml5 />,      iconColor: "#E44D26" },
      { name: "Framer Motion",  level: 80, icon: <SiFramer />,     iconColor: "#B06BF7" },
    ],
  },
  {
    title: "Backend",
    tag: "What powers it",
    color: "#009087",
    skills: [
      { name: "Node.js",    level: 75, icon: <FaNodeJs />,  iconColor: "#68A063" },
      { name: "Express.js", level: 78, icon: <SiExpress />, iconColor: "#888888" },
      { name: "Python",     level: 70, icon: <FaPython />,  iconColor: "#3776AB" },
      { name: "MongoDB",    level: 72, icon: <SiMongodb />, iconColor: "#47A248" },
      { name: "MySQL",      level: 65, icon: <SiMysql />,   iconColor: "#00758F" },
      { name: "REST APIs",  level: 80, icon: <FaCss3Alt />, iconColor: "#009087" },
    ],
  },
  {
    title: "Tools & Auth",
    tag: "How I work",
    color: "#009087",
    skills: [
      { name: "Git & GitHub", level: 85, icon: <FaGitAlt />,        iconColor: "#F05032" },
      { name: "JWT & RBAC",   level: 80, icon: <SiJsonwebtokens />, iconColor: "#D63AFF" },
      { name: "Postman",      level: 75, icon: <SiPostman />,       iconColor: "#FF6C37" },
      { name: "Docker",       level: 40, icon: <SiDocker />,        iconColor: "#2496ED" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 },
  }),
};

const SkillsSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        .skills-section { font-family: 'DM Sans', sans-serif; }
        .skills-heading { font-family: 'Instrument Serif', serif; }

        .skill-card {
          background: white;
          border: 1px solid #f0f0f0;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #006f68, #009087, #00b3a4);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .skill-card:hover {
          box-shadow: 0 20px 50px rgba(0,144,135,0.12);
          border-color: rgba(0,144,135,0.2);
          transform: translateY(-6px);
        }
        .skill-card:hover::before { opacity: 1; }

        .card-tag {
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #009087;
          margin-bottom: 6px;
          display: block;
        }

        .card-title {
          font-family: 'Instrument Serif', serif;
          font-size: 1.6rem;
          color: #111;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .skill-row {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .skill-item { position: relative; }

        .skill-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 7px;
        }

        .skill-left {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .skill-icon-wrap {
          width: 30px; height: 30px;
          border-radius: 8px;
          background: #f9fafb;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
          border: 1px solid #f0f0f0;
          transition: background 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }
        .skill-item:hover .skill-icon-wrap {
          background: #f0fdfb;
          transform: scale(1.08);
        }

        .skill-name {
          font-size: 0.83rem;
          font-weight: 500;
          color: #374151;
        }

        .skill-pct {
          font-size: 0.72rem;
          font-weight: 600;
          color: #9ca3af;
        }

        .bar-track {
          width: 100%;
          height: 5px;
          background: #f3f4f6;
          border-radius: 99px;
          overflow: hidden;
        }

        .learning-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #009087;
          background: rgba(0,144,135,0.08);
          border-radius: 99px;
          padding: 2px 8px;
          margin-left: 6px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #009087;
          margin-bottom: 10px;
        }
        .section-tag::before {
          content: '';
          display: inline-block;
          width: 20px; height: 1.5px;
          background: #009087;
          margin-right: 8px;
        }

        .grid-bg-skills {
          background-image:
            linear-gradient(rgba(0,144,135,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,144,135,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <section
        id="skills"
        className="skills-section grid-bg-skills w-full px-6 py-24 bg-gradient-to-b from-white to-gray-50 text-gray-900 flex justify-center"
      >
        <div className="max-w-6xl w-full">

          {/* ── Heading ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.span custom={0} variants={fadeUp} className="section-tag">
              What I Work With
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="skills-heading text-4xl md:text-5xl font-normal text-gray-900 leading-tight mb-4"
            >
              My <span className="italic" style={{ color: "#009087" }}>Skills</span>
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-gray-500 max-w-lg text-sm md:text-base leading-relaxed"
            >
              From pixel-perfect UIs to secure REST APIs and AI integrations —
              here's the stack I use to turn ideas into real products.
            </motion.p>
          </motion.div>

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {skillsData.map((group, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="skill-card"
              >
                <span className="card-tag">{group.tag}</span>
                <div className="card-title">{group.title}</div>

                <div className="skill-row">
                  {group.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="skill-item"
                      onMouseEnter={() => setHovered(`${index}-${i}`)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div className="skill-meta">
                        <div className="skill-left">
                          <div className="skill-icon-wrap" style={{ color: skill.iconColor }}>
                            {skill.icon}
                          </div>
                          <span className="skill-name">
                            {skill.name}
                            {skill.level < 50 && (
                              <span className="learning-badge">Learning</span>
                            )}
                          </span>
                        </div>
                        <span className="skill-pct">{skill.level}%</span>
                      </div>

                      <div className="bar-track">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: i * 0.08 }}
                          style={{
                            height: "100%",
                            borderRadius: 99,
                            background: hovered === `${index}-${i}`
                              ? "linear-gradient(90deg, #006f68, #009087, #00d4c8)"
                              : "linear-gradient(90deg, #006f68, #009087, #00b3a4)",
                            transition: "background 0.3s ease",
                          }}
                        />
                      </div>
                    </div>
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

export default SkillsSection;