const experiences = [
  {
    title: "Thoughtworks Global tech consultancy",
    subtitle: "Apprentice(Remote)",
    description:
      "Developed ThoughtStream, a web platform named AEROTALES for idea sharing, using React.js, JavaScript,and CSS.",
  },
  {
    title: "Technical Web Dev Lead - AsCI",
    subtitle: "2025 - Present",
    description:
      "Delivered hands-on workshops to improve practical skills.Produced web development learning content and assisted in organizing and managing events.",
  },
  {
    title: "Techno vision 2k25",
    subtitle: "Code war Runner",
    description:
      "Secured Runner-Up position in CodeWar at Technovision 2K25, a technical fest organized by AITHEM College.",
  }
];

const Experience = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#05050f] via-[#0b0b1f] to-[#05050f] py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Title */}
        <h2 className="mb-20 text-center text-3xl font-bold text-indigo-400 sm:text-4xl">
          Experience & Achievements
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-indigo-500/30"></div>

          <div className="space-y-20">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 top-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-indigo-400"></div>

                {/* Card */}
                <div
                  className={`w-full md:w-[45%] rounded-2xl border border-indigo-500/10 bg-[#0b0b1f]/70 p-6 transition hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 ${
                    index % 2 === 0
                      ? "md:mr-auto md:text-right"
                      : "md:ml-auto md:text-left"
                  }`}
                >
                  <h3 className="mb-1 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <span className="mb-3 inline-block text-sm text-indigo-400">
                    {item.subtitle}
                  </span>

                  <p className="text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
