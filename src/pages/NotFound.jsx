import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .nf-root {
          --paper: #FAFAF9; --ink: #14161A; --ink-2: #6B7178; --line: #E4E4E1;
          --blue: #2F6FED;
          font-family: 'Inter', sans-serif;
          background: var(--paper);
          color: var(--ink);
        }
        .nf-mono { font-family: 'JetBrains Mono', monospace; }
        .nf-display { font-family: 'Space Grotesk', sans-serif; }
        .nf-badge {
          font-size: 0.68rem; font-weight: 600;
          padding: 2px 7px; border-radius: 3px;
          background: rgba(239,68,68,0.08); color: #DC2626;
        }
        .nf-link { color: var(--blue); text-decoration: none; font-weight: 500; }
        .nf-link:hover { text-decoration: underline; }
      `}</style>
      <section className="nf-root min-h-screen w-full flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="nf-mono text-xs flex items-center justify-center gap-2 mb-6">
            <span className="nf-badge">GET</span> {window.location.pathname}
            <span className="text-[var(--ink-2)]">404</span>
          </div>
          <h1 className="nf-display text-6xl font-bold mb-4">404</h1>
          <p className="text-[var(--ink-2)] text-sm mb-8">
            This route doesn't exist on the server. It may have moved, or never shipped.
          </p>
          <Link to="/" className="nf-link nf-mono text-sm">← back to /</Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
