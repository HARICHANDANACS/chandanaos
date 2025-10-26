import { motion } from "framer-motion";
import { Code, Cloud, Brain, Server, Palette } from "lucide-react";

const stacks = [
  {
    icon: <Brain className="w-8 h-8 text-pink-400" />,
    title: "AI / ML",
    skills: ["Python", "TensorFlow", "Transformers", "NLP", "Hugging Face"],
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-400" />,
    title: "Cloud / DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    icon: <Code className="w-8 h-8 text-purple-400" />,
    title: "Full Stack",
    skills: ["React", "Flask", "Streamlit", "Node.js", "SQLite"],
  },
  {
    icon: <Server className="w-8 h-8 text-green-400" />,
    title: "Backend / APIs",
    skills: ["FastAPI", "Postman", "MongoDB", "Redis"],
  },
  {
    icon: <Palette className="w-8 h-8 text-yellow-400" />,
    title: "Design / UI",
    skills: ["Figma", "Canva", "TailwindCSS", "Framer Motion"],
  },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="max-w-5xl mx-auto py-20 px-6 text-center border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg shadow-cyan-500/10 mt-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
        Tech Stack & Preferences ⚙️
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {stacks.map((stack, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl bg-gray-900/60 border border-gray-700 hover:border-cyan-400/40 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-3">{stack.icon}</div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">{stack.title}</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              {stack.skills.map((skill, j) => (
                <li key={j}>• {skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
