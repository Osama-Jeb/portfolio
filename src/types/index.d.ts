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

type LocalizedString = {
    en: string;
    fr: string;
};

type LocalizedArrayItem = {
    en: string;
    fr: string;
};

type Project = {
    id: number,
    name: string,
    github?: string,
    website: string,
    desc: LocalizedString;
    detailedDesc: LocalizedString;
    techs: Tech[],
    client?: string,
    clientWebsite?: string,
    preview: string,
    timeline: LocalizedString;
    challenges: LocalizedArrayItem[];
    solutions: LocalizedArrayItem[];
    keyFeatures: LocalizedArrayItem[];
    lessonsLearned: LocalizedArrayItem[];
    futureImprovements: LocalizedArrayItem[];
    additionalImages?: string[],
}
