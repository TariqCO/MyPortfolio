import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShow(false);
        setMenuOpen(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    sections.forEach((section) => {
      const el = document.getElementById(section.toLowerCase());
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(section.toLowerCase());
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .navbar-wrap {
          --paper: #FAFAF9; --surface: #FFFFFF; --ink: #14161A;
          --ink-2: #6B7178; --ink-3: #9BA0A6; --line: #E4E4E1;
          --blue: #2F6FED; --blue-soft: rgba(47,111,237,0.07);
          font-family: 'Inter', sans-serif;
        }
        .nb-mono { font-family: 'JetBrains Mono', monospace; }
        .nb-display { font-family: 'Space Grotesk', sans-serif; }

        .nav-pill {
          align-items: center;
          gap: 3px;
          background: var(--surface);
          border-radius: 8px;
          padding: 5px;
          border: 1px solid var(--line);
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          white-space: nowrap;
        }
        .nav-pill.scrolled {
          box-shadow: 0 6px 20px rgba(20,22,26,0.08);
        }

        .nav-logo {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem; font-weight: 600;
          color: var(--ink);
          text-decoration: none;
          padding: 7px 14px 7px 10px;
          margin-right: 3px;
          border-right: 1px solid var(--line);
          display: flex; align-items: center; gap: 6px;
        }
        @keyframes navPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.35); }
          50%      { box-shadow: 0 0 0 4px rgba(22,163,74,0); }
        }
        .nav-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #16A34A;
          animation: navPulse 2.2s ease-in-out infinite;
        }

        .nav-link {
          position: relative;
          font-size: 0.78rem; font-weight: 500;
          font-family: 'JetBrains Mono', monospace;
          color: var(--ink-2); padding: 7px 14px;
          border-radius: 5px; text-decoration: none;
          transition: color 0.15s ease; white-space: nowrap;
        }
        .nav-link:hover { color: var(--ink); }
        .nav-link.active-link { color: var(--paper); }
        .nav-active-bg {
          position: absolute; inset: 0;
          border-radius: 5px; background: var(--ink); z-index: -1;
        }

        .mobile-trigger {
          align-items: center; gap: 9px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 8px; padding: 9px 16px;
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem; font-weight: 500; color: var(--ink);
          transition: border-color 0.15s ease;
        }
        .mobile-trigger:hover { border-color: var(--ink); }

        .mobile-menu {
          margin-top: 8px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 10px; padding: 8px;
          box-shadow: 0 10px 32px rgba(20,22,26,0.1);
          width: 220px; overflow: hidden;
        }
        .mobile-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 14px; border-radius: 6px;
          font-size: 0.82rem; font-weight: 500;
          font-family: 'JetBrains Mono', monospace;
          color: var(--ink-2); text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .mobile-link:hover { background: var(--paper); color: var(--ink); }
        .mobile-link.mobile-active {
          background: var(--blue-soft); color: var(--blue);
        }
        .mobile-active-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--blue); flex-shrink: 0;
        }
        .mobile-divider { height: 1px; background: var(--line); margin: 6px 0; }
        .menu-label {
          display: block; font-size: 0.64rem; font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: var(--ink-3); padding: 6px 14px 5px;
        }
        .cv-badge {
          font-size: 0.62rem; font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          background: var(--blue-soft); color: var(--blue);
          border-radius: 3px; padding: 2px 6px;
          letter-spacing: 0.04em;
        }
      `}</style>

      {/* ── DESKTOP pill — centered, hidden on mobile ── */}
      <nav
        className="navbar-wrap fixed z-50 hidden md:block"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          top: show ? "20px" : "-120px",
          transition: "top 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className={`nav-pill flex ${scrolled ? "scrolled" : ""}`}>
          <a href="#hero" className="nav-logo">
            Tariq
            <span className="nav-status-dot" />
          </a>

          {sections.map((section) => {
            const isActive = active === section.toLowerCase();
            return (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className={`nav-link ${isActive ? "active-link" : ""}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-bg"
                    className="nav-active-bg"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                /{section.toLowerCase()}
              </a>
            );
          })}
        </div>
      </nav>

      {/* ── MOBILE menu — top-left, hidden on desktop ── */}
      <nav
        className="navbar-wrap fixed z-50 md:hidden"
        style={{
          top: show ? "20px" : "-120px",
          left: "20px",
          transition: "top 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="flex flex-col items-start">
          <button
            className="mobile-trigger flex"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                {menuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
              </motion.span>
            </AnimatePresence>
            menu
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mobile-menu"
              >
                <span className="menu-label">routes</span>
                <div className="mobile-divider" />

                {sections.map((section, i) => {
                  const isActive = active === section.toLowerCase();
                  return (
                    <motion.a
                      key={section}
                      href={`#${section.toLowerCase()}`}
                      className={`mobile-link ${isActive ? "mobile-active" : ""}`}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      /{section.toLowerCase()}
                      {isActive && <span className="mobile-active-dot" />}
                    </motion.a>
                  );
                })}

                <div className="mobile-divider" />
                <a
                  href="files/MyResume.pdf"
                  download
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                  style={{ color: "var(--blue)", fontWeight: 600 }}
                >
                  /resume
                  <span className="cv-badge">PDF</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;