import React, { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";

const payload = [
  { k: "name", v: '"Tariq Rasheed"' },
  { k: "role", v: '"Full-Stack Developer"' },
  { k: "currently", v: '"Backend AI Engineer Intern @ FlyRank AI"' },
  { k: "stack", v: '["MERN", "Python", "LLM Integration"]' },
  { k: "location", v: '"Karachi, PK"' },
  { k: "status", v: '"available_for_hire"' },
];

const routes = [
  { method: "GET", path: "/about" },
  { method: "GET", path: "/skills" },
  { method: "GET", path: "/experience" },
  { method: "GET", path: "/projects" },
  { method: "POST", path: "/contact" },
];

const HeroSection = () => {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeoutId;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLines(payload);
      setDone(true);
      return () => {
        cancelled = true;
      };
    }

    setLines([]);
    setDone(false);

    let i = 0;
    const step = () => {
      if (cancelled) return;
      if (i >= payload.length) {
        setDone(true);
        return;
      }
      const next = payload[i];
      setLines((prev) => [...prev, next]);
      i += 1;
      timeoutId = setTimeout(step, 220);
    };
    timeoutId = setTimeout(step, 400);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .hs-root {
          --paper: #FAFAF9;
          --surface: #FFFFFF;
          --ink: #14161A;
          --ink-2: #6B7178;
          --ink-3: #9BA0A6;
          --line: #E4E4E1;
          --blue: #2F6FED;
          --blue-soft: rgba(47,111,237,0.07);
          --green: #16A34A;
          --green-soft: rgba(22,163,74,0.08);
          font-family: 'Inter', sans-serif;
          background: var(--paper);
          color: var(--ink);
        }
        .hs-mono { font-family: 'JetBrains Mono', monospace; }
        .hs-display { font-family: 'Space Grotesk', sans-serif; }

        .hs-grain {
          background-image: radial-gradient(var(--line) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        @keyframes hsBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .hs-cursor {
          display: inline-block;
          width: 7px; height: 15px;
          background: var(--blue);
          margin-left: 4px;
          animation: hsBlink 1s step-end infinite;
          vertical-align: middle;
        }

        @keyframes hsFade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hs-json-line { animation: hsFade 0.35s ease both; }

        @keyframes hsPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.35); }
          50%      { box-shadow: 0 0 0 5px rgba(22,163,74,0); }
        }
        .hs-status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--green);
          animation: hsPulse 2s ease-in-out infinite;
        }

        .hs-badge {
          font-size: 0.68rem;
          font-weight: 600;
          padding: 2px 7px;
          border-radius: 3px;
          letter-spacing: 0.03em;
        }
        .hs-badge.get { background: var(--blue-soft); color: var(--blue); }
        .hs-badge.post { background: var(--green-soft); color: var(--green); }

        .hs-route {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 12px;
          border: 1px solid var(--line);
          border-radius: 5px;
          background: var(--surface);
          text-decoration: none;
          color: var(--ink-2);
          font-size: 0.76rem;
          transition: border-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
        }
        .hs-route:hover {
          border-color: var(--ink);
          color: var(--ink);
          transform: translateY(-1px);
        }

        .hs-json-panel {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 2px rgba(20,22,26,0.04);
        }
        .hs-json-topbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 16px;
          border-bottom: 1px solid var(--line);
          background: #FCFCFB;
        }
        .hs-dot-row { display: flex; gap: 6px; }
        .hs-dot { width: 8px; height: 8px; border-radius: 50%; background: #E4E4E1; }

        .hs-btn-primary {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 18px;
          background: var(--ink);
          color: var(--paper);
          border-radius: 5px;
          font-size: 0.85rem; font-weight: 500;
          transition: transform 0.15s ease, background 0.15s ease;
        }
        .hs-btn-primary:hover { background: var(--blue); transform: translateY(-1px); }

        .hs-btn-secondary {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 18px;
          background: transparent;
          border: 1px solid var(--line);
          color: var(--ink);
          border-radius: 5px;
          font-size: 0.85rem; font-weight: 500;
          transition: transform 0.15s ease, border-color 0.15s ease;
        }
        .hs-btn-secondary:hover { border-color: var(--ink); transform: translateY(-1px); }

        .hs-social {
          width: 36px; height: 36px;
          border: 1px solid var(--line);
          border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          color: var(--ink-2);
          transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;
        }
        .hs-social:hover { border-color: var(--ink); color: var(--ink); background: var(--surface); }
      `}</style>

      <section
        id="hero"
        className="hs-root hs-grain relative w-full min-h-screen flex flex-col justify-center px-6 py-28"
      >
        <div className="max-w-5xl w-full mx-auto">

          {/* Top strip: monogram + server status */}
          <div className="flex items-center justify-between mb-14">
            <div className="hs-mono text-xs text-[var(--ink-2)] flex items-center gap-2">
              <span className="hs-status-dot" />
              server: online
            </div>
            <div className="hs-mono text-xs text-[var(--ink-3)]">
              portfolio-api <span className="text-[var(--ink)]">v1.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">

            {/* LEFT — intro */}
            <div>
              <div className="hs-mono text-xs text-[var(--blue)] mb-4 flex items-center gap-2">
                <span className="hs-badge get">GET</span> /
              </div>

              <h1 className="hs-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-5">
                Hey, I'm<br />Tariq Rasheed.
              </h1>

              <p className="text-[var(--ink-2)] text-base md:text-lg leading-relaxed max-w-md mb-9">
                I build backend systems and full-stack products —
                then wire AI into them so they actually think.
                MERN by trade, LLM orchestration by curiosity.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-9">
                <a href="#contact" className="hs-btn-primary">
                  Get in touch <FiArrowUpRight />
                </a>
                <a href="#projects" className="hs-btn-secondary">
                  View work
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <a href="https://github.com/TariqCO" target="_blank" rel="noreferrer" className="hs-social" aria-label="GitHub">
                  <FiGithub size={15} />
                </a>
                <a href="https://www.linkedin.com/in/tariq-1712tr" target="_blank" rel="noreferrer" className="hs-social" aria-label="LinkedIn">
                  <FiLinkedin size={15} />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=tariq.official1712@gmail.com" target="_blank" rel="noreferrer" className="hs-social" aria-label="Email">
                  <FiMail size={15} />
                </a>
              </div>
            </div>

            {/* RIGHT — JSON response panel */}
            <div className="hs-json-panel">
              <div className="hs-json-topbar">
                <div className="hs-dot-row">
                  <span className="hs-dot" />
                  <span className="hs-dot" />
                  <span className="hs-dot" />
                </div>
                <span className="hs-mono text-[0.68rem] text-[var(--ink-3)]">200 OK · 12ms</span>
              </div>
              <div className="hs-mono text-[0.82rem] leading-[1.9] p-6">
                <div>{"{"}</div>
                {lines.filter(Boolean).map((line, i) => (
                  <div key={line.k} className="hs-json-line pl-4">
                    <span style={{ color: "#B5322F" }}>"{line.k}"</span>
                    <span className="text-[var(--ink-3)]">: </span>
                    <span style={{ color: "var(--green)" }}>{line.v}</span>
                    {i < payload.length - 1 && <span className="text-[var(--ink-3)]">,</span>}
                    {i === lines.length - 1 && !done && <span className="hs-cursor" />}
                  </div>
                ))}
                <div>{"}"}</div>
              </div>
            </div>
          </div>

          {/* Route index */}
          <div className="flex flex-wrap gap-2.5 mt-16">
            {routes.map((r) => (
              <a key={r.path} href={`#${r.path.slice(1)}`} className="hs-route hs-mono">
                <span className={`hs-badge ${r.method === "GET" ? "get" : "post"}`}>{r.method}</span>
                {r.path}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
