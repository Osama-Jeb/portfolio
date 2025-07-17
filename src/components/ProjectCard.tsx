interface ProjectCardProps {
    index: number,
    project: string
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <div key={index}>
            <p>This is project card {project}</p>
        </div>
    )
}