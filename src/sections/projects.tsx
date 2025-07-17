import ProjectCard from "../components/ProjectCard"
import Title from "../components/Title"
import { persoProjects, proProjects } from "../constants/projects"

export default function Projects() {

    return (
        <section>
            <div className="w-full px-16">
                <Title title="Projects" />
                <div className="flex items-center justify-center flex-col gap-2s">
                    <h1 className="text-2xl font-bold mb-2">Profession Projects</h1>
                    {
                        proProjects.map((project, ind) => (
                            <ProjectCard project={project} index={ind} />
                        ))
                    }

                    <h1 className="text-2xl font-bold mb-2">Personal Projects</h1>
                    {
                        persoProjects.map((project, ind) => (
                            <ProjectCard project={project} index={ind} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}