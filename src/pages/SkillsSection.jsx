import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiMongodb, SiExpress, SiPostman } from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90, icon: <FaReact /> },
      { name: "JavaScript", level: 85, icon: <FaJs /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss /> },
      { name: "HTML & CSS", level: 95, icon: <FaHtml5 /> },
      { name: "Framer Motion", level: 80, icon: <SiFramer /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75, icon: <FaNodeJs /> },
      { name: "Express.js", level: 78, icon: <SiExpress /> },
      { name: "MongoDB", level: 72, icon: <SiMongodb /> },
      { name: "REST APIs", level: 80, icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 85, icon: <FaGitAlt /> },
      { name: "Postman", level: 75, icon: <SiPostman /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full px-6 py-24 bg-gradient-to-b from-white to-gray-50 text-gray-900 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">
            My <span className="text-gray-900">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-lg text-base">
            Technologies and tools I use to build scalable, performant, and
            visually polished applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-6">
                {group.title}
              </h3>

              <div className="space-y-6">
                {group.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-gray-800">
                          {skill.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-[#006f68] via-[#009087] to-[#00b3a4]


 "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
