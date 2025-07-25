
interface ProjectDetailsProps {
    project: Project
    onBack: () => void
}

export default function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
    return (
        <div className="min-h-screen py-16 lg:py-24">
            <div className="px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="mb-8 inline-flex items-center gap-2 text-alpha hover:text-alpha/80 
                             transition-colors group"
                >
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Projects
                </button>

                {/* Project Header */}
                <div className="mb-12">
                    <h1 className="text-4xl lg:text-6xl font-bold text-alpha mb-6">
                        {project.name}
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <img 
                                src={project.preview} 
                                alt={project.name}
                                className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                            />
                        </div>
                        <div className="space-y-6">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                {project.detailedDesc || project.desc}
                            </p>
                            
                            {project.timeline && (
                                <div>
                                    <h3 className="text-lg font-semibold text-alpha mb-2">Timeline</h3>
                                    <p className="text-gray-300">{project.timeline}</p>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {project.techs.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="bg-gradient-to-r from-gray-800 to-gray-700 
                                                 text-gray-200 px-3 py-1.5 rounded-full text-sm font-medium
                                                 border border-gray-600/50"
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-white text-black 
                                                 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 
                                                 transition-all duration-300"
                                    >
                                        GitHub
                                    </a>
                                )}
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border-2 border-alpha 
                                             text-alpha px-4 py-2 rounded-xl font-medium 
                                             hover:bg-alpha hover:text-black transition-all duration-300"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {project.challenges && (
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                                      backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-alpha mb-4">Challenges</h3>
                            <ul className="space-y-3">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-alpha rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-gray-300">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.solutions && (
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                                      backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-alpha mb-4">Solutions</h3>
                            <ul className="space-y-3">
                                {project.solutions.map((solution, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-alpha rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-gray-300">{solution}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.keyFeatures && (
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                                      backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-alpha mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {project.keyFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-alpha rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.lessonsLearned && (
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                                      backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-alpha mb-4">Lessons Learned</h3>
                            <ul className="space-y-3">
                                {project.lessonsLearned.map((lesson, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-alpha rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-gray-300">{lesson}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {project.futureImprovements && (
                    <div className="mt-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                                  backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                        <h3 className="text-2xl font-bold text-alpha mb-4">Future Improvements</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.futureImprovements.map((improvement, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-alpha rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-gray-300">{improvement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}