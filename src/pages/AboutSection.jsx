import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const fields = [
  { label: "role", value: "Full-Stack Developer" },
  { label: "experience", value: "1+ years" },
  { label: "location", value: "Karachi, Pakistan" },
  { label: "email", value: "tariq.official1712@gmail.com" },
];

const AboutSection = () => {
  const bio =
    "I'm Tariq — a full-stack developer based in Karachi, building clean, scalable web applications with the MERN stack. Lately I've been weaving AI into real products: multi-agent systems, LLM-backed tools, and features that solve actual problems rather than just demoing well.";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .as-root {
          --paper: #FAFAF9; --surface: #FFFFFF; --ink: #14161A;
          --ink-2: #6B7178; --ink-3: #9BA0A6; --line: #E4E4E1;
          --blue: #2F6FED; --blue-soft: rgba(47,111,237,0.07);
          --green: #16A34A; --green-soft: rgba(22,163,74,0.08);
          font-family: 'Inter', sans-serif;
          background: var(--surface);
          color: var(--ink);
        }
        .as-mono { font-family: 'JetBrains Mono', monospace; }
        .as-display { font-family: 'Space Grotesk', sans-serif; }

        .as-endpoint {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.78rem;
          padding-bottom: 16px;
          margin-bottom: 28px;
          border-bottom: 1px solid var(--line);
        }
        .as-badge {
          font-size: 0.68rem; font-weight: 600;
          padding: 2px 7px; border-radius: 3px;
          background: var(--blue-soft); color: var(--blue);
        }
        .as-status {
          margin-left: auto;
          font-size: 0.7rem; color: var(--ink-3);
        }

        .as-field-row {
          display: flex; justify-content: space-between; align-items: baseline;
          padding: 11px 0;
          border-bottom: 1px solid #F0F0EE;
          font-size: 0.84rem;
        }
        .as-field-key { color: var(--ink-3); }
        .as-field-val { color: var(--ink); font-weight: 500; text-align: right; }

        .as-panel {
          border: 1px solid var(--line);
          border-radius: 8px;
          overflow: hidden;
        }
        .as-panel-head {
          padding: 9px 14px;
          background: #FCFCFB;
          border-bottom: 1px solid var(--line);
          font-size: 0.68rem;
          color: var(--ink-3);
        }

        .as-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.82rem; font-weight: 500;
          color: var(--blue);
          transition: gap 0.15s ease;
        }
        .as-link:hover { gap: 10px; }

        .as-btn-primary {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 18px;
          background: var(--ink); color: var(--paper);
          border-radius: 5px; font-size: 0.85rem; font-weight: 500;
          transition: transform 0.15s ease, background 0.15s ease;
        }
        .as-btn-primary:hover { background: var(--blue); transform: translateY(-1px); }

        .as-btn-secondary {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 18px;
          border: 1px solid var(--line); color: var(--ink);
          border-radius: 5px; font-size: 0.85rem; font-weight: 500;
          transition: transform 0.15s ease, border-color 0.15s ease;
        }
        .as-btn-secondary:hover { border-color: var(--ink); transform: translateY(-1px); }

        .as-avail {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 0.78rem; color: var(--green); font-weight: 500;
        }
        @keyframes asPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.35); }
          50%      { box-shadow: 0 0 0 5px rgba(22,163,74,0); }
        }
        .as-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green); animation: asPulse 2.2s ease-in-out infinite; }

        .as-photo-wrap {
          border: 1px solid var(--line);
          border-radius: 8px;
          overflow: hidden;
          filter: grayscale(0.15);
        }
      `}</style>

      <section id="about" className="as-root w-full px-6 py-24 flex justify-center">
        <div className="max-w-5xl w-full">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="as-endpoint as-mono"
          >
            <span className="as-badge">GET</span>
            /about
            <span className="as-status">200 OK</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-14 items-start">

            {/* photo */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="as-photo-wrap w-full aspect-[4/5]">
                <img
                  src="/images/profile.jpeg"
                  alt="Tariq Rasheed"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* content */}
            <div>
              <motion.h2
                custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="as-display text-4xl md:text-5xl font-semibold mb-5"
              >
                About me
              </motion.h2>

              <motion.p
                custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-[var(--ink-2)] text-sm md:text-base leading-relaxed mb-4 max-w-md"
              >
                {bio}
              </motion.p>

              <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
                <Link to="/about" className="as-link">
                  Read full profile <span>→</span>
                </Link>
              </motion.div>

              <motion.div
                custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="as-panel mb-8"
              >
                <div className="as-panel-head as-mono">response.fields</div>
                <div className="px-4">
                  {fields.map((f) => (
                    <div key={f.label} className="as-field-row">
                      <span className="as-field-key as-mono">{f.label}</span>
                      <span className="as-field-val">{f.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex flex-wrap items-center gap-4"
              >
                <a href="#contact" className="as-btn-primary">Contact me</a>
                <a href="files/MyResume.pdf" download className="as-btn-secondary">Download résumé</a>
                <span className="as-avail"><span className="as-dot" /> Available for work</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
