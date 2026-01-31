import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  // Short preview bio for home page
  const previewBio =
    "I’m Tariq, a Web Developer focused on building visually polished, high-performance, and user-first digital experiences using React, JavaScript, and modern UI systems. I love creating clean and functional interfaces that users enjoy.";

  return (
    <section
      id="about"
      className="w-full px-6 py-20 bg-white text-gray-900 flex justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative oval w-70 h-70 md:w-84 md:h-84 rounded-2xl overflow-hidden
            shadow-xl hover:shadow-2xl transition"
          >
            <img
              src="./public/images/profile.jpeg"
              alt="Profile"
              className="relative z-20 w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* CONTENT AREA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col"
        >
          {/* Heading */}
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="font-extrabold text-black">Me</span>
          </motion.h2>

          {/* Bio Preview */}
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 max-w-md"
          >
            {previewBio}
          </motion.p>

          {/* Read More Link */}
          <Link
            to="/about"
            className="text-sm md:text-base font-medium text-blue-600 hover:underline mb-6"
          >
            Read More →
          </Link>

          {/* Info */}
          <div className="space-y-4 mb-6">
            <InfoRow label="Role" value="Full Stack Developer" />
            <InfoRow label="Experience" value="1+ Years" />
            <InfoRow label="Location" value="Karachi, Pakistan" />
            <InfoRow label="Email" value="tariq.official1712@gmail.com" />
          </div>

          {/* STATUS INDICATOR */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <span
              className={`w-3 h-3 rounded-full ${
                isAvailable ? "bg-green-500 animate-pulseSmooth" : "bg-gray-500"
              }`}
            ></span>
            <span className="text-sm font-medium text-gray-700">
              {isAvailable ? "Available for Work" : "Not Available"}
            </span>
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
            <button className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-900 shadow-md transition">
              Contact Me
            </button>
            </a>

            <a href="files/MyResume.pdf" download>
              <button className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 shadow-md transition">
                Download Resume
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const InfoRow = ({ label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex justify-between border-b pb-2 text-sm md:text-base"
  >
    <span className="font-medium text-gray-800">{label}</span>
    <span className="text-gray-600">{value}</span>
  </motion.div>
);

export default AboutSection;
