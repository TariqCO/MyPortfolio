import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full px-6 py-20 bg-gray-50 text-gray-900 flex justify-center"
    >
      <div className="max-w-5xl w-full">
        {/* ------------------------------------- */}
        {/* SECTION HEADING */}
        {/* ------------------------------------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          My <span className="font-extrabold text-black">Experience</span>
        </motion.h2>

        {/* ------------------------------------- */}
        {/* TIMELINE WRAPPER */}
        {/* ------------------------------------- */}
        <div className="relative border-l border-gray-300 pl-6 md:pl-10 space-y-14">
          {experienceList.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Dot Marker */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute -left-[29px] md:-left-[34px] w-4 h-4 bg-black rounded-full border-4 border-gray-50 shadow-md"
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all cursor-default"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {exp.role}
                </h3>

                <p className="text-sm text-gray-500 mt-1">{exp.company}</p>
                <p className="text-xs text-gray-400 mb-4">{exp.duration}</p>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] bg-gray-100 border rounded-full text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

/* ------------------------------------------------- */
/* EXPERIENCE DATA (Easily Editable) */
/* ------------------------------------------------- */

const experienceList = [
  {
    role: "Web Developer (Intern)",
    company: "IWS Solutions",
    duration: "2024 - 2025",
    description:
      "Worked on real-world MERN applications, optimized UI layouts, and implemented reusable components for production-level projects.",
    skills: ["HTML", "CSS", "Node.js", "MongoDB", "React.js", "MySql"],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    duration: "2023 - Present",
    description:
      "Building responsive, visually polished web interfaces focused on performance and modern UI principles. Handling client projects with complete frontend architecture.",
    skills: ["React.js", "JavaScript", "Tailwind", "APIs"],
  },
];
