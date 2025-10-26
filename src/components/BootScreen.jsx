import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BootScreen({ onFinish }) {
  const [lines, setLines] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const bootLines = [
    "[  OK  ] Booting ChandanaOS v1.0...",
    "         Loading core modules: ai-core.service, neural-netd.service",
    "[  OK  ] Mounted /dev/creativity",
    "         Starting FashionKernel v2.3...",
    "[  OK  ] Initializing DevOps Daemon (systemctl enable cloud-init)",
    "         Loading User Profile: chandana@localhost",
    "[  OK  ] Activated Cosmic Visual Interface (GPU-Render: active)",
    "[  OK  ] System Ready — Welcome, Chandana ✨"
  ];

  useEffect(() => {
    let index = 0;
    const delay = 400; // delay per line
    const timer = setInterval(() => {
      setLines((prev) => [...prev, bootLines[index]]);
      index++;
      if (index === bootLines.length) {
        clearInterval(timer);
        setIsDone(true);
        setTimeout(() => onFinish(), 800);
      }
    }, delay);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[100]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isDone ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-green-400 font-mono text-[13px] md:text-[15px] leading-relaxed bg-black/70 px-6 py-5 rounded-lg border border-green-600/30 shadow-[0_0_20px_rgba(34,197,94,0.25)] w-[90%] md:w-[600px]">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {!isDone && <span className="animate-pulse">█</span>}
      </div>
    </motion.div>
  );
}
