import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { journey } from "./journeyData";
import avatar from "../assets/chandana-avatar.png";

export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="journey"
      className="relative max-w-5xl mx-auto py-20 px-6 text-center overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
        My Journey 🌙
      </h2>

      <svg
        viewBox="0 0 800 800"
        className="w-full h-[600px] md:h-[800px] absolute left-0 top-0 opacity-30"
      >
        <path
          id="journeyPath"
          d="M100,700 Q400,200 700,600"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      <motion.img
        src={avatar}
        alt="Chandana Avatar"
        className="absolute w-16 h-16 rounded-full border-2 border-pink-400 shadow-lg"
        style={{ top: y, left: "50%", x: "-50%" }}
      />

      <div className="mt-80 md:mt-[700px] space-y-12">
        {journey.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="text-left md:text-center"
          >
            <h3 className="text-pink-300 text-lg font-semibold">{item.year}</h3>
            <p className="text-white text-xl font-medium">{item.title}</p>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
