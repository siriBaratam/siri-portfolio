const skillsData = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 98 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: "🗄️",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "MySql", level: 82 },
      { name: "Sequelize", level: 90 },
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 94 },
      { name: "EmailJS", level: 87 },
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 96 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#05050f] via-[#0b0b1f] to-[#05050f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <h2 className="mb-16 text-center text-3xl font-bold text-indigo-400 sm:text-4xl">
          Skills & Technologies
        </h2>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-indigo-500/10 bg-[#0b0b1f]/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-xl">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="mb-1 flex justify-between text-sm text-gray-300">
                      <span>{skill.name}</span>
                      <span className="text-indigo-400">{skill.level}%</span>
                    </div>

                    <div className="h-2 w-full rounded-full bg-indigo-500/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-700 group-hover:opacity-100"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
