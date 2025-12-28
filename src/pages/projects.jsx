const projects = [
  {
    title: "NCC Website",
    description:
      "A comprehensive platform for National Cadet Corps featuring event management, registration system, and member portal.",
    image: "src/assets/projects/ncc.png",
    tech: ["React", "Tailwind", "Node.js","Express", "MySql"],
    code: "#",
    demo: "#",
  },
  {
    title: "College Portal",
    description:
      "Integrated student management system with attendance tracking, grade management, and communication tools.",
    image: "src/assets/projects/gpt.png",
    tech: ["React", "Tailwind", "Node.js", "MySql"],
    code: "#",
    demo: "#",
  },
  {
    title: "Photography Landing Page",
    description:
      "Stunning portfolio website for professional photographers with gallery, booking system, and client testimonials.",
    image: "src/assets/projects/photography.png",
    tech: ["Next.js", "Tailwind", "EmailJS"],
    code: "#",
    demo: "#",
  },
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience, designed with a modern UI and responsive layout.",
    image: "src/assets/projects/portfolio.png",
    tech: ["React", "Tailwind"],
    code: "#",
    demo: "#",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#05050f] via-[#13315C] to-[#05050f] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Title */}
        <h2 className="mb-14 text-center text-3xl font-bold text-indigo-400 sm:text-4xl">
          Featured Projects
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-indigo-500/10 bg-[#0b0b1f]/70 transition "
            >
              {/* Image */}
              <div className="overflow-hidden hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-300 "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm text-gray-400">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links 
                <div className="flex items-center gap-6 text-sm text-gray-300">
                  <a
                    href={project.code}
                    className="flex items-center gap-1 hover:text-indigo-400"
                  >
                    <span>💻</span> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 hover:text-indigo-400"
                  >
                    <span>🔗</span> Live Demo
                  </a>
                </div>
                */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
