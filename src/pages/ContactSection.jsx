import React from "react";
import {
  Mail, Github, Linkedin, ArrowUp, Instagram, MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const socials = [
  { label: "GitHub", href: "https://github.com/TariqCO", icon: <Github size={16} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tariq-1712tr", icon: <Linkedin size={16} /> },
  { label: "Instagram", href: "https://www.instagram.com/__tariqrasheed__/", icon: <Instagram size={16} /> },
  { label: "WhatsApp", href: "https://wa.me/923711175464", icon: <FaWhatsapp size={16} /> },
];

export default function ContactSection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .co-root {
          --paper: #FAFAF9; --surface: #FFFFFF; --ink: #14161A;
          --ink-2: #6B7178; --ink-3: #9BA0A6; --line: #E4E4E1;
          --blue: #2F6FED;
          --green: #16A34A; --green-soft: rgba(22,163,74,0.08);
          font-family: 'Inter', sans-serif;
          background: var(--surface);
          color: var(--ink);
        }
        .co-mono { font-family: 'JetBrains Mono', monospace; }
        .co-display { font-family: 'Space Grotesk', sans-serif; }

        .co-endpoint {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.78rem;
          padding-bottom: 16px;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }
        .co-badge {
          font-size: 0.68rem; font-weight: 600;
          padding: 2px 7px; border-radius: 3px;
          background: var(--green-soft); color: var(--green);
        }
        .co-status { margin-left: auto; font-size: 0.7rem; color: var(--ink-3); }

        .co-panel {
          border: 1px solid var(--line);
          border-radius: 8px;
          overflow: hidden;
          background: var(--paper);
        }

        .co-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
          padding: 26px;
          border-bottom: 1px solid var(--line);
        }

        .co-label { font-size: 0.68rem; color: var(--ink-3); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
        .co-value { font-size: 1.05rem; font-weight: 600; color: var(--ink); word-break: break-all; }

        .co-send {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 20px;
          background: var(--ink); color: var(--paper);
          border-radius: 5px; font-size: 0.85rem; font-weight: 500;
          text-decoration: none; flex-shrink: 0;
          transition: background 0.15s ease, transform 0.15s ease;
        }
        .co-send:hover { background: var(--blue); transform: translateY(-1px); }

        .co-socials-row { display: flex; align-items: center; gap: 10px; padding: 22px 26px; flex-wrap: wrap; }
        .co-social {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 8px 14px;
          border: 1px solid var(--line); border-radius: 5px;
          font-size: 0.78rem; font-weight: 500; color: var(--ink-2);
          text-decoration: none;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .co-social:hover { border-color: var(--ink); color: var(--ink); }

        .co-status-strip {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
          padding: 16px 26px;
          font-size: 0.76rem; color: var(--ink-2);
        }
        @keyframes coPulse { 0%,100%{box-shadow:0 0 0 0 rgba(22,163,74,0.35);} 50%{box-shadow:0 0 0 5px rgba(22,163,74,0);} }
        .co-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green); animation: coPulse 2.2s ease-in-out infinite; }

        .co-back-top {
          position: fixed; bottom: 26px; right: 26px;
          width: 42px; height: 42px;
          border-radius: 6px;
          background: var(--ink); color: var(--paper);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s ease, transform 0.15s ease;
          z-index: 50;
        }
        .co-back-top:hover { background: var(--blue); transform: translateY(-2px); }

        .co-footer { font-size: 0.72rem; color: var(--ink-3); text-align: center; margin-top: 26px; }
      `}</style>

      <section id="contact" className="co-root w-full px-6 py-24 flex justify-center relative">
        <div className="max-w-3xl w-full">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="co-endpoint co-mono"
          >
            <span className="co-badge">POST</span>
            /contact
            <span className="co-status">ready</span>
          </motion.div>

          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="co-display text-4xl md:text-5xl font-semibold mb-3"
          >
            Let's work together
          </motion.h2>
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[var(--ink-2)] max-w-md text-sm md:text-base leading-relaxed mb-10"
          >
            Have a project, a role, or just a question? Send a request —
            I read every message myself.
          </motion.p>

          <motion.div
            custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="co-panel"
          >
            <div className="co-status-strip border-b border-[var(--line)]">
              <span className="flex items-center gap-2"><span className="co-dot" /> available for work</span>
              <span className="flex items-center gap-2"><MapPin size={13} /> Karachi, Pakistan</span>
            </div>

            <div className="co-row">
              <div>
                <div className="co-label co-mono">reach me at</div>
                <div className="co-value">tariq.official1712@gmail.com</div>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&to=tariq.official1712@gmail.com"
                target="_blank" rel="noopener noreferrer"
                className="co-send"
              >
                <Mail size={14} /> Send email
              </a>
            </div>

            <div className="co-socials-row">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="co-social">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.p
            custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="co-footer co-mono"
          >
            © {new Date().getFullYear()} Tariq Rasheed — built with React & Tailwind CSS
          </motion.p>
        </div>

        <button onClick={scrollToTop} className="co-back-top" aria-label="Back to top">
          <ArrowUp size={17} />
        </button>
      </section>
    </>
  );
}
