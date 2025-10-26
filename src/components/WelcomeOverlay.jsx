import { motion } from "framer-motion";

export default function WelcomeOverlay() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-[90] text-2xl md:text-4xl font-light tracking-widest"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 4 }}
    >
      <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        ✨ Welcome to ChandanaOS ✨
      </span>
    </motion.div>
  );
}
