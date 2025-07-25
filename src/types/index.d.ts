type TitleProps = {
    title: string
}

type Theme = {
    backgroundColor: string,
    color: string,
}
type NavbarProps = {
    theme: Theme,
    setTheme: (theme: Theme) => void,
}

type Skill = {
    name: string,
    image: string,
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
