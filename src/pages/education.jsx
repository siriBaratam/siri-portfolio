

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Gayatri Vidya Parishad College of Engineering",
    duration: "2025 – 2028",
    description:
      "Focused on core computer science subjects including data structures, algorithms, databases, and web technologies, with active participation in technical events and projects.",
    highlights: [
      // "CGPA: -",
      "Selected as Web Development Lead in AsCI",
    ],
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic Srikakulam",
    duration: "2022 – 2025",
    description:
      "Studied Physics, Chemistry, Mathematics and computer subjects basics, building a strong analytical and problem-solving foundation.",
    highlights: ["CGPA: 9.5", "Selected as an Apprentice at Thoughtworks."],
  },
];

const Education = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#05050f] via-[#13315C] to-[#05050f] py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Title */}
        <h2 className="mb-10 text-center text-3xl font-bold text-indigo-400 sm:text-4xl">
          Education
        </h2>

        {educationData.map((edu, index) => (
          <div
            key={index}
            className="rounded-3xl border border-indigo-500/10 bg-[#0b0b1f]/70 p-8 transition border-indigo-500/15 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 mt-5"
          >
            <div className="flex items-start gap-6">

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/20 text-xl">
                🎓
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>

                <p className="mt-1 text-indigo-400">
                  {edu.institution}
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                  <span>📅</span>
                  <span>{edu.duration}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {edu.description}
                </p>

                {/* Highlights */}
                <ul className="mt-6 space-y-3 text-sm text-gray-300">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-indigo-400">🏅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;
