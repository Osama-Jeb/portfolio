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

import moocPreview from "../assets/images/projects/mooc/mooc1.png";
import mooc2 from "../assets/images/projects/mooc/mooc2.png";
import mooc3 from "../assets/images/projects/mooc/mooc3.png";
import mooc4 from "../assets/images/projects/mooc/mooc4.png";
import mooc5 from "../assets/images/projects/mooc/mooc5.png";

import yesmobilePreview from "../assets/images/projects/yesmobile/yesmobile1.png";
import yesmobile2 from "../assets/images/projects/yesmobile/yesmobile2.png";
import yesmobile3 from "../assets/images/projects/yesmobile/yesmobile3.png";
import yesmobile4 from "../assets/images/projects/yesmobile/yesmobile4.png";
import yesmobile5 from "../assets/images/projects/yesmobile/yesmobile5.png";

export const proProjects: Project[] = [
    {
        id: 1,
        name: 'LionsGeek Management System',
        github: '',
        website: 'https://mylionsgeek.ma/',
        desc: {
            en: "Our team embarked on this exclusive venture with the aim of efficiently handling reservations and appointments for the LionsGeek Association. Leveraging the power of FullCalendar and Breeze, we have developed a seamless system that not only allows you to create and manage reservations for private equipment but also offers a range of other useful functions",
            fr: "Notre équipe s’est lancée dans ce projet exclusif dans le but de gérer efficacement les réservations et les rendez-vous de l’Association LionsGeek. En tirant parti de la puissance de FullCalendar et Breeze, nous avons développé un système fluide qui permet non seulement de créer et de gérer des réservations pour du matériel privé, mais aussi d’offrir toute une gamme d’autres fonctions utiles."
        },
        detailedDesc: {
            en: "A comprehensive management system built for LionsGeek Association to streamline their operations and improve member experience. The system handles complex scheduling, equipment reservations, and member management with an intuitive interface.",
            fr: "Un système de gestion complet conçu pour l’Association LionsGeek afin de simplifier leurs opérations et améliorer l’expérience des membres. Le système gère la planification complexe, les réservations de matériel et la gestion des membres via une interface intuitive."
        },
        techs: [
            { name: 'Laravel', color: 'bg-[#ff2d20]' },
            { name: 'Breeze Auth', color: 'bg-[#8a94a6]' },
            { name: 'FullCalendar', color: 'bg-[#2b5ea4]' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
        ],
        client: 'LionsGeek',
        clientWebsite: 'https://lionsgeek.ma/',
        preview: lionsPreview,
        timeline: {
            en: "4 months (January 2024 - April 2024)",
            fr: "4 mois (Janvier 2024 - Avril 2024)"
        },
        challenges: [
            { en: "Complex calendar integration with multiple booking types", fr: "Intégration complexe du calendrier avec plusieurs types de réservations" },
            { en: "Real-time availability checking", fr: "Vérification de la disponibilité en temps réel" },
            { en: "User role management and permissions", fr: "Gestion des rôles utilisateurs et des permissions" }
        ],
        solutions: [
            { en: "Implemented FullCalendar with custom event handling", fr: "Intégration de FullCalendar avec une gestion personnalisée des événements" },
            { en: "Built student-teacher attendance system", fr: "Création d’un système de présence pour les étudiants et enseignants" },
            { en: "Created flexible role-based access control system", fr: "Mise en place d’un système flexible de contrôle d’accès basé sur les rôles" }
        ],
        keyFeatures: [
            { en: "Equipment reservation system", fr: "Système de réservation de matériel" },
            { en: "Member management dashboard", fr: "Tableau de bord de gestion des membres" },
            { en: "Real-time calendar updates", fr: "Mises à jour du calendrier en temps réel" },
            { en: "Automated email notifications", fr: "Notifications par e-mail automatisées" },
            { en: "Reporting and analytics", fr: "Rapports et analyses" }
        ],
        lessonsLearned: [
            { en: "Advanced Laravel Breeze authentication patterns", fr: "Modèles d’authentification avancés avec Laravel Breeze" },
            { en: "Complex calendar state management", fr: "Gestion complexe de l’état du calendrier" },
            { en: "Real-time application architecture", fr: "Architecture d’application en temps réel" }
        ],
        futureImprovements: [
            { en: "Excel export for reports", fr: "Exportation des rapports vers Excel" },
            { en: "Optimize performance for large datasets", fr: "Optimiser les performances pour les grands ensembles de données" },
            { en: "UI/UX enhancements", fr: "Améliorations de l’interface utilisateur et de l’expérience utilisateur (UI/UX)" }
        ],
        additionalImages: [lions1, lions2, lions3]
    },
    {
        id: 2,
        name: 'Casatourat',
        github: '',
        website: 'http://casatourat.ma/',
        desc: {
            en: "A mobile application built with React Native and Expo for the Casa Memoire association, designed to showcase the rich history of Casablanca. This project provided invaluable experience in mobile app development, user interface design, and a deeper understanding of the differences and requirements between Android and iOS platforms",
            fr: "Une application mobile développée avec React Native et Expo pour l’association Casa Mémoire, conçue pour mettre en valeur la riche histoire de Casablanca. Ce projet a offert une expérience précieuse en développement mobile, en design d’interface utilisateur, ainsi qu’une meilleure compréhension des différences et exigences entre les plateformes Android et iOS."
        },
        detailedDesc: {
            en: "An immersive mobile experience that brings Casablanca's rich history to life through interactive tours, historical content, and location-based features. Built for Casa Memoire association to promote cultural heritage.",
            fr: "Une expérience mobile immersive qui donne vie à la riche histoire de Casablanca à travers des visites interactives, du contenu historique et des fonctionnalités basées sur la géolocalisation. Développée pour l’association Casa Mémoire afin de promouvoir le patrimoine culturel."
        },
        techs: [
            { name: 'React Native', color: 'bg-[#00d8ff]' },
            { name: 'Expo', color: 'bg-white' },
            { name: 'Laravel', color: 'bg-[#ff2d20] text-white' },
        ],
        client: 'Casamemoire',
        clientWebsite: 'https://casamemoire.org',
        preview: casaPreview,
        timeline: {
            en: "6 months (June 2024 - December 2024)",
            fr: "6 mois (Juin 2024 - December 2024)"
        },
        challenges: [
            { en: "Cross-platform mobile development", fr: "Développement mobile multiplateforme" },
            { en: "GPS integration and location services", fr: "Intégration GPS et services de localisation" },
            { en: "Guest content accessibility", fr: "Accessibilité du contenu aux visiteurs" }
        ],
        solutions: [
            { en: "Used Expo for streamlined development workflow", fr: "Utilisation d’Expo pour un flux de développement simplifié" },
            { en: "Implemented layout and routes for users and guests", fr: "Implémentation de la navigation et des interfaces pour utilisateurs et visiteurs" },
            { en: "Created responsive design for various screen sizes", fr: "Conception d’un design réactif adapté à différentes tailles d’écran" }
        ],
        keyFeatures: [
            { en: "Interactive historical tours", fr: "Visites historiques interactives" },
            { en: "GPS-based location services", fr: "Services de localisation basés sur le GPS" },
            { en: "Multilingual support", fr: "Support multilingue" },
            { en: "Rich media content display", fr: "Affichage de contenu multimédia riche" },
            { en: "Push notifications", fr: "Notifications push" }
        ],
        lessonsLearned: [
            { en: "Mobile-first development principles", fr: "Principes de développement mobile-first" },
            { en: "Platform-specific UI/UX considerations", fr: "Considérations UI/UX spécifiques à chaque plateforme" },
            { en: "Performance optimization for mobile devices", fr: "Optimisation des performances pour les appareils mobiles" }
        ],
        futureImprovements: [
            { en: "Social sharing capabilities", fr: "Fonctionnalités de partage sur les réseaux sociaux" },
            { en: "User-generated content features", fr: "Fonctionnalités de contenu généré par les utilisateurs" }
        ],
        additionalImages: [casa2, casa3, casa4, casa5]
    },

    {
        id: 3,
        name: 'YES Africa',
        github: '',
        website: 'https://youthempowermentsummit.africa/',
        desc: {
            en: "This is the website for the Foundation Jadara, an NGO dedicated to supporting NEET youth across African countries. The goal of this platform is to connect and highlight various NGO foundations, helping them reach more young people throughout the continent and provide the necessary support for their education, employment, and training.",
            fr: "Il s'agit du site web de la Fondation Jadara, une ONG dédiée au soutien des jeunes NEET (ni en éducation, ni en emploi, ni en formation) à travers les pays africains. Cette plateforme vise à connecter et mettre en valeur diverses fondations, afin de toucher plus de jeunes sur le continent et leur offrir le soutien nécessaire en matière d’éducation, d’emploi et de formation."
        },
        detailedDesc: {
            en: "A comprehensive platform connecting NGOs across Africa to support NEET (Not in Education, Employment, or Training) youth. The platform facilitates collaboration, resource sharing, and program coordination across multiple countries.",
            fr: "Une plateforme complète connectant les ONG à travers l’Afrique pour soutenir les jeunes NEET (ni en éducation, ni en emploi, ni en formation). Elle facilite la collaboration, le partage de ressources et la coordination des programmes dans plusieurs pays."
        },
        techs: [
            { name: 'ReactJS', color: 'bg-[#00d8ff]' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
            { name: 'Laravel', color: 'bg-[#ff2d20] text-white' },
        ],
        client: 'Jadara Foundation',
        clientWebsite: 'https://jadara.foundation/',
        preview: africaPreview,
        timeline: {
            en: "2 months (January 2025 - February 2025)",
            fr: "2 mois (Janvier 2025 - Février 2025)",
        },
        challenges: [
            { en: "Multi-language support for African countries", fr: "Support multilingue pour les pays africains" },
            { en: "Complex data visualization for impact metrics", fr: "Visualisation complexe des données pour les indicateurs d’impact" },
            { en: "Scalable architecture for multiple NGOs", fr: "Architecture évolutive pour plusieurs ONG" }
        ],
        solutions: [
            { en: "Implemented custom component for multiple languages", fr: "Mise en place d’un composant personnalisé pour plusieurs langues" },
            { en: "Built custom dashboard with Chart.js", fr: "Création d’un tableau de bord personnalisé avec Chart.js" },
            { en: "Created modular architecture for easy scaling", fr: "Développement d’une architecture modulaire pour une mise à l’échelle facile" }
        ],
        keyFeatures: [
            { en: "NGO directory and profiles", fr: "Annuaire et profils des ONG" },
            { en: "Program management system", fr: "Système de gestion des programmes" },
            { en: "Impact tracking and reporting", fr: "Suivi et rapport d’impact" },
            { en: "Multi-language support", fr: "Support multilingue" }
        ],
        lessonsLearned: [
            { en: "International web development considerations", fr: "Considérations pour le développement web international" },
            { en: "Complex data visualization techniques", fr: "Techniques de visualisation de données complexes" },
            { en: "Collaborative platform architecture", fr: "Architecture de plateforme collaborative" }
        ],
        futureImprovements: [
            { en: "Mobile application development", fr: "Développement d’une application mobile" },
            { en: "Advanced analytics dashboard", fr: "Tableau de bord d’analytique avancé" }
        ],
        additionalImages: [africa2, africa3, africa4]
    },
    {
        id: 4,
        name: 'Her Day For Her',
        github: '',
        website: 'https://herdayforher.ma/',
        desc: {
            en: "This is the leadership initiative by the Fondation Marocaine de l’Étudiant (FME) aimed at empowering young Moroccan women scholars. The goal is to inspire and support female students through mentorship, soft skills training, and career guidance with the help of accomplished women professionals.",
            fr: "Il s'agit d'une initiative de leadership de la Fondation Marocaine de l’Étudiant (FME), visant à autonomiser les jeunes étudiantes marocaines. Elle a pour objectif d'inspirer et de soutenir les étudiantes grâce à du mentorat, des formations aux compétences non techniques et des conseils d’orientation professionnelle offerts par des femmes professionnelles accomplies."
        },
        detailedDesc: {
            en: "A leadership development program launched by the Fondation Marocaine de l’Étudiant (FME) to equip young Moroccan women—especially scholarship recipients—with the confidence, skills, and networks needed for personal and professional success. Through MasterClasses, mentorship, and outreach events, the initiative connects students with inspiring female role models and promotes gender equality in education and careers.",
            fr: "Un programme de développement du leadership lancé par la Fondation Marocaine de l’Étudiant (FME), visant à doter les jeunes femmes marocaines — notamment les boursières — de la confiance, des compétences et des réseaux nécessaires à leur réussite personnelle et professionnelle. Grâce aux MasterClasses, au mentorat et aux événements de sensibilisation, l’initiative met en relation les étudiantes avec des femmes modèles inspirantes et promeut l’égalité des sexes dans l’éducation et les carrières."
        },
        techs: [
            { name: 'Inertia', color: 'bg-[#00d8ff]' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
        ],
        client: 'Jadara Foundation',
        clientWebsite: 'https://jadara.foundation/',
        preview: herPreview,
        timeline: {
            en: "2 weeks (August 2025)",
            fr: "2 semaines (Août 2025)"
        },
        challenges: [
            { en: "Multi-language support for African countries", fr: "Support multilingue pour les pays africains" },
            { en: "Complex data visualization for impact metrics", fr: "Visualisation complexe des données pour les indicateurs d’impact" },
            { en: "Scalable architecture for multiple NGOs", fr: "Architecture évolutive pour plusieurs ONG" }
        ],
        solutions: [
            { en: "Implemented i18n for multiple languages", fr: "Mise en œuvre de i18n pour plusieurs langues" },
            { en: "Built custom dashboard with Chart.js", fr: "Création d’un tableau de bord personnalisé avec Chart.js" },
            { en: "Created modular architecture for easy scaling", fr: "Développement d’une architecture modulaire pour une mise à l’échelle facile" }
        ],
        keyFeatures: [
            { en: "NGO directory and profiles", fr: "Annuaire et profils des ONG" },
            { en: "Program management system", fr: "Système de gestion des programmes" },
            { en: "Impact tracking and reporting", fr: "Suivi et rapport d’impact" },
            { en: "Multi-language support", fr: "Support multilingue" },
            { en: "Resource sharing platform", fr: "Plateforme de partage de ressources" }
        ],
        lessonsLearned: [
            { en: "International web development considerations", fr: "Considérations pour le développement web international" },
            { en: "Complex data visualization techniques", fr: "Techniques de visualisation de données complexes" },
            { en: "Collaborative platform architecture", fr: "Architecture de plateforme collaborative" }
        ],
        futureImprovements: [
            { en: "Mobile application development", fr: "Développement d’une application mobile" },
            { en: "AI-powered matching system", fr: "Système de mise en relation basé sur l’IA" },
            { en: "Advanced analytics dashboard", fr: "Tableau de bord d’analytique avancé" }
        ],
        additionalImages: [her2, her3]
    },

    {
        id: 5,
        name: 'MOOC Platform',
        github: '',
        website: '',
        desc: {
            en: "A comprehensive Massive Open Online Course (MOOC) platform designed to provide accessible education to learners worldwide. This platform features course management, student enrollment, progress tracking, and interactive learning modules with a modern, user-friendly interface.",
            fr: "Une plateforme complète de cours en ligne ouverts et massifs (MOOC) conçue pour offrir un accès à l'éducation à des apprenants du monde entier. Elle comprend la gestion des cours, l’inscription des étudiants, le suivi des progrès et des modules d’apprentissage interactifs avec une interface moderne et conviviale."
        },
        detailedDesc: {
            en: "An advanced educational platform that democratizes access to quality education through online courses. The platform supports multiple learning formats, assessment tools, and provides detailed analytics for both instructors and students.",
            fr: "Une plateforme éducative avancée qui démocratise l’accès à une éducation de qualité via des cours en ligne. Elle prend en charge plusieurs formats d’apprentissage, propose des outils d’évaluation et fournit des analyses détaillées pour les enseignants comme pour les étudiants."
        },
        techs: [
            { name: 'Laravel', color: 'bg-[#ff2d20] text-white' },
            { name: 'Vue.js', color: 'bg-[#4FC08D] text-white' },
            { name: 'MySQL', color: 'bg-[#4479A1] text-white' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
        ],
        client: 'Educational Institution',
        preview: moocPreview,
        timeline: {
            en: "3 months (Personal project)",
            fr: "3 mois (Projet personnel)"
        },
        challenges: [
            { en: "Scalable video streaming and content delivery", fr: "Diffusion vidéo évolutive et livraison de contenu" },
            { en: "Complex user role management (students, instructors, admins)", fr: "Gestion complexe des rôles utilisateurs (étudiants, enseignants, administrateurs)" },
            { en: "Real-time progress tracking and analytics", fr: "Suivi des progrès et analyses en temps réel" }
        ],
        solutions: [
            { en: "Implemented efficient video streaming with adaptive quality", fr: "Implémentation d’un streaming vidéo efficace avec qualité adaptative" },
            { en: "Built comprehensive role-based access control system", fr: "Création d’un système complet de gestion des accès basé sur les rôles" },
            { en: "Created detailed analytics dashboard with real-time updates", fr: "Création d’un tableau de bord analytique avec mises à jour en temps réel" }
        ],
        keyFeatures: [
            { en: "Course creation and management tools", fr: "Outils de création et de gestion de cours" },
            { en: "Video streaming and content delivery", fr: "Streaming vidéo et diffusion de contenu" },
            { en: "Student progress tracking", fr: "Suivi des progrès des étudiants" },
            { en: "Interactive quizzes and assessments", fr: "Quiz interactifs et évaluations" },
            { en: "Discussion forums and community features", fr: "Forums de discussion et fonctionnalités communautaires" },
            { en: "Certificate generation system", fr: "Système de génération de certificats" }
        ],
        lessonsLearned: [
            { en: "Large-scale application architecture", fr: "Architecture d’application à grande échelle" },
            { en: "Video streaming optimization", fr: "Optimisation du streaming vidéo" },
            { en: "Educational technology best practices", fr: "Bonnes pratiques en technologie éducative" }
        ],
        futureImprovements: [
            { en: "Mobile application development", fr: "Développement d’une application mobile" },
            { en: "AI-powered personalized learning paths", fr: "Parcours d’apprentissage personnalisés basés sur l’IA" },
            { en: "Advanced analytics and reporting", fr: "Analyses et rapports avancés" }
        ],
        additionalImages: [mooc2, mooc3, mooc4, mooc5]
    },
    {
        id: 6,
        name: 'YES Mobile App',
        github: 'https://github.com/Osama-Jeb/yesmobile',
        website: '',
        desc: {
            en: "The mobile companion app for the YES Africa platform, built with React Native. This app extends the reach of the youth empowerment initiative by providing mobile access to NGO resources, program information, and community features for young people across African countries.",
            fr: "L'application mobile compagnon de la plateforme YES Africa, développée avec React Native. Elle étend la portée de l’initiative d’autonomisation des jeunes en offrant un accès mobile aux ressources des ONG, aux informations sur les programmes et aux fonctionnalités communautaires pour les jeunes à travers les pays africains."
        },
        detailedDesc: {
            en: "A mobile application that brings the YES Africa platform to smartphones, making youth empowerment resources more accessible across the continent. Features offline capabilities, push notifications, and location-based services to connect young people with nearby opportunities.",
            fr: "Une application mobile qui rend la plateforme YES Africa accessible sur smartphone, facilitant l’accès aux ressources d’autonomisation des jeunes à l’échelle du continent. Elle offre des fonctionnalités hors ligne, des notifications push et des services basés sur la localisation pour connecter les jeunes aux opportunités proches."
        },
        techs: [
            { name: 'React Native', color: 'bg-[#00d8ff]' },
            { name: 'Expo', color: 'bg-white text-black' },
            { name: 'Firebase', color: "bg-alpha text-white" },
            { name: 'Redux', color: 'bg-[#764ABC] text-white' },
        ],
        preview: yesmobilePreview,
        timeline: {
            en: "3 months (Personal project)",
            fr: "3 mois (Projet personnel)"
        },
        challenges: [
            { en: "Cross-platform mobile development for diverse African markets", fr: "Développement mobile multiplateforme pour divers marchés africains" },
            { en: "Offline functionality for areas with limited connectivity", fr: "Fonctionnalité hors ligne pour les zones à connectivité limitée" },
            { en: "Multi-language support for various African languages", fr: "Support multilingue pour différentes langues africaines" }
        ],
        solutions: [
            { en: "Used React Native with Expo for efficient cross-platform development", fr: "Utilisation de React Native avec Expo pour un développement multiplateforme efficace" },
            { en: "Implemented offline-first architecture with local data caching", fr: "Mise en place d’une architecture hors ligne avec mise en cache locale des données" },
            { en: "Created flexible internationalization system", fr: "Création d’un système d’internationalisation flexible" }
        ],
        keyFeatures: [
            { en: "NGO directory with location-based search", fr: "Annuaire des ONG avec recherche basée sur la localisation" },
            { en: "Program enrollment and tracking", fr: "Inscription et suivi des programmes" },
            { en: "Offline content access", fr: "Accès au contenu hors ligne" },
            { en: "Push notifications for opportunities", fr: "Notifications push pour les opportunités" },
            { en: "Multi-language support", fr: "Support multilingue" },
            { en: "Community messaging features", fr: "Fonctionnalités de messagerie communautaire" }
        ],
        lessonsLearned: [
            { en: "Mobile-first development for emerging markets", fr: "Développement mobile-first pour les marchés émergents" },
            { en: "Offline-first application architecture", fr: "Architecture d’application hors ligne par défaut" },
            { en: "Cross-cultural mobile UX design", fr: "Conception UX mobile interculturelle" }
        ],
        futureImprovements: [
            { en: "Voice interface for accessibility", fr: "Interface vocale pour l’accessibilité" },
            { en: "AI-powered opportunity matching", fr: "Correspondance des opportunités basée sur l’IA" },
            { en: "Blockchain-based achievement verification", fr: "Vérification des réalisations via la blockchain" }
        ],
        additionalImages: [yesmobile2, yesmobile3, yesmobile4, yesmobile5]
    }

];

export const persoProjects: Project[] = [
    {
        id: 7,
        name: 'Anime Repo',
        github: 'https://github.com/Osama-Jeb/animelist',
        website: 'https://animelist-blue.vercel.app/',
        desc: {
            en: "Explore and find all the information and every information about the universe of anime, manga and voice actors. This website was made as a hobby and with it I gained great skills like clean coding and using context to avoid repitition as well as some improvements in in my Firebase and API skills. Make to to drop a look and have fun.",
            fr: "Explorez et trouvez toutes les informations sur l’univers des animes, mangas et doubleurs. Ce site a été créé par passion, ce qui m’a permis d’améliorer mes compétences en code propre, en utilisation du contexte pour éviter les répétitions, ainsi qu’en Firebase et API."
        },
        detailedDesc: {
            en: "A comprehensive anime and manga database application that provides detailed information about series, characters, and voice actors. Built as a passion project to explore modern React patterns and API integration.",
            fr: "Une application complète de base de données sur les animes et mangas offrant des informations détaillées sur les séries, les personnages et les doubleurs. Réalisée par passion pour explorer les modèles React modernes et l’intégration d’API."
        },
        techs: [
            { name: 'React Typescript', color: 'bg-[#00d8ff]' },
            { name: 'Firebase', color: 'bg-alpha text-white' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
            { name: 'Jikan API', color: 'bg-[#1ad1a5]' }
        ],
        preview: animePreview,
        timeline: {
            en: "2 months (Personal project)",
            fr: "2 mois (Projet personnel)"
        },
        challenges: [
            {
                en: "Complex API data structure handling",
                fr: "Gestion de structures de données API complexes"
            },
            {
                en: "State management for large datasets",
                fr: "Gestion d’état pour de grands ensembles de données"
            },
            {
                en: "Performance optimization for image-heavy content",
                fr: "Optimisation des performances pour du contenu riche en images"
            }
        ],
        solutions: [
            {
                en: "Implemented React Context for global state",
                fr: "Utilisation de React Context pour un état global"
            },
            {
                en: "Added lazy loading and pagination",
                fr: "Ajout du chargement paresseux et de la pagination"
            },
            {
                en: "Used React.memo for component optimization",
                fr: "Utilisation de React.memo pour l’optimisation des composants"
            }
        ],
        keyFeatures: [
            {
                en: "Comprehensive anime/manga search",
                fr: "Recherche complète d’animes/mangas"
            },
            {
                en: "Detailed character information",
                fr: "Informations détaillées sur les personnages"
            },
            {
                en: "Voice actor profiles",
                fr: "Profils des doubleurs"
            },
            {
                en: "Personal watchlist management",
                fr: "Gestion de la liste de visionnage personnelle"
            },
            {
                en: "Advanced filtering and sorting",
                fr: "Filtrage et tri avancés"
            }
        ],
        lessonsLearned: [
            {
                en: "Advanced TypeScript patterns",
                fr: "Modèles TypeScript avancés"
            },
            {
                en: "API optimization techniques",
                fr: "Techniques d’optimisation d’API"
            },
            {
                en: "Complex state management solutions",
                fr: "Solutions complexes de gestion d’état"
            }
        ],
        futureImprovements: [
            {
                en: "User reviews and ratings",
                fr: "Avis et évaluations des utilisateurs"
            },
            {
                en: "Social features and sharing",
                fr: "Fonctionnalités sociales et partage"
            },
            {
                en: "Recommendation algorithm",
                fr: "Algorithme de recommandation"
            }
        ],
        additionalImages: [anime2, anime5, anime4, anime3]
    },
    {
        id: 8,
        name: 'Blog & Chat',
        github: 'https://github.com/Osama-Jeb/Blog',
        website: 'https://myblogproject.vercel.app/',
        desc: {
            en: "A blog platform where members can create accounts, share written pieces, photos, and videos. Engage in lively conversations through our chat function, where you can exchange messages, images, and even PDF documents. Through this endeavor, I gained valuable experience in utilizing Firebase for backend operations, including authentication and file storage.",
            fr: "Une plateforme de blog où les membres peuvent créer un compte, partager des articles, des photos et des vidéos. Profitez de conversations animées via notre fonction de chat, avec échange de messages, d’images et même de documents PDF. Ce projet m’a permis d’acquérir une grande expérience avec Firebase, notamment pour l’authentification et le stockage."
        },
        detailedDesc: {
            en: "A full-featured social blogging platform with real-time chat capabilities. Users can create rich content posts, engage in discussions, and share various media types in a modern, responsive interface.",
            fr: "Une plateforme de blog sociale complète avec chat en temps réel. Les utilisateurs peuvent créer des publications riches, échanger dans des discussions et partager divers types de médias via une interface moderne et responsive."
        },
        techs: [
            { name: 'ReactJS', color: 'bg-[#00d8ff]' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
            { name: 'Firebase', color: 'bg-alpha text-white' }
        ],
        preview: blogPreview,
        timeline: {
            en: "1 months (Personal project)",
            fr: "1 mois (Projet personnel)"
        },
        challenges: [
            {
                en: "Real-time chat implementation",
                fr: "Implémentation de chat en temps réel"
            },
            {
                en: "File upload and storage management",
                fr: "Gestion du téléchargement et du stockage de fichiers"
            },
            {
                en: "Rich text editor integration",
                fr: "Intégration d’un éditeur de texte enrichi"
            }
        ],
        solutions: [
            {
                en: "Used Firebase Realtime Database for chat",
                fr: "Utilisation de Firebase Realtime Database pour le chat"
            },
            {
                en: "Implemented Firebase Storage for media files",
                fr: "Mise en place de Firebase Storage pour les fichiers médias"
            },
            {
                en: "Integrated rich text editor with custom styling",
                fr: "Intégration d’un éditeur de texte enrichi avec style personnalisé"
            }
        ],
        keyFeatures: [
            {
                en: "Rich text blog editor",
                fr: "Éditeur de blog avec texte enrichi"
            },
            {
                en: "Real-time chat system",
                fr: "Système de chat en temps réel"
            },
            {
                en: "Media file sharing",
                fr: "Partage de fichiers multimédias"
            },
            {
                en: "User authentication",
                fr: "Authentification des utilisateurs"
            },
            {
                en: "Responsive design",
                fr: "Design responsive"
            }
        ],
        lessonsLearned: [
            {
                en: "Real-time application development",
                fr: "Développement d’applications en temps réel"
            },
            {
                en: "Firebase ecosystem mastery",
                fr: "Maîtrise de l’écosystème Firebase"
            },
            {
                en: "File handling and optimization",
                fr: "Gestion et optimisation des fichiers"
            }
        ],
        futureImprovements: [
            {
                en: "Advanced text editor features",
                fr: "Fonctionnalités avancées de l’éditeur de texte"
            },
            {
                en: "Push notifications",
                fr: "Notifications push"
            },
            {
                en: "Content moderation system",
                fr: "Système de modération de contenu"
            }
        ],
        additionalImages: []
    }
];

