import html from "../assets/images/skills/html.svg";
import css from "../assets/images/skills/css.svg";
import javascript from "../assets/images/skills/javascript.svg";
import php from "../assets/images/skills/php.svg";
import typescript from "../assets/images/skills/typescript.svg";
import expo from "../assets/images/skills/expo.svg";
import sass from "../assets/images/skills/sass.svg";

import react from "../assets/images/skills/react.svg";
import laravel from "../assets/images/skills/laravel.svg";
import tailwind from "../assets/images/skills/tailwind.svg";
import inertia from "../assets/images/skills/inertia.svg";

import git from "../assets/images/skills/Git.svg";
import github from "../assets/images/skills/GitHub.svg";

export const languages: Skill[] = [
    {
        name: 'HTML5',
        image: html,
        bg: 'border-[#e44d2680]'
    },
    {
        name: 'CSS',
        image: css,
        bg: 'border-[#1172b880]'
    },
    {
        name: 'SASS',
        image: sass,
        bg: 'border-[#cc669980]'
    },
    {
        name: 'JAVASCRIPT',
        image: javascript,
        bg: 'border-[#f7e02580]'
    },
    {
        name: 'TYPESCRIPT',
        image: typescript,
        bg: 'border-[#3178c680]'
    },
    {
        name: 'PHP',
        image: php,
        bg: 'border-[#7b7fb580]'
    },
];

export const frameworks: Skill[] = [
    {
        name: 'REACT',
        image: react,
        bg: 'border-[#00d8ff80]'
    },
    {
        name: 'REACT NATIVE',
        image: expo,
        bg: 'border-[#b5b4b480]'
    },
    {
        name: 'LARAVEL',
        image: laravel,
        bg: 'border-[#ff2d2080]'
    },
    {
        name: 'INERTIA',
        image: inertia,
        bg: 'border-[#8964eb80]'
    },
];

export const others: Skill[] = [
    {
        name: 'GIT',
        image: git,
        bg: 'border-[#f0503380]'
    },
    {
        name: 'GITHUB',
        image: github,
        bg: 'border-[#282828]'
    },
    {
        name: 'TAILWIND',
        image: tailwind,
        bg: 'border-[#30b8c780]'
    },

]