
interface ProjectCardProps {
    index: number,
    project: Project,
    onProjectSelect?: (project: Project) => void,
    type: string,
}

export default function ProjectCard({ project, index, onProjectSelect, type }: ProjectCardProps) {
    const reverse = index % 2 === 0

    return (
        <div
            className={`group mb-16 flex flex-col lg:flex-row gap-8 ${reverse ? 'lg:flex-row-reverse' : ''} 
                       bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm 
                       rounded-3xl p-6 lg:p-8 border border-gray-700/50 
                       hover:border-alpha/50 transition-all duration-500 hover:shadow-2xl hover:shadow-alpha/10`}>

            {/* Project Image */}
            {
                type == "pro" && (
                    <div className="lg:w-1/2 relative overflow-hidden rounded-2xl">
                        <img
                            className="transition-transform duration-700 group-hover:scale-105"
                            src={project.preview}
                            alt={project.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                )
            }

            {/* Project Content */}
            <div className={`${type == "pro" ? "lg:w-1/2" : "lg:w-full"} flex flex-col justify-between space-y-6`}>
                <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-alpha/90 group-hover:text-alpha transition-colors duration-300">
                        {project.name}
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                        {project.desc}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-3">
                        <p className="text-alpha text-lg font-semibold">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                            {project.techs.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="tech-badge-hover bg-gradient-to-r from-gray-800 to-gray-700 
                                             text-gray-200 px-3 py-1.5 rounded-full text-sm font-medium
                                             border border-gray-600/50 hover:border-alpha/50 
                                             hover:from-alpha/20 hover:to-alpha/10 cursor-default"
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Project Links */}
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <p className="text-sm uppercase tracking-wide">
                                {project.client ? 'Client' : 'Repository'}
                            </p>
                            <a
                                href={project.client ? project.clientWebsite : project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 
                                         rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 
                                         hover:scale-105 hover:shadow-lg group/link"
                            >
                                <span>{project.client || 'GitHub'}</span>
                                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm uppercase tracking-wide">Live Demo</p>
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border-2 border-alpha  
                                         px-4 py-2 rounded-xl font-medium hover:bg-alpha hover:text-black 
                                         transition-all duration-300 hover:scale-105 hover:shadow-lg 
                                         hover:shadow-alpha/25 group/link"
                            >
                                <span>Visit Site</span>
                                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* View Details Button */}
                    {onProjectSelect && (
                        <button
                            onClick={() => onProjectSelect(project)}
                            className="w-full mt-4 
                                      border bg-gradient-to-r px-4 py-3 rounded-xl 
                                     font-medium from-alpha/30 to-alpha/20 border-alpha/50 transition-all duration-300 
                                     hover:shadow-lg hover:shadow-alpha/10"
                        >
                            View Project Details
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
