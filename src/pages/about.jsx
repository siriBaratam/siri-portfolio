const About = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#05050f] via-[#0b0b1f] to-[#05050f] py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 md:flex-row">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="mb-6 text-3xl font-bold text-indigo-400 sm:text-4xl">
            About Me
          </h2>

          <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
            I'm a passionate Computer Science Engineering student with a keen
            interest in web development and user experience design. Currently
            pursuing my B.Tech, I've dedicated myself to mastering modern web
            technologies and creating impactful digital solutions.
          </p>

          <p className="mb-8 text-sm leading-relaxed text-gray-300 sm:text-base">
            My strengths lie in rapid prototyping, workflow design, and bringing
            ideas to life through clean, efficient code. 
            {/* I'm also an avid
            podcaster, sharing insights about technology and development with a
            growing community. */}
          </p>

          {/* Fun Fact */}
          {/* <div className="flex items-center gap-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm text-gray-200">
            <span className="text-indigo-400">💡</span>
            <span>
              <strong>Fun Fact:</strong> I can code for 12 hours straight fueled
              by coffee and lo-fi beats!
            </span>
          </div> */}
          <div className="flex flex-wrap justify-evenly gap-4">
            <a
              href="src/assets/siri_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-6 py-3 text-sm font-medium text-indigo-300 transition hover:bg-indigo-500/20 hover:text-white"
            >
              View Resume
              <span className="text-lg">👁️</span>
            </a>
            <a
              href="src/assets/siri_resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-6 py-3 text-sm font-medium text-indigo-300 transition hover:bg-indigo-500/20 hover:text-white right-0"
            >
              Download Resume
              <span className="text-lg">⬇️</span>
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="flex flex-1 justify-center">
          <div className="relative rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-1">
            <div className="rounded-full bg-[#0b0b1f] p-4 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10">
              <img
                src="src\assets\profile1.jpeg" // replace with your image path
                alt="Profile"
                className="h-72 w-72 rounded-full object-cover sm:h-80 sm:w-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
