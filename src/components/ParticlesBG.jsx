import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBG() {
  const particlesInit = async (main) => await loadFull(main);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 70 },
          color: { value: ["#a855f7", "#06b6d4", "#f9a8d4", "#c084fc"] },
          move: { enable: true, speed: 0.5 },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
          twinkle: { particles: { enable: true, frequency: 0.05, opacity: 0.6 } },
        },
        detectRetina: true,
      }}
      className="fixed top-0 left-0 w-full h-full -z-20"
    />
  );
}
