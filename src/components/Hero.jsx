export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
        C. S. Hari Chandana
      </h1>

      <h2 className="mt-3 text-xl md:text-2xl text-gray-300">
        AI & DevOps Engineer | Creative Technologist
      </h2>

      <p className="mt-4 max-w-2xl text-gray-400">
        I’m passionate about building intelligent cloud-native systems that
        combine automation, creativity, and AI for impact.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="https://github.com/HARICHANDANACS"
          target="_blank"
          className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm font-semibold"
        >
          🌐 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/harichandanacs/"
          target="_blank"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-sm font-semibold"
        >
          💼 LinkedIn
        </a>
      </div>
    </section>
  );
}
