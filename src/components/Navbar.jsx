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
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');
        .navbar-wrap { font-family: 'DM Sans', sans-serif; }

        .nav-pill {
          align-items: center;
          gap: 2px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 99px;
          padding: 6px 8px;
          border: 1px solid rgba(0,0,0,0.07);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          white-space: nowrap;
        }
        .nav-pill.scrolled {
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          border-color: rgba(0,144,135,0.12);
        }
        .nav-link {
          position: relative;
          font-size: 0.875rem; font-weight: 500;
          color: #6b7280; padding: 7px 16px;
          border-radius: 99px; text-decoration: none;
          transition: color 0.2s ease; white-space: nowrap;
        }
        .nav-link:hover { color: #111; }
        .nav-link.active-link { color: #fff; }
        .nav-active-bg {
          position: absolute; inset: 0;
          border-radius: 99px; background: #009087; z-index: -1;
        }
        .logo-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #009087; display: inline-block;
          margin-left: 3px; margin-bottom: 1px; vertical-align: middle;
        }
        .mobile-trigger {
          align-items: center; gap: 10px;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 99px; padding: 10px 18px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem; font-weight: 500; color: #374151;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        .mobile-trigger:hover {
          border-color: rgba(0,144,135,0.25);
          box-shadow: 0 6px 22px rgba(0,144,135,0.15);
        }
        .mobile-menu {
          margin-top: 10px;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 20px; padding: 10px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.12);
          width: 220px; overflow: hidden;
        }
        .mobile-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 11px 16px; border-radius: 12px;
          font-size: 0.875rem; font-weight: 500;
          color: #374151; text-decoration: none;
          transition: background 0.18s ease, color 0.18s ease;
        }
        .mobile-link:hover { background: #f9fafb; color: #111; }
        .mobile-link.mobile-active {
          background: rgba(0,144,135,0.08); color: #009087;
        }
        .mobile-active-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #009087; flex-shrink: 0;
        }
        .mobile-divider { height: 1px; background: #f3f4f6; margin: 6px 0; }
        .menu-label {
          display: block; font-size: 0.65rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.09em;
          color: #9ca3af; padding: 6px 16px 4px;
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
          <a
            href="#hero"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#111",
              textDecoration: "none",
              padding: "7px 14px 7px 10px",
              marginRight: "4px",
              borderRight: "1px solid #f0f0f0",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            Tariq
            <span className="logo-dot" />
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
                {section}
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
                {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </motion.span>
            </AnimatePresence>

          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="mobile-menu"
              >
                <span className="menu-label">Navigation</span>
                <div className="mobile-divider" />

                {sections.map((section, i) => {
                  const isActive = active === section.toLowerCase();
                  return (
                    <motion.a
                      key={section}
                      href={`#${section.toLowerCase()}`}
                      className={`mobile-link ${isActive ? "mobile-active" : ""}`}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {section}
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
                  style={{ color: "#009087", fontWeight: 600 }}
                >
                  Download CV
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      background: "rgba(0,144,135,0.1)",
                      color: "#009087",
                      borderRadius: 99,
                      padding: "2px 8px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    PDF
                  </span>
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
