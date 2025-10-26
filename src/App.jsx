import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBG from "./components/ParticlesBG";
import FashionAura from "./components/FashionAura";
import CursorGlow from "./components/CursorGlow";
import WelcomeOverlay from "./components/WelcomeOverlay";
import BootScreen from "./components/BootScreen";
import TechStack from "./components/TechStack";
import Journey from "./components/Journey";


export default function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#021018]/90 via-[#071029]/90 to-[#05060a]/90 text-white scroll-smooth overflow-x-hidden">

      {/* Show BootScreen + WelcomeOverlay before main site loads */}
      {!bootComplete && (
        <>
          <BootScreen onFinish={() => setBootComplete(true)} />
          <WelcomeOverlay />
        </>
      )}

      {/* Main Portfolio - fades in after boot */}
      {bootComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ParticlesBG />
          <FashionAura />
          <CursorGlow />
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Journey />
          <TechStack />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
