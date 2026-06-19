import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowLeft,
  FiDownload,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, GraduationCap, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Shipped" },
  { value: "2+", label: "Clients Served" },
  { value: "10+", label: "Technologies Used" },
];

const timeline = [
  {
    year: "2023",
    icon: <GraduationCap size={15} />,
    title: "Started Freelancing",
    desc: "Began taking on independent client projects — built a Wedding Website with WhatsApp RSVP and Google Sheets integration.",
  },
  {
    year: "2024",
    icon: <Briefcase size={15} />,
    title: "Web Developer Intern · IWS Solutions",
    desc: "Shipped production features including a Bulk Product Editor and Hotel Booking app flows. Worked with MERN, MySQL, ShadCN UI, and JWT auth.",
  },
  {
    year: "2024",
    icon: <Zap size={15} />,
    title: "Dived into AI Integration",
    desc: "Built an AI Crypto Prediction Platform and Code Reviewer using Google Gemini API — making AI a core part of my development approach.",
  },
  {
    year: "2025",
    icon: <Zap size={15} />,
    title: "Learning Docker & Expanding Stack",
    desc: "Actively learning Docker and containerization. Exploring advanced DevOps tooling to complement full-stack development skills.",
  },
];

const socials = [
  { href: "https://github.com/TariqCO", icon: <FiGithub />, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/tariq-1712tr",
    icon: <FiLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://mail.google.com/mail/?view=cm&to=tariq.official1712@gmail.com",
    icon: <FiMail />,
    label: "Email",
  },
];

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        .about-page { font-family: 'DM Sans', sans-serif; }
        .about-serif { font-family: 'Instrument Serif', serif; }

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

        /* ── Image card ── */
        .img-card {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.13);
          transition: box-shadow 0.3s ease;
          position: relative;
        }
        .img-card:hover { box-shadow: 0 28px 70px rgba(0,144,135,0.18); }
        .img-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(160deg, rgba(0,144,135,0.07) 0%, transparent 55%);
          z-index: 1; pointer-events: none;
        }
        .img-card img { transition: transform 0.6s ease; }
        .img-card:hover img { transform: scale(1.04); }

        @keyframes floatImg {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        .img-float { animation: floatImg 5s ease-in-out infinite; }

        .corner-accent {
          position: absolute;
          width: 52px; height: 52px;
          border-radius: 8px;
          background: #009087; opacity: 0.11; z-index: 0;
        }

        /* ── Social icons ── */
        .social-icon {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid #e5e7eb;
          background: white;
          display: flex; align-items: center; justify-content: center;
          color: #6b7280; font-size: 1rem;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .social-icon:hover {
          color: #009087;
          border-color: rgba(0,144,135,0.4);
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0,144,135,0.15);
        }

        /* ── Stat cards ── */
        .stat-card {
          background: white;
          border: 1px solid #f0f0f0;
          border-radius: 14px;
          padding: 14px 10px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          flex: 1;
        }
        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 22px rgba(0,144,135,0.1);
        }
        .stat-value {
          font-family: 'Instrument Serif', serif;
          font-size: 1.7rem; color: #009087; line-height: 1;
        }
        .stat-label {
          font-size: 0.68rem; color: #9ca3af;
          text-transform: uppercase; letter-spacing: 0.06em; margin-top: 5px;
        }

        /* ── Bio highlights ── */
        .bio-highlight {
          color: #111; font-weight: 500;
          background: rgba(0,144,135,0.07);
          border-radius: 4px;
          padding: 0 4px;
        }

        /* ── Timeline ── */
        .timeline-wrap { position: relative; padding-left: 28px; }
        .timeline-wrap::before {
          content: '';
          position: absolute; left: 7px; top: 6px; bottom: 6px; width: 1.5px;
          background: linear-gradient(to bottom, #009087, #e5e7eb);
        }
        .tl-item { position: relative; margin-bottom: 28px; }
        .tl-dot {
          position: absolute; left: -25px; top: 4px;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: white;
          border: 2px solid #009087;
          display: flex; align-items: center; justify-content: center;
          color: #009087;
          box-shadow: 0 0 0 3px rgba(0,144,135,0.1);
          font-size: 0.6rem;
        }
        .tl-year {
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: #009087; margin-bottom: 3px;
        }
        .tl-title {
          font-size: 0.9rem; font-weight: 600;
          color: #111; margin-bottom: 3px;
        }
        .tl-desc {
          font-size: 0.8rem; color: #6b7280; line-height: 1.6;
        }

        /* ── Buttons ── */
        .btn-primary-about {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px;
          background: #009087; color: white;
          border-radius: 99px; font-size: 0.875rem; font-weight: 500;
          box-shadow: 0 4px 14px rgba(0,144,135,0.3);
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s;
          text-decoration: none;
        }
        .btn-primary-about:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0,144,135,0.38);
          background: #007d75;
        }

        .btn-secondary-about {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px;
          border: 1.5px solid #e5e7eb; color: #374151;
          border-radius: 99px; font-size: 0.875rem; font-weight: 500;
          background: white;
          transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s;
          text-decoration: none;
        }
        .btn-secondary-about:hover {
          transform: translateY(-2px);
          border-color: #009087;
          box-shadow: 0 4px 14px rgba(0,0,0,0.07);
        }

        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,144,135,0.35); }
          50%       { box-shadow: 0 0 0 5px rgba(0,144,135,0); }
        }
        .pulse-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #009087; flex-shrink: 0;
          animation: softPulse 2.2s ease-in-out infinite;
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(0,144,135,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,144,135,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .avail-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.75rem; font-weight: 500;
          color: #009087;
          background: rgba(0,144,135,0.08);
          border: 1px solid rgba(0,144,135,0.18);
          border-radius: 99px; padding: 4px 12px;
        }

        .location-badge {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.75rem; font-weight: 500;
          color: #6b7280;
          background: #f9fafb;
          border: 1px solid #f0f0f0;
          border-radius: 99px; padding: 4px 12px;
        }
        .location-badge svg { color: #009087; }
      `}</style>

      <section className="about-page grid-bg w-full min-h-screen px-6 py-24 bg-gray-50 text-gray-900 flex justify-center">
        <div className="max-w-6xl w-full">
          {/* ── Back button ── */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-12"
          >
            <Link
              to="/"
              className="btn-secondary-about"
              style={{ width: "fit-content" }}
            >
              <FiArrowLeft size={15} />
              Back to Home
            </Link>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* ── LEFT: Image + socials + stats ── */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center lg:items-start gap-6"
            >
              {/* Image */}
              <div className="relative">
                <div
                  className="corner-accent"
                  style={{ top: -12, left: -12 }}
                />
                <div
                  className="corner-accent"
                  style={{ bottom: -12, right: -12 }}
                />
                <div className="img-float img-card w-72 h-80 md:w-80 md:h-96">
                  <img
                    src="/images/profile2.jpeg"
                    alt="Tariq Rasheed"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="avail-badge">
                  <span className="pulse-dot" />
                  Available for Work
                </span>
                <span className="location-badge">
                  <MapPin size={12} />
                  Karachi, Pakistan
                </span>
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
                {socials.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex gap-3 w-full">
                {stats.map(({ value, label }) => (
                  <div key={label} className="stat-card">
                    <div className="stat-value">{value}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Bio + timeline + buttons ── */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              {/* Section tag + heading */}
              <motion.span
                custom={0}
                variants={fadeUp}
                className="section-tag mb-2"
              >
                Who I Am
              </motion.span>
              <motion.h1
                custom={1}
                variants={fadeUp}
                className="about-serif text-4xl md:text-5xl font-normal text-gray-900 leading-tight mb-6"
              >
                About{" "}
                <span className="italic" style={{ color: "#009087" }}>
                  Me
                </span>
              </motion.h1>

              {/* Bio */}
              <motion.div
                custom={2}
                variants={fadeUp}
                className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 space-y-4"
              >
                <p>
                  I'm a{" "}
                  <span className="bio-highlight">Full-Stack Developer</span>{" "}
                  based in Karachi, Pakistan — building clean, scalable web
                  applications with the MERN stack while everyone else is
                  copy-pasting their way to shipping. I care about the details,
                  both in code and in UI, and I care about building things that
                  actually work for real users.
                </p>
                <p>
                  In an era where AI can generate entire codebases in seconds,
                  I'm doubling down on the thing most people are abandoning —{" "}
                  <span className="bio-highlight">fundamentals and logic.</span>{" "}
                  I believe the developers who understand <em>why</em> it works
                  will always outrun the ones who just know <em>that</em> it
                  works. So yes, I use AI to move fast and ship better. But I
                  also know exactly what's happening under the hood.
                </p>
                <p>
                  I've shipped real features at{" "}
                  <span className="bio-highlight">IWS Solutions</span>,
                  delivered freelance projects end-to-end, and built personal
                  projects that explore the bleeding edge of{" "}
                  <span className="bio-highlight">AI + web development</span>.
                  My arsenal includes React, Node, MongoDB, the Google Gemini
                  API — and on the data side,{" "}
                  <span className="bio-highlight">
                    Python, Pandas, Django, and Flask
                  </span>
                  .
                </p>
                <p>
                  I'm currently in a season of deliberate levelling up —{" "}
                  <span className="bio-highlight">TypeScript</span> for writing
                  code that doesn't lie to you,{" "}
                  <span className="bio-highlight">Dockerization</span> for
                  environments that behave the same everywhere, and{" "}
                  <span className="bio-highlight">CI/CD pipelines</span> for
                  shipping without the dread. Not because it's trendy — because
                  it's the infrastructure serious software is built on.
                </p>
                <p>
                  I don't wait to feel ready.{" "}
                  <span className="bio-highlight">I learn by building.</span> I
                  pick up what I need as I go, ask the right questions, and
                  write code that's maintainable, intentional, and built to
                  last.
                </p>
              </motion.div>

              {/* Timeline */}
              <motion.div custom={3} variants={fadeUp} className="mb-8">
                <p className="section-tag mb-5">Journey</p>
                <div className="timeline-wrap">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      className="tl-item"
                    >
                      <div className="tl-dot">{item.icon}</div>
                      <div className="tl-year">{item.year}</div>
                      <div className="tl-title">{item.title}</div>
                      <div className="tl-desc">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Buttons */}
              <motion.div
                custom={4}
                variants={fadeUp}
                className="flex flex-wrap gap-3"
              >
                <Link to="/" className="btn-primary-about">
                  <FiArrowLeft size={15} />
                  Back to Home
                </Link>
                <a
                  href="images/MyResume.pdf"
                  download
                  className="btn-secondary-about"
                >
                  <FiDownload size={15} />
                  Download CV
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
