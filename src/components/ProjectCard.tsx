interface ProjectCardProps {
    index: number,
    project: Project
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const reverse = project.id % 2 === 0

    return (
        <div
            key={index}
            className={`mb-12 flex text-center text-balance sm:text-start items-center flex-col sm:flex-row gap-5 p-12 relative ${reverse ? 'sm:flex-row-reverse' : ''}`}>
            <div className="shadow-2xl rounded-2xl relative"
            >
                <img className="rounded-2xl w-[50vw]"
                    src={project.preview} alt={project.name} loading="lazy" />
                <div
                    className={`absolute p-10 top-[30%] ${reverse ? 'right-[-300px]' : 'left-[-300px] sm:items-end sm:text-end'}`}>
                    <div className="flex flex-col gap-3 p-2">
                        <p className="text-3xl font-bold">{project.name}</p>

                        <p className="">{project.desc}</p>
                        <div className="flex flex-wrap gap-3 items-center">Made with:
                            {
                                project.techs.map((tech, index) =>
                                    <span key={index} className={`text-gray-800 px-2 font-bold ${tech.color} rounded-2xl`}>
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
                                    className=" bg-white text-black rounded-2xl px-2">
                                    {project.client ? 'Client ' + project.client : 'Demo'}
                                </a>
                                <a
                                    href={project.client ? project.website : project.github}
                                    target="_blank"
                                    rel="nonreferrer"
                                    className="ms-2 mt-2 rounded-full border-1 px-2 ">
                                    {project.client ? 'Visit Website' : 'Github Repository'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}