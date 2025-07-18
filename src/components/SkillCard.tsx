type SkillProp = {
    index: number,
    skill: Skill
}

export default function Skill({skill, index} : SkillProp) {
    return (
        <div
            key={index}
            className={`flex flex-col items-center gap-1 w-[150px] p-2  border-1 border-[#058e0280] mt-2 rounded-2xl`}
        >
            <img src={skill.image} width={25} alt="" />
            <p className="text-lg">{skill.name}</p>
        </div>
    )
}