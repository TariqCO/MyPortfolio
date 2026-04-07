import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";

const projects = [
  {
    title: "Crypto Prediction Platform",
    description:
      "AI-powered crypto prediction engine with live fulfillment tracking and Gemini-based analysis.",
    tech: ["React", "Node", "MongoDB", "Gemini"],
    image: "/images/crypto1.PNG",
    github: "https://github.com/TariqCO/cryptoPrediction",
    link: "https://crypto-prediction-gew7.vercel.app/",
  },
  {
    title: "Invitation Site",
    description:
      "Beautiful Wedding Invitation website with RSVP features like send form response to whatsApp and save response to the client's Google sheets. ",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/images/wedding.PNG",
    github: "https://github.com/TariqCO/wedding",
    link: "https://wedding-eight-wheat-48.vercel.app/",
  },
];

export default function ProjectsSection() {
  const scrollRef = useRef(null);

  return (
    <section
      id="projects"
      className="w-full py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4 md:gap-0"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Selected Work
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Projects I’ve cooked up while exploring, experimenting, and
              leveling up my dev skills.
            </p>
          </div>

          {/* SCROLL BUTTONS */}
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() =>
                scrollRef.current.scrollBy({ left: -420, behavior: "smooth" })
              }
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() =>
                scrollRef.current.scrollBy({ left: 420, behavior: "smooth" })
              }
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* SCROLLABLE ROW */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 touch-pan-x"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="snap-start shrink-0 w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%]"
            >
              {/* CARD */}
              <div className="relative h-[340px] sm:h-[400px] md:h-[450px] rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <div className="flex gap-2">
                      {/* GitHub Button */}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur group-hover:bg-white/10 transition"
                        >
                          <Github size={18} />
                        </a>
                      )}

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur group-hover:bg-white/10 transition"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 mb-4 max-w-md">
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full bg-white/10 border border-white/20 backdrop-blur text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
