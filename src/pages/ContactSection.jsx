import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUp,
  Instagram,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 },
  }),
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/TariqCO",
    icon: <Github size={18} />,
    hoverBg: "#181717",
    hoverColor: "#fff",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tariq-1712tr",
    icon: <Linkedin size={18} />,
    hoverBg: "#0A66C2",
    hoverColor: "#fff",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/__tariqrasheed__/",
    icon: <Instagram size={18} />,
    hoverBg: "#E1306C",
    hoverColor: "#fff",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923711175464",
    icon: <FaWhatsapp size={19} />,
    hoverBg: "#25D366",
    hoverColor: "#fff",
  },
];

export default function ContactSection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        .contact-section { font-family: 'DM Sans', sans-serif; }
        .contact-heading { font-family: 'Instrument Serif', serif; }

        .section-tag {
          display: inline-flex; align-items: center;
          font-size: 0.72rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: #009087;
        }
        .section-tag::before {
          content: '';
          display: inline-block;
          width: 20px; height: 1.5px;
          background: #009087; margin-right: 8px;
        }

        .contact-card {
          background: white;
          border: 1px solid #f0f0f0;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .contact-card:hover {
          box-shadow: 0 16px 48px rgba(0,144,135,0.1);
          border-color: rgba(0,144,135,0.18);
        }
        .contact-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #006f68, #009087, #00b3a4);
        }

        /* Soft orb inside card */
        .card-orb {
          position: absolute;
          top: -60px; right: -60px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,144,135,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .email-display {
          font-size: 1.1rem;
          font-weight: 500;
          color: #111;
          word-break: break-all;
        }

        .email-label {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: #9ca3af;
          margin-bottom: 6px;
        }

        .send-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 26px;
          background: #009087;
          color: white;
          border-radius: 99px;
          font-size: 0.875rem; font-weight: 500;
          box-shadow: 0 4px 14px rgba(0,144,135,0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s;
          white-space: nowrap;
          text-decoration: none;
        }
        .send-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0,144,135,0.38);
          background: #007d75;
        }
        .send-btn:active { transform: translateY(0); }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent);
          margin: 32px 0;
        }

        .find-me-label {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: #9ca3af;
          margin-bottom: 14px;
        }

        .social-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e5e7eb;
          background: white;
          display: flex; align-items: center; justify-content: center;
          color: #374151;
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s, box-shadow 0.2s;
          position: relative;
          overflow: hidden;
        }
        .social-btn::before {
          content: '';
          position: absolute; inset: 0;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .social-btn:hover { transform: translateY(-3px) scale(1.08); }
        .social-btn svg, .social-btn * { position: relative; z-index: 1; }

        .social-btn.github:hover  { border-color: #181717; box-shadow: 0 6px 16px rgba(24,23,23,0.2); color: #fff; background: #181717; }
        .social-btn.linkedin:hover{ border-color: #0A66C2; box-shadow: 0 6px 16px rgba(10,102,194,0.25); color: #fff; background: #0A66C2; }
        .social-btn.instagram:hover{ border-color: #E1306C; box-shadow: 0 6px 16px rgba(225,48,108,0.25); color: #fff; background: #E1306C; }
        .social-btn.whatsapp:hover { border-color: #25D366; box-shadow: 0 6px 16px rgba(37,211,102,0.25); color: #fff; background: #25D366; }

        .location-chip {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.78rem; font-weight: 500;
          color: #6b7280;
          background: #f9fafb;
          border: 1px solid #f0f0f0;
          border-radius: 99px;
          padding: 5px 14px;
        }
        .location-chip svg { color: #009087; }

        .avail-chip {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.78rem; font-weight: 500;
          color: #009087;
          background: rgba(0,144,135,0.07);
          border: 1px solid rgba(0,144,135,0.18);
          border-radius: 99px;
          padding: 5px 14px;
        }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,144,135,0.35); }
          50%       { box-shadow: 0 0 0 5px rgba(0,144,135,0); }
        }
        .pulse-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #009087;
          animation: pulse-dot 2.2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .back-top-btn {
          position: fixed; bottom: 28px; right: 28px;
          width: 46px; height: 46px;
          border-radius: 50%;
          background: #009087;
          color: white;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(0,144,135,0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s;
          z-index: 50;
        }
        .back-top-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,144,135,0.45);
          background: #007d75;
        }
        .back-top-btn:active { transform: translateY(0); }

        .footer-note {
          font-size: 0.72rem;
          color: #9ca3af;
          text-align: center;
          margin-top: 32px;
          letter-spacing: 0.02em;
        }

        .grid-bg-contact {
          background-image:
            linear-gradient(rgba(0,144,135,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,144,135,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <section
        id="contact"
        className="contact-section grid-bg-contact w-full py-24 bg-gray-50 flex justify-center relative"
      >
        <div className="max-w-3xl w-full px-6">
          {/* ── Heading ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="section-tag"
              style={{ justifyContent: "center" }}
            >
              Get In Touch
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="contact-heading text-4xl md:text-5xl font-normal text-gray-900 leading-tight mt-2 mb-4"
            >
              Let's Work{" "}
              <span className="italic" style={{ color: "#009087" }}>
                Together
              </span>
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-gray-500 max-w-md mx-auto text-sm md:text-base leading-relaxed"
            >
              Have a project in mind, need a freelancer, or just want to
              connect? I'm always open to new ideas and opportunities.
            </motion.p>

            {/* Status chips */}
            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex items-center justify-center gap-3 flex-wrap mt-6"
            >
              <span className="avail-chip">
                <span className="pulse-dot" />
                Available for work
              </span>
              <span className="location-chip">
                <MapPin size={13} />
                Karachi, Pakistan
              </span>
            </motion.div>
          </motion.div>

          {/* ── Contact Card ── */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="contact-card"
          >
            <div className="card-orb" />

            {/* Email row */}
            <div className="flex items-center justify-between flex-wrap gap-6 relative z-10">
              <div>
                <p className="email-label">Reach me at</p>
                <p className="email-display">tariq.official1712@gmail.com</p>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&to=tariq.official1712@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="send-btn"
              >
                <Mail size={15} />
                Send Email
              </a>
            </div>

            <div className="divider" />

            {/* Socials row */}
            <div className="relative z-10">
              <p className="find-me-label">Find me on</p>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://github.com/TariqCO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn github"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tariq-1712tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href="https://www.instagram.com/__tariqrasheed__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn instagram"
                  aria-label="Instagram"
                >
                  <Instagram size={17} />
                </a>
                <a
                  href="https://wa.me/923711175464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn whatsapp"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Footer note ── */}
          <motion.p
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="footer-note"
          >
            © {new Date().getFullYear()} Tariq Rasheed · Built with React &
            Tailwind CSS
          </motion.p>
        </div>

        {/* ── Back to top ── */}
        <button
          onClick={scrollToTop}
          className="back-top-btn"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </section>
    </>
  );
}
