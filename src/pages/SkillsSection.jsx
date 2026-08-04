import React from "react";
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
    title: "frontend",
    skills: [
      { name: "React.js", level: 90, icon: <FaReact />, iconColor: "#61DAFB" },
      { name: "JavaScript", level: 85, icon: <FaJs />, iconColor: "#F7DF1E" },
      { name: "TypeScript", level: 72, icon: <SiTypescript />, iconColor: "#3178C6" },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss />, iconColor: "#38BDF8" },
      { name: "HTML & CSS", level: 95, icon: <FaHtml5 />, iconColor: "#E44D26" },
      { name: "Framer Motion", level: 80, icon: <SiFramer />, iconColor: "#B06BF7" },
    ],
  },
  {
    title: "backend",
    skills: [
      { name: "Node.js", level: 75, icon: <FaNodeJs />, iconColor: "#68A063" },
      { name: "Express.js", level: 78, icon: <SiExpress />, iconColor: "#888888" },
      { name: "Python", level: 70, icon: <FaPython />, iconColor: "#3776AB" },
      { name: "MongoDB", level: 72, icon: <SiMongodb />, iconColor: "#47A248" },
      { name: "MySQL", level: 65, icon: <SiMysql />, iconColor: "#00758F" },
      { name: "REST APIs", level: 80, icon: <FaCss3Alt />, iconColor: "#2F6FED" },
    ],
  },
  {
    title: "tooling",
    skills: [
      { name: "Git & GitHub", level: 85, icon: <FaGitAlt />, iconColor: "#F05032" },
      { name: "JWT & RBAC", level: 80, icon: <SiJsonwebtokens />, iconColor: "#D63AFF" },
      { name: "Postman", level: 75, icon: <SiPostman />, iconColor: "#FF6C37" },
      { name: "Docker", level: 40, icon: <SiDocker />, iconColor: "#2496ED" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
};

const SkillsSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .sk-root {
          --paper: #FAFAF9; --surface: #FFFFFF; --ink: #14161A;
          --ink-2: #6B7178; --ink-3: #9BA0A6; --line: #E4E4E1;
          --blue: #2F6FED; --blue-soft: rgba(47,111,237,0.07);
          font-family: 'Inter', sans-serif;
          background: var(--paper);
          color: var(--ink);
        }
        .sk-mono { font-family: 'JetBrains Mono', monospace; }
        .sk-display { font-family: 'Space Grotesk', sans-serif; }

        .sk-endpoint {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.78rem;
          padding-bottom: 16px;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }
        .sk-badge {
          font-size: 0.68rem; font-weight: 600;
          padding: 2px 7px; border-radius: 3px;
          background: var(--blue-soft); color: var(--blue);
        }
        .sk-status { margin-left: auto; font-size: 0.7rem; color: var(--ink-3); }

        .sk-group {
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface);
          overflow: hidden;
        }
        .sk-group-head {
          padding: 12px 18px;
          border-bottom: 1px solid var(--line);
          background: #FCFCFB;
          display: flex; align-items: center; justify-content: space-between;
        }
        .sk-group-title {
          font-size: 0.72rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.06em;
          color: var(--ink-2);
        }
        .sk-group-count { font-size: 0.68rem; color: var(--ink-3); }

        .sk-row {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 18px;
          border-bottom: 1px solid #F0F0EE;
        }
        .sk-row:last-child { border-bottom: none; }

        .sk-icon {
          width: 26px; height: 26px;
          border-radius: 5px;
          background: #F5F5F3;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        .sk-name { font-size: 0.82rem; font-weight: 500; color: var(--ink); width: 108px; flex-shrink: 0; }

        .sk-track {
          flex: 1;
          height: 4px;
          background: #EFEFEC;
          border-radius: 99px;
          overflow: hidden;
        }
        .sk-fill { height: 100%; border-radius: 99px; background: var(--ink); }

        .sk-pct { font-size: 0.7rem; color: var(--ink-3); width: 32px; text-align: right; flex-shrink: 0; }

        .sk-learning {
          font-size: 0.6rem; font-weight: 600;
          padding: 1px 6px; border-radius: 99px;
          background: var(--blue-soft); color: var(--blue);
          margin-left: 6px;
        }
      `}</style>

      <section id="skills" className="sk-root w-full px-6 py-24 flex justify-center">
        <div className="max-w-5xl w-full">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="sk-endpoint sk-mono"
          >
            <span className="sk-badge">GET</span>
            /skills
            <span className="sk-status">200 OK</span>
          </motion.div>

          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="sk-display text-4xl md:text-5xl font-semibold mb-3"
          >
            Stack &amp; tooling
          </motion.h2>
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[var(--ink-2)] max-w-lg text-sm md:text-base leading-relaxed mb-12"
          >
            What I reach for, grouped the way I'd document a service —
            by layer, not by hype.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsData.map((group, gi) => (
              <motion.div
                key={group.title}
                custom={gi + 3}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="sk-group"
              >
                <div className="sk-group-head">
                  <span className="sk-group-title sk-mono">{group.title}</span>
                  <span className="sk-group-count sk-mono">[{group.skills.length}]</span>
                </div>
                <div>
                  {group.skills.map((s) => (
                    <div key={s.name} className="sk-row">
                      <div className="sk-icon" style={{ color: s.iconColor }}>{s.icon}</div>
                      <span className="sk-name">
                        {s.name}
                        {s.level < 50 && <span className="sk-learning">new</span>}
                      </span>
                      <div className="sk-track">
                        <motion.div
                          className="sk-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                      <span className="sk-pct sk-mono">{s.level}%</span>
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
