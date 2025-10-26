import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center min-h-[90vh] px-6 relative">
      <motion.div className="relative flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-pink-500/20 via-purple-400/20 to-cyan-400/20 blur-[100px] animate-pulse"></div>
        <motion.h1
          className="relative text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-[1.03] transition-transform cursor-default"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          C. S. Hari Chandana
        </motion.h1>
      </motion.div>

      <motion.h2 className="mt-3 text-xl md:text-2xl text-gray-300" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}>
        AI & DevOps Engineer | Creative Technologist
      </motion.h2>

      <motion.p className="mt-5 max-w-2xl text-gray-400 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
        Passionate about building intelligent, cloud-native systems that combine automation, creativity, and AI for impactful digital experiences.
      </motion.p>

      <motion.div className="mt-8 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <a href="https://github.com/HARICHANDANACS" target="_blank" className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all glow-hover">
          <Github className="w-5 h-5" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/harichandanacs/" target="_blank" className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all glow-hover">
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
      </motion.div>

      <motion.div className="absolute bottom-6 text-gray-400 animate-bounce text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        ↓ Scroll Down
      </motion.div>
    </section>
  );
}
