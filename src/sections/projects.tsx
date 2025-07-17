import ProjectCard from "../components/ProjectCard"
import Title from "../components/Title"

export default function Projects() {
    return (
        <section>
            <div className="w-full px-16">
                <Title title="Projects" />
                <div className="flex items-center justify-center flex-col gap-2s">
                    {
                        ["1", "2", "3", "4"].map((project, ind) => (
                            <ProjectCard project={project} index={ind} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}