import { projects } from "./constant.jsx"

function Projects() {
  return (
    <section id="projects" className="bg-zinc-950 antialiased pb-20 max-md:-mt-30 md:-mt-52">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
        My Projects
      </h2>
      <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        A collection of my latest work showcasing full-stack and AI-powered solutions
      </p>

      <div className="relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky flex items-center justify-center py-8"
            style={{
              top: `${40 + index * 30}px`,
            }}
          >
            <div className="max-w-4xl w-full mx-auto px-4">
              <div
                className={`group relative ${project.color} rounded-2xl overflow-hidden border border-pink-500/30 transition-all duration-500`}
              >
                {/* Background accent effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-contain max-lg:object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/20 lg:to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-300">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-1/2 p-6 lg:p-8 relative z-10">
                    <h3 className="text-2xl lg:text-3xl max-md:text-[18px] font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6 max-md:text-[12px]">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full bg-gray-800/60 border border-gray-700 text-gray-300 hover:bg-gray-700/60 hover:border-pink-500/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-sm font-medium"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-tr-2xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
