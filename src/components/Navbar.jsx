import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-black/40 border-b border-gray-800 shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <motion.h1
          className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
          onClick={() => scrollToSection("hero")}
        >
          ChandanaOS 💫
        </motion.h1>

        <ul className="flex gap-6 text-gray-300 text-sm font-medium">
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-purple-400 transition-all"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer hover:text-purple-400 transition-all"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-purple-400 transition-all"
          >
            Contact
          </li>
          <li>
            <a
              href="https://github.com/HARICHANDANACS"
              target="_blank"
              className="px-3 py-1 rounded-full border border-purple-500/40 hover:bg-purple-500/20 hover:text-purple-300 transition-all"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
