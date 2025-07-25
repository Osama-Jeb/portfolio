import ProjectCard from "../components/ProjectCard"
import Title from "../components/Title"
import { persoProjects, proProjects } from "../constants/projects"
interface ProjectsProps {
    onProjectSelect?: (project: Project) => void
}

export default function Projects({ onProjectSelect }: ProjectsProps) {
    return (
        <section id="projects" className="min-h-screen py-16 lg:py-24">
            <div className="px-4 sm:px-6 lg:px-8">
                <Title title="Projects" />

                <div className="mt-12 lg:mt-16 space-y-8">
                    {/* Professional Projects */}
                    <div className="space-y-8">
                        <h2 className="text-2xl lg:text-3xl font-bold underline mb-8">
                            Professional Projects
                        </h2>
                        {proProjects.map((project, ind) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={ind}
                                onProjectSelect={onProjectSelect}
                                type="pro"
                            />
                        ))}
                    </div>

                    {/* Personal Projects */}
                    <div className="space-y-8 mt-16">
                        <h2 className="text-2xl lg:text-4xl font-bold underline mb-8">
                            Personal Projects
                        </h2>
                        <div className="grid grid-cols-2 gap-2">
                            {persoProjects.map((project, ind) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={ind + proProjects.length}
                                    onProjectSelect={onProjectSelect}
                                    type="perso"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
