import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShow(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav
      className={`fixed  left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ${
        show ? "translate-y-0 top-5" : "-translate-y-full top-0"
      }`}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center gap-6 bg-white/90 backdrop-blur-md rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-opacity-95">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="text-gray-700 hover:text-gray-900 px-4 py-1 rounded-full transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md font-medium"
          >
            {section}
          </a>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-300"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}

        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 px-6 py-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-md flex flex-col gap-2"
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="capitalize py-2 px-2 rounded-md hover:bg-gray-100 transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {section}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
