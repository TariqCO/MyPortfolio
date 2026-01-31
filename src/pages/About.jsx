import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom"; // For navigation

const About = () => {
  return (
    <section className="w-full px-6 py-24 bg-gray-50 text-gray-900 flex justify-center">
      <div className="max-w-6xl w-full flex items-center flex-col md:flex-row gap-12 md:items-center">
        {/* IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center md:justify-start"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="./public/images/profile2.jpeg" 
              alt="Tariq Profile"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Social Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex  justify-center gap-6 mt-4 text-gray-700 text-2xl mb-8"
          >
            <a
              href="https://github.com/TariqCO"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition transform hover:scale-110"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tariq-1712tr"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition transform hover:scale-110"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=tariq.official1712@gmail.com"
              target="_blank"
              className="hover:text-black transition transform hover:scale-110"
            >
              <FiMail />
            </a>
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
          className="flex flex-col flex-1"
        >
          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left"
          >
            About <span className="font-extrabold text-black">Me</span>
          </motion.h1>

          {/* Full Bio */}
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
          >
            I’m Tariq, a passionate Web Developer dedicated to building{" "}
            <span className="font-medium">
              modern, high-performance, and user-friendly web applications
            </span>
            . I specialize in{" "}
            <span className="font-medium">React, JavaScript, Tailwind CSS</span>
            , and modern UI frameworks, creating clean, responsive, and
            functional interfaces that deliver seamless user experiences.
            <br />
            <br />I thrive on{" "}
            <span className="font-medium">
              learning and adapting to new technologies
            </span>
            , exploring innovative tools and frameworks to enhance application
            performance, scalability, and usability. I enjoy integrating{" "}
            <span className="font-medium">AI-powered features</span> into
            websites to create smarter, more dynamic digital experiences.
            <br />
            <br />
            My approach combines{" "}
            <span className="font-medium">
              creative design, efficient coding, and problem-solving
            </span>
            , turning ideas into{" "}
            <span className="font-medium">
              practical, scalable, and polished digital solutions
            </span>
            . Whether it’s building interactive frontends, connecting APIs, or
            implementing intelligent features, I strive to deliver web
            experiences that are both functional and enjoyable.
            <span className="block mt-3 text-gray-400 italic text-sm">
              ~ ChatGPT
            </span>
          </motion.p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-zinc-900 shadow-lg transition"
          >
            <FiArrowLeft />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
