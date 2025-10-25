import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "../data/profileData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-20 px-6 text-center border-t border-gray-800"
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-[#0c0e12] p-6 rounded-2xl border border-gray-800 shadow-md hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-2">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{p.description}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300 border border-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.github}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-400"
            >
              <Github className="w-4 h-4" /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
