import { motion } from "framer-motion";
import resumePDF from "../assets/chandana_resume.pdf";

export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-white/10 mt-20 bg-gradient-to-b from-transparent to-black/40">
      <motion.h2
        className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect 💫
      </motion.h2>

      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://github.com/HARICHANDANACS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-400 transition-all"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/harichandanacs/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition-all"
        >
          LinkedIn
        </a>
        <a
          href="mailto:harichandana349@gmail.com"
          className="text-gray-300 hover:text-pink-400 transition-all"
        >
          Email
        </a>
      </div>

      {/* Resume Download Button */}
      <motion.a
        href={resumePDF}
        download="Chandana_Resume.pdf"
        className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 text-black font-semibold hover:scale-105 transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)]"
        whileTap={{ scale: 0.95 }}
      >
        📄 Download Resume
      </motion.a>

      <p className="text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} C. S. Hari Chandana — All Rights Reserved
      </p>
    </footer>
  );
}
