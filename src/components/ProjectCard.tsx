
import { Link } from 'react-router-dom'

interface ProjectCardProps {
    index: number,
    project: Project,
    type: string,
}

export default function ProjectCard({ project, index, type }: ProjectCardProps) {
    const reverse = index % 2 === 0

    return (
        <div
            className={`group mb-16 flex flex-col lg:flex-row gap-8 ${reverse ? 'lg:flex-row-reverse' : ''} 
                       bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm 
                       rounded-3xl p-6 lg:p-8 border border-gray-700/50 
                       hover:border-alpha/50 transition-all duration-500 hover:shadow-2xl hover:shadow-alpha/10`}>

            {/* Project Image */}
            {type == "pro" && (
                <div className="lg:w-1/2 relative overflow-hidden rounded-2xl">
                    <img
                        className="transition-transform duration-700 group-hover:scale-105"
                        src={project.preview}
                        alt={project.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}

            {/* Project Content */}
            <div className={`${type == "pro" ? "lg:w-1/2" : "w-full"} flex flex-col justify-center space-y-6`}>
                <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-alpha group-hover:text-alpha/80 transition-colors">
                        {project.name}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                        {project.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.techs.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color} 
                                          transition-transform hover:scale-105`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                        {project.website && (
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-alpha hover:text-alpha/80 transition-colors font-medium"
                            >
                                Live Demo →
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-300 transition-colors font-medium"
                            >
                                GitHub →
                            </a>
                        )}
                    </div>

                    {/* View Details Button */}
                    <Link
                        to={`/project/${project.id}`}
                        className="inline-block w-full mt-4 
                                  border bg-gradient-to-r px-4 py-3 rounded-xl text-center
                                 font-medium from-alpha/30 to-alpha/20 border-alpha/50 transition-all duration-300 
                                 hover:shadow-lg hover:shadow-alpha/10 hover:from-alpha/40 hover:to-alpha/30"
                    >
                        View Project Details
                    </Link>
                </div>
            </div>
        </div>
    )
}
