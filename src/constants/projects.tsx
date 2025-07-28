import lionsPreview from "../assets/images/projects/lionsgeek/lionsgeek.gif";
import lions1 from "../assets/images/projects/lionsgeek/mylions1.png";
import lions2 from "../assets/images/projects/lionsgeek/mylions2.png";
import lions3 from "../assets/images/projects/lionsgeek/mylions3.png";

import blogPreview from "../assets/images/projects/blog/blog.gif"

import animePreview from "../assets/images/projects/animelist/anime1.png"
import anime2 from "../assets/images/projects/animelist/anime2.png";
import anime3 from "../assets/images/projects/animelist/anime3.png";
import anime4 from "../assets/images/projects/animelist/anime4.png";
import anime5 from "../assets/images/projects/animelist/anime5.png";

import casaPreview from "../assets/images/projects/casatourat/casa1.png"
import casa2 from "../assets/images/projects/casatourat/casa2.png";
import casa3 from "../assets/images/projects/casatourat/casa3.png";
import casa4 from "../assets/images/projects/casatourat/casa4.png";
import casa5 from "../assets/images/projects/casatourat/casa5.png";

import africaPreview from "../assets/images/projects/yesafrica/africa1.png"
import africa2 from "../assets/images/projects/yesafrica/africa2.png";
import africa3 from "../assets/images/projects/yesafrica/africa3.png";
import africa4 from "../assets/images/projects/yesafrica/africa4.png";

import herPreview from "../assets/images/projects/herday/her1.png";
import her2 from "../assets/images/projects/herday/her2.png";
import her3 from "../assets/images/projects/herday/her3.png";

