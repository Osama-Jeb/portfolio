interface ProjectCardProps {
    index: number,
    project: Project
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const reverse = index % 2 === 0

    return (
        <div
            key={index}
            className={`mb-12 flex text-center text-balance sm:text-start  flex-col sm:flex-row gap-5 ${reverse ? 'sm:flex-row-reverse' : ''}`}>

            <img className="rounded-2xl w-[30vw] object-cover"
                src={project.preview} alt={project.name} loading="lazy" />
            <div className={`w-[50vw]`}>
                <div className="flex flex-col gap-3 p-2">
                    <p className="text-5xl font-bold text-alpha/90">{project.name}</p>

                    <p className="">{project.desc}</p>


                    <div className="space-y-7">
                        <div className="flex flex-wrap gap-3 items-center">
                        <p className="text-alpha text-lg">Technologies:</p>
                            {
                                project.techs.map((tech, index) =>
                                    <span key={index} className={`bg-[#1F1F1F] px-2 font-bold rounded-2xl`}>
                                        {tech.name}
                                    </span>
                                )
                            }
                        </div>

                        <div className="grid grid-cols-2">
                            <div className="flex items-center gap-2"> 
                                <p className="text-lg">{project.client ? 'Client' : 'Github Repository'}:</p>
                                <a
                                    href={project.client ? project.clientWebsite : project.github}
                                    target="_blank"
                                    rel="nonreferrer"
                                    className=" bg-white text-black rounded-2xl px-2 w-fit text-xl">
                                    {project.client ? 'Client ' + project.client : 'Github Repository'}
                                </a>

                            </div>
                            <div className="flex items-center gap-2"> 
                                <p className="text-lg">Finished Product:</p>
                                <a
                                    href={project.client ? project.website : project.website}
                                    target="_blank"
                                    rel="nonreferrer"
                                    className="rounded-full border-1 px-2 w-fit text-xl">
                                    {project.client ? 'Visit Website' : 'Demo'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}