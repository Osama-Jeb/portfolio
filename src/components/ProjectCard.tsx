interface ProjectCardProps {
    index: number,
    project: Project
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const reverse = index % 2 === 0

    return (
        <div className={`mb-12 flex text-center text-balance sm:text-start items-center flex-col sm:flex-row gap-5 p-12 ${reverse ? 'sm:flex-row-reverse' : ''}`}>
            <div className="shadow-2xl rounded-2xl relative right-0 group"
            >
                <img className="rounded-2xl" src={project.preview} alt={project.name} loading="lazy" />
            </div>


            <div
                className={`flex w-fit flex-col gap-3 relative top-0 ${reverse ? '' : 'sm:items-end sm:text-end'}`}>
                <p className="text-3xl font-bold">{project.name}</p>

                <p className="">{project.desc}</p>
                <div className="flex flex-wrap gap-3 items-center">Made with:
                    {
                        project.techs.map((tech, index) =>
                            <span key={index} className={`btn btn-sm text-gray-800 font-bold ${tech.color} rounded-2xl`}>
                                {tech.name}
                            </span>
                        )
                    }
                </div>


                <div className="flex items-center gap-4 mt-5 sm:justify-normal justify-around">
                    <div>
                        <a
                            href={project.client ? project.clientWebsite : project.website}
                            target="_blank"
                            rel="nonreferrer"
                            className="btn btn-sm btn-outline bg-white text-black rounded-2xl">
                            {project.client ? 'Client ' + project.client : 'Demo'}
                        </a>
                        <a
                            href={project.client ? project.website : project.github}
                            target="_blank"
                            rel="nonreferrer"
                            className="ms-2 mt-2 btn btn-sm btn-neutral  btn-outline rounded-2xl">
                            {project.client ? 'The Website' : 'Github Repository'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}