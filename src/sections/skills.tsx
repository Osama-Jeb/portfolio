import Skill from "../components/SkillCard";
import Title from "../components/Title";
import { languages, frameworks, others } from "../constants/skills";

export default function Skills() {

    const categories = [
        { title: 'Languages', skills: languages },
        { title: 'Frameworks && Libraries', skills: frameworks },
        { title: 'Others', skills: others },
    ];


    return (
        <section id="skills">
            <div className="w-full px-16">
                <Title title="Techno-Stack" />
                <div className="flex items-center justify-center flex-col">
                    <div className="flex flex-col gap-6">
                        {categories.map((category, index) => (
                            <div key={index} className="mt-7">
                                <p className="text-3xl tracking-wider font-bold mb-2">{category.title}:</p>
                                <div
                                    className="flex items-center gap-3 flex-wrap">
                                    {category.skills.map((skill, i) => (
                                        <Skill skill={skill} index={i} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}