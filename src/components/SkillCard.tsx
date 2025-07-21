type SkillProp = {
    index: number,
    skill: Skill
}

export default function Skill({skill, index} : SkillProp) {
    return (
        <div
            key={index}
            className={`flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] p-2 border-1 border-alpha/40 mt-2 rounded-2xl hover:scale-110`}
        >
            <img src={skill.image} width={50} alt="" />
            {/* <p className="text-lg">{skill.name}</p> */}
        </div>
    )
}