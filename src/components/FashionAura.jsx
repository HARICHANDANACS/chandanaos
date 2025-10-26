import { motion } from "framer-motion";

export default function FashionAura() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/10 to-blue-400/20 blur-[160px]"
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "20%", left: "15%" }}
      />
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/10 to-purple-300/20 blur-[180px]"
        animate={{ x: [0, -120, 80, 0], y: [0, 120, -80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "10%", right: "10%" }}
      />
    </div>
  );
}
