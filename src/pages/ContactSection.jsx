import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUp, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function ContactSection() {
  // Smooth scroll function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="w-full py-24 bg-background flex justify-center relative"
    >
      <div className="max-w-4xl w-full px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to connect? I’m always open to
            discussing new ideas and opportunities.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card
          shadow-sm hover:shadow-lg transition p-8 md:p-10"
        >
          {/* Email */}
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Reach me at</p>
              <p className="text-lg font-medium">
                tariq.official1712@gmail.com
              </p>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&to=tariq.official1712@gmail.com"
              target="_blank"
              className="inline-flex items-center gap-2
              px-6 py-3 rounded-full text-sm font-medium
              bg-foreground text-background
              hover:opacity-90 transition"
            >
              <Mail size={16} />
              Send Email
            </a>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-border" />

          {/* Social Links */}
          <div className="flex items-center justify-between flex-wrap gap-6">
            <p className="text-sm text-muted-foreground">Find me on</p>

            <div className="flex gap-4">
              <a
                href="https://github.com/TariqCO"
                target="_blank"
                className="w-10 h-10 rounded-full border border-border
flex items-center justify-center
transition-all duration-300 ease-out
hover:bg-[#181717] hover:text-white hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/tariq-1712tr"
                target="_blank"
                className="w-10 h-10 rounded-full border border-border
flex items-center justify-center
transition-all duration-300 ease-out
hover:bg-[#0A66C2] hover:text-white hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/__tariqrasheed__/"
                target="_blank"
                className="w-10 h-10 rounded-full border border-border
flex items-center justify-center
transition-all duration-300 ease-out
hover:bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]
hover:text-white hover:scale-110"
                aria-label="LinkedIn"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/923711175464"
                target="_blank"
                className="w-10 h-10 rounded-full border border-border
flex items-center justify-center
transition-all duration-300 ease-out
hover:bg-[#25D366] hover:scale-110 hover:text-white"
                aria-label="WhatsApp"
              >
                {/* <MessageCircle size={18} /> */}
                <FaWhatsapp fontSize={22} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-10"
        >
          © {new Date().getFullYear()} Tariq. Built with React & Tailwind CSS.
        </motion.p>
      </div>

      {/* Back to Top Button */}

     
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full shadow-lg 
        flex items-center justify-center hover:bg-zinc-900 transition-transform hover:scale-102 z-50"
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </button>
    </section>
  );
}
