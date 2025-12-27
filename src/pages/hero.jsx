const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#0b0b1f] via-[#1a1240] to-[#05050f] flex items-center justify-center text-center">
      
      {/* Glow container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-700/30 blur-3xl"></div>
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-indigo-700/30 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Siri Baratam
        </h1>

        <h2 className="mb-6 text-lg font-medium text-purple-300 sm:text-xl">
          Proactive CSE Student & Web Developer
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
          Crafting innovative digital experiences with modern web technologies.
          Passionate about creating seamless user interfaces and solving complex problems.
        </p>

        <button className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-8 py-3 text-sm font-medium text-white transition hover:bg-purple-500/10 hover:border-purple-400">
          View My Work
          <span className="text-lg">↓</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
