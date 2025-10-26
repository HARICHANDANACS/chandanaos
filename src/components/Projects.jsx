import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "./projectsData"; // keep your projects array here

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-20 px-6 text-center border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg shadow-pink-500/10 mt-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
        Featured Projects 💻
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {visibleProjects.map((proj, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl bg-gray-900/60 border border-gray-700 hover:border-pink-400/40 transition-all shadow-[0_0_15px_rgba(236,72,153,0.15)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-pink-300 mb-2">{proj.title}</h3>
            <p className="text-gray-300 text-sm mb-3">{proj.description}</p>
            <p className="text-sm text-cyan-300 mb-3">
              {proj.tech.join(" • ")}
            </p>
            <a
              href={proj.github}
              target="_blank"
              className="inline-block px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/50 hover:bg-pink-500/30 transition-all glow-hover text-sm"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>

      {projects.length > 3 && (
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 text-black font-semibold hover:scale-105 transition-all"
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? "Show Less" : "View More"}
        </motion.button>
      )}
    </section>
  );
}
