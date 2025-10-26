import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto text-center py-20 px-6 border-t border-gray-800"
    >
      <motion.h2
        className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Get in Touch 💌
      </motion.h2>

      <motion.p
        className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        I’m always open to collaborating on exciting projects or discussing AI,
        DevOps, and creative tech ideas! Feel free to reach out anytime.
      </motion.p>

      <motion.div
        className="flex justify-center flex-wrap gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="mailto:harichandana349@gmail.com"
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all border border-gray-700"
        >
          <Mail className="w-5 h-5 text-purple-400" /> Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/harichandanacs/"
          target="_blank"
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all"
        >
          <Linkedin className="w-5 h-5 text-white" /> LinkedIn
        </a>
        <a
          href="https://github.com/HARICHANDANACS"
          target="_blank"
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-900 hover:bg-gray-700 border border-gray-700 transition-all"
        >
          <Github className="w-5 h-5 text-gray-300" /> GitHub
        </a>
        <a
          href="https://harichandana349.wixsite.com/my-site"
          target="_blank"
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-700 hover:bg-purple-600 transition-all"
        >
          <Globe className="w-5 h-5 text-white" /> Portfolio Site
        </a>
      </motion.div>
    </section>
  );
}
