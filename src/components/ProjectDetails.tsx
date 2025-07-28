
import { Link } from 'react-router-dom'

interface ProjectDetailsProps {
    project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <div className="min-h-screen py-16 lg:py-24">
            <div className="px-4 sm:px-6 lg:px-8">
                {/* back btn */}
                <Link
                    to="/"
                    className="mb-8 inline-flex items-center gap-2 text-alpha hover:text-alpha/80 transition-colors group"
                >
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Projects
                </Link>

                {/* proj header */}
                <div className="mb-12">
                    <h1 className="text-4xl lg:text-6xl font-bold text-alpha mb-6">
                        {project.name}
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <img
                                src={project.preview}
                                alt={project.name}
                                className="w-full object-cover rounded-2xl"
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

                            {project.client && (
                                <div>
                                    <h3 className="text-lg font-semibold text-alpha mb-2">Client</h3>
                                    {project.clientWebsite ? (
                                        <a
                                            href={project.clientWebsite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-alpha transition-colors"
                                        >
                                            {project.client} →
                                        </a>
                                    ) : (
                                        <p className="text-gray-300">{project.client}</p>
                                    )}
                                </div>
                            )}

                            {/* links */}
                            <div className="flex gap-4">
                                {project.website && (
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-alpha text-black rounded-lg hover:bg-alpha/80 transition-colors font-medium"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-alpha hover:text-alpha transition-colors font-medium"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* tech used */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-alpha mb-6">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techs.map((tech, index) => (
                            <span
                                key={index}
                                className={`px-4 py-2 rounded-lg text-sm font-medium bg-white/10 transition-transform hover:scale-105`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* features */}
                {project.keyFeatures && (
                    <div className="mb-12 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                        <h2 className="text-2xl font-bold text-alpha mb-6">Key Features</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.keyFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-alpha mt-1">•</span>
                                    <span className="text-gray-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* challenges/solutions */}
                {(project.challenges || project.solutions) && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {project.challenges && (
                            <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
                                <h2 className="text-2xl font-bold text-alpha mb-6">Challenges</h2>
                                <ul className="space-y-3">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="text-red-400 mt-1">⚠</span>
                                            <span className="text-gray-300">{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.solutions && (
                            <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
                                <h2 className="text-2xl font-bold text-alpha mb-6">Solutions</h2>
                                <ul className="space-y-3">
                                    {project.solutions.map((solution, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span className="text-gray-300">{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* lessons learned */}
                {project.lessonsLearned && (
                    <div className="mb-12 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                        <h2 className="text-2xl font-bold text-alpha mb-6">Lessons Learned</h2>
                        <ul className="space-y-3">
                            {project.lessonsLearned.map((lesson, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-blue-400 mt-1">💡</span>
                                    <span className="text-gray-300">{lesson}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* possible improvement */}
                {project.futureImprovements && (
                    <div className="mb-12 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                        <h2 className="text-2xl font-bold text-alpha mb-6">Future Improvements</h2>
                        <ul className="space-y-3">
                            {project.futureImprovements.map((improvement, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-purple-400 mt-1">🚀</span>
                                    <span className="text-gray-300">{improvement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* more images */}
                {project.additionalImages && project.additionalImages.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-alpha mb-6">Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.additionalImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${project.name} screenshot ${index + 1}`}
                                    className="rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* return to home */}
                <div className="text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-alpha text-black rounded-lg hover:bg-alpha/80 transition-colors font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to All Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}

