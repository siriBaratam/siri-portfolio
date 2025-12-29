import { ArrowBigDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full bg-gradient-to-br from-[#0b0b1f] via-[#0B2545] to-[#05050f] flex items-center justify-center text-center">
      {/* Glow container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-700/30 blur-3xl"></div>
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-indigo-700/30 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-10">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Siri Baratam
        </h1>

        <h2 className="mb-6 text-lg font-medium text-purple-300 sm:text-xl">
          Proactive CSE Student & Web Developer
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
          Crafting innovative digital experiences with modern web technologies.
          Passionate about creating seamless user interfaces and solving complex
          problems.
        </p>

        {/* Social Links with Symbols */}
        <div className="mb-10 flex justify-center gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/siri-baratam-dev/"
            target="_blank"
            className="bg-[rgba(15,23,42,0.5)] border border-[#1e293b] rounded-[12px] p-3 hover:bg-[rgba(99,102,241,0.1)] hover:border-[#6366f1] transition-all"
          >
            <Linkedin className="size-5 text-[#6366f1]" />
          </a>
          <a
            href="https://github.com/siriBaratam"
            target="_blank"
            className="bg-[rgba(15,23,42,0.5)] border border-[#1e293b] rounded-[12px] p-3 hover:bg-[rgba(99,102,241,0.1)] hover:border-[#6366f1] transition-all"
          >
            <Github className="size-5 text-[#6366f1]" />
          </a>
          <a
            href="mailto:siribaratam151@gmail.com"
            aria-label="Send Email"
            className="rounded-[12px] border border-[#1e293b] bg-[rgba(15,23,42,0.5)] p-3 transition-all hover:border-[#6366f1] hover:bg-[rgba(99,102,241,0.1)]"
          >
            <Mail className="size-5 text-[#6366f1]" />
          </a>
        </div>

        {/* CTA */}
        <a href="#projects"><button className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-8 py-3 text-sm font-medium text-white transition hover:bg-purple-500/10 hover:border-purple-400 cursor-pointer">
          View My Work
        </button></a>

        {/* Floating Arrow */}
        <div className="mt-10 flex justify-center">
          <ArrowBigDown className="animate-bounce text-9xl text-purple-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
