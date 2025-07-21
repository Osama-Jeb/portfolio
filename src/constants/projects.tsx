import lionsPreview from "../assets/images/projects/lionsgeek/mylions2.png"
import blogPreview from "../assets/images/projects/blog/blog.gif"

import animePreview from "../assets/images/projects/animelist/anime2.png"
import casaPreview from "../assets/images/projects/casatourat/casa1.png"
import africaPreview from "../assets/images/projects/yesafrica/africa3.png"


export const proProjects : Project[]= [
    {
        id: 1,
        name: 'LionsGeek Management System',
        github: '',
        website: 'https://mylionsgeek.ma/',
        desc: "Our team embarked on this exclusive venture with the aim of efficiently handling reservations and appointments for the esteemed LionsGeek Association. Leveraging the power of FullCalendar and Breeze, we have developed a seamless system that not only allows you to create and manage reservations for private equipment but also offers a range of other useful functions",
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
        preview: lionsPreview

    },
    {
        id: 2,
        name: 'Casatourat',
        github: '',
        website: 'http://casatourat.ma/',
        desc: "A mobile application built with React Native and Expo for the Casa Memoire association, designed to showcase the rich history of Casablanca. This project provided invaluable experience in mobile app development, user interface design, and a deeper understanding of the differences and requirements between Android and iOS platforms",
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
        preview: casaPreview

    },
    {
        id: 3,
        name: 'YES Africa',
        github: '',
        website: 'https://youthempowermentsummit.africa/',
        desc: "This is the website for the Foundation Jadara, an NGO dedicated to supporting NEET youth across African countries. The goal of this platform is to connect and highlight various NGO foundations, helping them reach more young people throughout the continent and provide the necessary support for their education, employment, and training.",
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
        preview: africaPreview
    },
];

export const persoProjects : Project[] = [
    {
        id: 4,
        name: 'Anime Repo',
        github: 'https://github.com/Osama-Jeb/animelist',
        website: 'https://animelist-blue.vercel.app/',
        desc: "Explore and find all the information and every information about the universe of anime, manga and voice actors. This website was made as a hobby and with it I gained great skills like clean coding and using context to avoid repitition as well as some improvements in in my Firebase and API skills. Make to to drop a look and have fun. ",
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
        preview: animePreview
    },
    {
        id: 5,
        name: 'Blog & Chat',
        github: 'https://github.com/Osama-Jeb/Blog',
        website: 'https://myblogproject.vercel.app/',
        desc: "A blog platform where members can create accounts, share written pieces, photos, and videos. Engage in lively conversations through our chat function, where you can exchange messages, images, and even PDF documents. Through this endeavor, I gained valuable experience in utilizing Firebase for backend operations, including authentication and file storage.",
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
        preview: blogPreview
    },
]