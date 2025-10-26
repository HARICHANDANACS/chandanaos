import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto text-center py-20 px-6 border-t border-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
        About Me
      </h2>
      <p className="text-gray-300 leading-relaxed text-lg">
        I’m a final-year engineering student who bridges <b>AI</b> and <b>DevOps</b>,   
          to create intelligent, automated systems. From machine learning models 
        to cloud-native deployments, I love experimenting with ideas that merge 
        creativity, code, and innovation.
      </p>
    </motion.section>
  );
}
