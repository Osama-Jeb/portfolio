import lionsGif from "../assets/images/projects/lionsgeek/mylions2.png"
import blogGif from "../assets/images/projects/blog/blog.gif"

import anime1 from "../assets/images/projects/animelist/anime2.png"
import casa1 from "../assets/images/projects/casatourat/casa1.png"
import africa1 from "../assets/images/projects/yesafrica/africa3.png"


export const proProjects : Project[]= [
    {
        id: 1,
        name: 'LionsGeek Management System',
        github: '',
        website: 'https://mylionsgeek.ma/',
        desc: "Description for LionsGeek Management System",
        techs: [
            {
                name: 'Laravel',
                color: 'bg-[#ff2d20] text-white',
            },
            {
                name: 'Breeze Auth',
                color: 'bg-[#8a94a6] text-gray-500',
            },
            {
                name: 'FullCalendar',
                color: "bg-[#2b5ea4] text-white",
            },
            {
                name: 'Tailwind',
                color: 'bg-[#30b8c7]'
            },
        ],
        client: 'LionsGeek',
        clientWebsite: 'https://lionsgeek.ma/',
        preview: lionsGif

    },
    {
        id: 2,
        name: 'Casatourat',
        github: '',
        website: 'http://casatourat.ma/',
        desc: "Description for Casatourat and Casamemoire",
        techs: [
            {
                name: 'React Native',
                color: 'bg-[#00d8ff]',
            },
            {
                name: 'Expo',
                color: 'bg-white'
            },
            {
                name: 'Laravel',
                color: 'bg-[#ff2d20] text-white',
            },
        ],
        client: 'Casamemoire',
        clientWebsite: 'https://casamemoire.org',
        preview: casa1

    },
    {
        id: 3,
        name: 'YES Africa',
        github: '',
        website: 'https://youthempowermentsummit.africa/',
        desc: "Description for YES Africa project",
        techs: [
            {
                name: 'ReactJS',
                color: 'bg-[#00d8ff]',
            },
            {
                name: 'Tailwind',
                color: 'bg-[#30b8c7]'
            },
            {
                name: 'Laravel',
                color: 'bg-[#ff2d20] text-white',
            },
        ],
        client: 'Jadara Foundation',
        clientWebsite: 'https://jadara.foundation/',
        preview: africa1
    },
];

export const persoProjects : Project[] = [
    {
        id: 4,
        name: 'Anime Repo',
        github: 'https://github.com/Osama-Jeb/animelist',
        website: 'https://animelist-blue.vercel.app/',
        desc: "Description for the AnimeRepo",
        techs: [
            {
                name: 'React Typescript',
                color: 'bg-[#00d8ff]',
            },
            {
                name: 'Firebase',
                color: "bg-alpha text-white",
            },
            {
                name: 'Tailwind',
                color: 'bg-[#30b8c7]'
            },
            {
                name: 'Jikan API',
                color: 'bg-[#1ad1a5]'
            },
        ],
        preview: anime1
    },
    {
        id: 5,
        name: 'Blog & Chat',
        github: 'https://github.com/Osama-Jeb/Blog',
        website: 'https://myblogproject.vercel.app/',
        desc: "Descripton for the Blogs & Chat website",
        techs: [
            {
                name: 'ReactJS',
                color: 'bg-[#00d8ff]',
            },
            {
                name: 'Tailwind',
                color: 'bg-[#30b8c7]'
            },
            {
                name: 'Firebase',
                color: "bg-alpha text-white",
            },
        ],
        preview: blogGif
    },
]