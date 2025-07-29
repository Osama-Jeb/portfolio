type TitleProps = {
    title: string
}

type IconProps = {
    className?: string;
    size?: number;
}

type Theme = {
    backgroundColor: string,
    color: string,
}

type NavbarProps = {
    changeTheme: () => void,
}
type ProjectCardProps = {
    index: number,
    project: Project,
    type: string,
}

type Skill = {
    name: string,
    svg: string,
    bg: string,
}

type Tech = {
    name: string,
    color: string,
}

type Project = {
    id: number,
    name: string,
    github?: string,
    website: string,
    desc: string,
    detailedDesc?: string,
    techs: Tech[],
    client?: string,
    clientWebsite?: string,
    preview: string,
    timeline?: string,
    challenges?: string[],
    solutions?: string[],
    keyFeatures?: string[],
    lessonsLearned?: string[],
    futureImprovements?: string[],
    additionalImages?: string[],
}