export const proProjects: Project[] = [
    {
        id: 1,
        name: 'LionsGeek Management System',
        github: '',
        website: 'https://mylionsgeek.ma/',
        desc: "Our team embarked on this exclusive venture with the aim of efficiently handling reservations and appointments for the LionsGeek Association. Leveraging the power of FullCalendar and Breeze, we have developed a seamless system that not only allows you to create and manage reservations for private equipment but also offers a range of other useful functions",
        detailedDesc: "A comprehensive management system built for LionsGeek Association to streamline their operations and improve member experience. The system handles complex scheduling, equipment reservations, and member management with an intuitive interface.",
        techs: [
            { name: 'Laravel', color: 'bg-[#ff2d20] text-white' },
            { name: 'Breeze Auth', color: 'bg-[#8a94a6] text-gray-500' },
            { name: 'FullCalendar', color: "bg-[#2b5ea4] text-white" },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
        ],
        client: 'LionsGeek',
        clientWebsite: 'https://lionsgeek.ma/',
        preview: lionsPreview,
        timeline: "4 months (January 2024 - April 2024)",
        challenges: [
            "Complex calendar integration with multiple booking types",
            "Real-time availability checking",
            "User role management and permissions"
        ],
        solutions: [
            "Implemented FullCalendar with custom event handling",
            "Built student-teacher attendance system",
            "Created flexible role-based access control system"
        ],
        keyFeatures: [
            "Equipment reservation system",
            "Member management dashboard",
            "Real-time calendar updates",
            "Automated email notifications",
            "Reporting and analytics"
        ],
        lessonsLearned: [
            "Advanced Laravel Breeze authentication patterns",
            "Complex calendar state management",
            "Real-time application architecture"
        ],
        futureImprovements: [
            "Excel export for reports",
            "Optimize performance for large datasets",
            "UI/UX enhancements"
        ],
        additionalImages: [lions1, lions2, lions3]
    },
    {
        id: 2,
        name: 'Casatourat',
        github: '',
        website: 'http://casatourat.ma/',
        desc: "A mobile application built with React Native and Expo for the Casa Memoire association, designed to showcase the rich history of Casablanca. This project provided invaluable experience in mobile app development, user interface design, and a deeper understanding of the differences and requirements between Android and iOS platforms",
        detailedDesc: "An immersive mobile experience that brings Casablanca's rich history to life through interactive tours, historical content, and location-based features. Built for Casa Memoire association to promote cultural heritage.",
        techs: [
            { name: 'React Native', color: 'bg-[#00d8ff]' },
            { name: 'Expo', color: 'bg-white' },
            { name: 'Laravel', color: 'bg-[#ff2d20] text-white' },
        ],
        client: 'Casamemoire',
        clientWebsite: 'https://casamemoire.org',
        preview: casaPreview,
        timeline: "6 months (June 2024 - December 2024)",
        challenges: [
            "Cross-platform mobile development",
            "GPS integration and location services",
            "Guest content accessibility"
        ],
        solutions: [
            "Used Expo for streamlined development workflow",
            "Implemented layout and routes for users and gusts",
            "Created responsive design for various screen sizes"
        ],
        keyFeatures: [
            "Interactive historical tours",
            "GPS-based location services",
            "Multilingual support",
            "Rich media content display",
            "Push notifications"
        ],
        lessonsLearned: [
            "Mobile-first development principles",
            "Platform-specific UI/UX considerations",
            "Performance optimization for mobile devices"
        ],
        futureImprovements: [
            "Social sharing capabilities",
            "User-generated content features",

        ],
        additionalImages: [casa2, casa3, casa4, casa5]
    },
    {
        id: 3,
        name: 'YES Africa',
        github: '',
        website: 'https://youthempowermentsummit.africa/',
        desc: "This is the website for the Foundation Jadara, an NGO dedicated to supporting NEET youth across African countries. The goal of this platform is to connect and highlight various NGO foundations, helping them reach more young people throughout the continent and provide the necessary support for their education, employment, and training.",
        detailedDesc: "A comprehensive platform connecting NGOs across Africa to support NEET (Not in Education, Employment, or Training) youth. The platform facilitates collaboration, resource sharing, and program coordination across multiple countries.",
        techs: [
            { name: 'ReactJS', color: 'bg-[#00d8ff]' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
            { name: 'Laravel', color: 'bg-[#ff2d20] text-white' },
        ],
        client: 'Jadara Foundation',
        clientWebsite: 'https://jadara.foundation/',
        preview: africaPreview,
        timeline: "2 months (January 2025 - Fabruary 2025)",
        challenges: [
            "Multi-language support for African countries",
            "Complex data visualization for impact metrics",
            "Scalable architecture for multiple NGOs"
        ],
        solutions: [
            "Implemented custom component for multiple languages",
            "Built custom dashboard with Chart.js",
            "Created modular architecture for easy scaling"
        ],
        keyFeatures: [
            "NGO directory and profiles",
            "Program management system",
            "Impact tracking and reporting",
            "Multi-language support"
        ],
        lessonsLearned: [
            "International web development considerations",
            "Complex data visualization techniques",
            "Collaborative platform architecture"
        ],
        futureImprovements: [
            "Mobile application development",
            "Advanced analytics dashboard"
        ],
        additionalImages: [africa2, africa3, africa4]
    },
    {
        id: 4,
        name: 'Her Day For Her',
        github: '',
        website: 'https://herdayforher.ma/',
        desc: "This is the leadership initiative by the Fondation Marocaine de l’Étudiant (FME) aimed at empowering young Moroccan women scholars. The goal is to inspire and support female students through mentorship, soft skills training, and career guidance with the help of accomplished women professionals.",

        detailedDesc: "A leadership development program launched by the Fondation Marocaine de l’Étudiant (FME) to equip young Moroccan women—especially scholarship recipients—with the confidence, skills, and networks needed for personal and professional success. Through MasterClasses, mentorship, and outreach events, the initiative connects students with inspiring female role models and promotes gender equality in education and careers.",
        techs: [
            { name: 'Inertia', color: 'bg-[#00d8ff]' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
        ],
        client: 'Jadara Foundation',
        clientWebsite: 'https://jadara.foundation/',
        preview: herPreview,
        timeline: "2 weeks (August 2025)",
        challenges: [
            "Multi-language support for African countries",
            "Complex data visualization for impact metrics",
            "Scalable architecture for multiple NGOs"
        ],
        solutions: [
            "Implemented i18n for multiple languages",
            "Built custom dashboard with Chart.js",
            "Created modular architecture for easy scaling"
        ],
        keyFeatures: [
            "NGO directory and profiles",
            "Program management system",
            "Impact tracking and reporting",
            "Multi-language support",
            "Resource sharing platform"
        ],
        lessonsLearned: [
            "International web development considerations",
            "Complex data visualization techniques",
            "Collaborative platform architecture"
        ],
        futureImprovements: [
            "Mobile application development",
            "AI-powered matching system",
            "Advanced analytics dashboard"
        ],
        additionalImages: [her2, her3]
    },
];

export const persoProjects: Project[] = [
    {
        id: 4,
        name: 'Anime Repo',
        github: 'https://github.com/Osama-Jeb/animelist',
        website: 'https://animelist-blue.vercel.app/',
        desc: "Explore and find all the information and every information about the universe of anime, manga and voice actors. This website was made as a hobby and with it I gained great skills like clean coding and using context to avoid repitition as well as some improvements in in my Firebase and API skills. Make to to drop a look and have fun.",
        detailedDesc: "A comprehensive anime and manga database application that provides detailed information about series, characters, and voice actors. Built as a passion project to explore modern React patterns and API integration.",
        techs: [
            { name: 'React Typescript', color: 'bg-[#00d8ff]' },
            { name: 'Firebase', color: "bg-alpha text-white" },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
            { name: 'Jikan API', color: 'bg-[#1ad1a5]' },
        ],
        preview: animePreview,
        timeline: "2 months (Personal project)",
        challenges: [
            "Complex API data structure handling",
            "State management for large datasets",
            "Performance optimization for image-heavy content"
        ],
        solutions: [
            "Implemented React Context for global state",
            "Added lazy loading and pagination",
            "Used React.memo for component optimization"
        ],
        keyFeatures: [
            "Comprehensive anime/manga search",
            "Detailed character information",
            "Voice actor profiles",
            "Personal watchlist management",
            "Advanced filtering and sorting"
        ],
        lessonsLearned: [
            "Advanced TypeScript patterns",
            "API optimization techniques",
            "Complex state management solutions"
        ],
        futureImprovements: [
            "User reviews and ratings",
            "Social features and sharing",
            "Recommendation algorithm"
        ],
        additionalImages: [anime2, anime5, anime4, anime3]
    },
    {
        id: 5,
        name: 'Blog & Chat',
        github: 'https://github.com/Osama-Jeb/Blog',
        website: 'https://myblogproject.vercel.app/',
        desc: "A blog platform where members can create accounts, share written pieces, photos, and videos. Engage in lively conversations through our chat function, where you can exchange messages, images, and even PDF documents. Through this endeavor, I gained valuable experience in utilizing Firebase for backend operations, including authentication and file storage.",
        detailedDesc: "A full-featured social blogging platform with real-time chat capabilities. Users can create rich content posts, engage in discussions, and share various media types in a modern, responsive interface.",
        techs: [
            { name: 'ReactJS', color: 'bg-[#00d8ff]' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
            { name: 'Firebase', color: "bg-alpha text-white" },
        ],
        preview: blogPreview,
        timeline: "1 months (Personal project)",
        challenges: [
            "Real-time chat implementation",
            "File upload and storage management",
            "Rich text editor integration"
        ],
        solutions: [
            "Used Firebase Realtime Database for chat",
            "Implemented Firebase Storage for media files",
            "Integrated rich text editor with custom styling"
        ],
        keyFeatures: [
            "Rich text blog editor",
            "Real-time chat system",
            "Media file sharing",
            "User authentication",
            "Responsive design"
        ],
        lessonsLearned: [
            "Real-time application development",
            "Firebase ecosystem mastery",
            "File handling and optimization"
        ],
        futureImprovements: [
            "Advanced text editor features",
            "Push notifications",
            "Content moderation system"
        ],
        additionalImages: []
    },
];
