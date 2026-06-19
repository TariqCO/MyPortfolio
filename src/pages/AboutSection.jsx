import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

const AboutSection = () => {
  const [isAvailable] = useState(true);

  const previewBio =
    "I'm Tariq — a Full-Stack Developer based in Karachi, building clean, scalable web applications with the MERN stack. I love weaving AI into real products, shipping features that solve actual problems, and continuously pushing what I know.";

  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "5+", label: "Projects Shipped" },
    { value: "2+", label: "Clients Served" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        .about-section { font-family: 'DM Sans', sans-serif; }

        .about-heading { font-family: 'Instrument Serif', serif; }

        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,144,135,0.35); }
          50%       { box-shadow: 0 0 0 6px rgba(0,144,135,0); }
        }
        .status-pulse { animation: softPulse 2.2s ease-in-out infinite; }

        @keyframes floatImg {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .img-float { animation: floatImg 5s ease-in-out infinite; }

        .img-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.12);
          transition: box-shadow 0.3s ease;
        }
        .img-wrapper:hover { box-shadow: 0 32px 80px rgba(0,144,135,0.18); }

        .img-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(0,144,135,0.08) 0%, transparent 60%);
          z-index: 10;
          pointer-events: none;
          border-radius: 20px;
        }

        .corner-accent {
          position: absolute;
          width: 56px; height: 56px;
          border-radius: 6px;
          background: #009087;
          opacity: 0.12;
          z-index: 0;
        }

        .stat-card {
          background: white;
          border: 1px solid #f0f0f0;
          border-radius: 14px;
          padding: 14px 18px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,144,135,0.12);
        }
        .stat-value {
          font-family: 'Instrument Serif', serif;
          font-size: 1.8rem;
          color: #009087;
          line-height: 1;
        }
        .stat-label { font-size: 0.72rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 4px; }

        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f3f4f6;
          font-size: 0.875rem;
        }
        .info-label { font-weight: 500; color: #374151; }
        .info-value { color: #6b7280; }

        .teal-accent { color: #009087; }

        .btn-primary-about {
          position: relative; overflow: hidden;
          padding: 11px 24px;
          background: #009087; color: white;
          border-radius: 10px; font-size: 0.875rem; font-weight: 500;
          box-shadow: 0 4px 14px rgba(0,144,135,0.3);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          display: inline-block;
        }
        .btn-primary-about:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0,144,135,0.38);
        }
        .btn-primary-about:active { transform: translateY(0); }

        .btn-secondary-about {
          padding: 11px 24px;
          border: 1.5px solid #e5e7eb; color: #374151;
          border-radius: 10px; font-size: 0.875rem; font-weight: 500;
          background: white;
          transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
          display: inline-block;
        }
        .btn-secondary-about:hover {
          transform: translateY(-2px);
          border-color: #009087;
          box-shadow: 0 4px 14px rgba(0,0,0,0.07);
        }
        .btn-secondary-about:active { transform: translateY(0); }

        .read-more-link {
          font-size: 0.875rem; font-weight: 500;
          color: #009087;
          display: inline-flex; align-items: center; gap: 4px;
          transition: gap 0.2s ease;
        }
        .read-more-link:hover { gap: 8px; }

        .section-tag {
          display: inline-flex; align-items: center; gap-6px;
          font-size: 0.72rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: #009087;
          margin-bottom: 12px;
        }
        .section-tag::before {
          content: '';
          display: inline-block;
          width: 20px; height: 1.5px;
          background: #009087;
          margin-right: 8px;
        }
      `}</style>

      <section
        id="about"
        className="about-section w-full px-6 py-24 bg-white text-gray-900 flex justify-center"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ── IMAGE COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              {/* decorative corner accents */}
              <div className="corner-accent" style={{ top: -12, left: -12 }} />
              <div className="corner-accent" style={{ bottom: -12, right: -12 }} />

              {/* floating image */}
              <div className="img-float img-wrapper w-72 h-80 md:w-80 md:h-96">
                <img
                  src="/images/profile.jpeg"
                  alt="Tariq Rasheed"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats strip — overlapping bottom of image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] flex gap-2 bg-gray-50 border border-gray-100 rounded-2xl p-3 shadow-lg"
              >
                {stats.map((s, i) => (
                  <div key={i} className="stat-card flex-1">
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ── CONTENT COLUMN ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col mt-12 md:mt-0"
          >
            {/* Section tag */}
            <motion.span custom={0} variants={fadeUp} className="section-tag">
              Who I Am
            </motion.span>

            {/* Heading */}
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="about-heading text-4xl md:text-5xl font-normal text-gray-900 leading-tight mb-5"
            >
              About <span className="italic teal-accent">Me</span>
            </motion.h2>

            {/* Bio */}
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-gray-500 text-sm md:text-base leading-relaxed mb-3 max-w-md"
            >
              {previewBio}
            </motion.p>

            {/* Read More */}
            <motion.div custom={3} variants={fadeUp} className="mb-6">
              <Link to="/about" className="read-more-link">
                Read More <span>→</span>
              </Link>
            </motion.div>

            {/* Info rows */}
            <motion.div custom={4} variants={fadeUp} className="mb-5">
              {[
                { label: "Role",       value: "Full-Stack Developer" },
                { label: "Experience", value: "1+ Years" },
                { label: "Location",   value: "Karachi, Pakistan" },
                { label: "Email",      value: "tariq.official1712@gmail.com" },
              ].map(({ label, value }) => (
                <div key={label} className="info-row">
                  <span className="info-label">{label}</span>
                  <span className="info-value">{value}</span>
                </div>
              ))}
            </motion.div>

            {/* Availability badge */}
            <motion.div
              custom={5}
              variants={fadeUp}
              className="flex items-center gap-2.5 mb-8"
            >
              <span className="status-pulse w-2.5 h-2.5 rounded-full bg-[#009087] block" />
              <span className="text-sm font-medium text-gray-600">
                Available for Work
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              custom={6}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact" className="btn-primary-about">
                Contact Me
              </a>
              <a href="/MyResume.docx" download className="btn-secondary-about">
                Download Resume
              </a>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default AboutSection;
