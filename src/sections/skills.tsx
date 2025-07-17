import Title from "../components/Title";
import { languages, frameworks, others } from "../constants/skills";

export default function Skills() {

    const categories = [
        { title: 'Languages', skills: languages },
        { title: 'Frameworks && Libraries', skills: frameworks },
        { title: 'Others', skills: others },
    ];


    return (
        <section>
            <div className="w-full px-16">
                <Title title="Techno-Stack" />
                <div className="flex items-center justify-center flex-col">
                    <div className="flex flex-col gap-6">
                        {categories.map((category, index) => (
                            <div key={index} className="mt-7">
                                <p className="text-3xl tracking-wider font-bold mb-2">{category.title}:</p>
                                <ul
                                    className="flex items-center gap-3 flex-wrap">
                                    {category.skills.map((skill, i) => (
                                        <li
                                            key={i}
                                            className={`flex flex-col items-center gap-1 w-[150px] p-2 ${skill.bg} border-2 mt-2 rounded-2xl`}
                                        >
                                            <img src={skill.image} width={25} alt="" />
                                            <p className="text-lg">{skill.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}