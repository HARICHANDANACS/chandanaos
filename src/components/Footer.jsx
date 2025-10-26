import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import resumePDF from "../assets/chandana_resume.pdf";

export default function Footer() {
  const [treats, setTreats] = useState(0);
  const [wag, setWag] = useState(false);
  const [hover, setHover] = useState(false);

  // 🐾 Remember treats between sessions
  useEffect(() => {
    const savedTreats = localStorage.getItem("puppyTreats");
    if (savedTreats) setTreats(parseInt(savedTreats));
  }, []);

  const feedPuppy = () => {
    const newCount = treats + 1;
    setTreats(newCount);
    localStorage.setItem("puppyTreats", newCount);
    setWag(true);
    setTimeout(() => setWag(false), 800);
  };

  return (
    <footer className="py-12 text-center border-t border-white/10 mt-20 bg-gradient-to-b from-transparent to-black/40">
      <motion.h2
        className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect 💫
      </motion.h2>

      {/* 🌐 Social Links */}
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

      {/* 📄 Resume Download */}
      <motion.a
        href={resumePDF}
        download="Chandana_Resume.pdf"
        className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 text-black font-semibold hover:scale-105 transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)]"
        whileTap={{ scale: 0.95 }}
      >
        📄 Download Resume
      </motion.a>

      {/* 🐶 Puppy Treat Section */}
      <div className="mt-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 mb-4"
        >
          If you liked my portfolio, let’s feed the puppy 🐶💖
        </motion.p>

        <motion.button
          onClick={feedPuppy}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          whileTap={{ scale: 0.9 }}
          animate={
            wag
              ? { rotate: [0, -10, 10, -10, 10, 0] }
              : hover
              ? {
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 10px rgba(236,72,153,0.5)",
                    "0 0 20px rgba(6,182,212,0.4)",
                    "0 0 10px rgba(236,72,153,0.5)",
                  ],
                }
              : {}
          }
          transition={{ duration: 0.8, repeat: hover ? Infinity : 0 }}
          className="relative px-5 py-2 bg-pink-500/30 hover:bg-pink-500/50 text-pink-200 rounded-full border border-pink-400/30 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all duration-300"
        >
          🐶 Feed Puppy {treats > 0 ? `x${treats}` : ""}
          {hover && (
            <motion.span
              className="absolute inset-0 rounded-full bg-pink-400/10 blur-xl"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.span>
          )}
        </motion.button>
      </div>

      <p className="text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} C. S. Hari Chandana — All Rights Reserved 🪶
      </p>
    </footer>
  );
}
