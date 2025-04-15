import { features } from "process";

export const skills = [
    { src: require("@images/html.svg").default, alt: "HTML" },
    { src: require("@images/css.svg").default, alt: "CSS" },
    { src: require("@images/git.svg").default, alt: "Git" },
    { src: require("@images/api.svg").default, alt: "REST API" },
    { src: require("@images/jira.svg").default, alt: "Jira" },
    { src: require("@images/js.svg").default, alt: "JavaScript" },
    // { src: require("@images/testing.svg").default, alt: "Testing" },
    { src: require("@images/next.svg").default, alt: "Next.js" },
    { src: require("@images/node.svg").default, alt: "Node.js" },
    { src: require("@images/react.svg").default, alt: "React" },
    { src: require("@images/responsive.svg").default, alt: "Adaptive Design" },
    { src: require("@images/sass.svg").default, alt: "Sass" },
    { src: require("@images/terminal.svg").default, alt: "Terminal" },
    { src: require("@images/ts.svg").default, alt: "TypeScript" },
    { src: require("@images/mongo.svg").default, alt: "MongoDB" },
    { src: require("@images/tailwindcss-dark.svg").default, alt: "Tailwind CSS" },
    { src: require("@images/jetpackcompose.svg").default, alt: "Jetpack Compose" },
    { src: require("@images/kotlin-icon.svg").default, alt: "Kotlin" },
    { src: require("@images/swiftui.svg").default, alt: "SwiftUI" },
    { src: require("@images/swift.svg").default, alt: "Swift" },
    { src: require("@images/uikit.svg").default, alt: "UIKit" },
    { src: require("@images/expressjs-dark.svg").default, alt: "Express.js" },
    { src: require("@images/vercel.svg").default, alt: "Vercel" },
    { src: require("@images/cypress.svg").default, alt: "Cypress" },
    { src: require("@images/githubactions.svg").default, alt: "Github Actions" },

];


export const projects = [
    {
        src: require("@images/placeholder.png").default,
        thumbnail: require("@images/thumbnail.png").default,
        link: "",
        heading: '18/24 Website',
        description: "",
        features: "",
        web: "https://www.1824.co.il/",
        id: 11,
        anchor: "1824Web"
    },
    {
        src: require("@images/placeholder.png").default,
        thumbnail: require("@images/thumbnail.png").default,
        link: "",
        heading: '18/24 App',
        description: "",
        features: "",
        web: "",
        id: 10,
        anchor: "1824App"
    },
    {
        src: require("@images/desight.png").default,
        thumbnail: require("@images/thumbnail.png").default,
        link: 'https://github.com/matveisch/desight',
        heading: 'Desight Studio',
        description: "The website for the startup studio, I'm currently being a part of. It has complex design and plenty of cool animations that I was happy to look-through and learn about.",
        features: "Next.js, zod, TS, Sass",
        web: 'https://desight.co',
        id: 9,
        anchor: "desight"
    },
    {
        src: require("@images/recursion.png").default,
        thumbnail: require("@images/thumbnail.png").default,
        link: 'https://github.com/mistifikatorcat/myportfolio',
        heading: "This very portfolio",
        description: "Even this portfolio is sort of challenge for me, because here I'm trying to build my own website from scratch, by using Next.js Vercel and a Telegram Bot for the first time. And if you're reading this, then it means I have succeeded :)",
        features: "Next.JS, Telegram Bot, React, Typescript, Vercel, Sass",
        web: 'none',
        id: 8,
        anchor: "portfolio"
    },
    {
        src: require("@images/beebook.png").default,
        thumbnail: require("@images/thumbnail.png").default,
        link: 'https://github.com/matveisch/bee-book',
        heading: "Bee Book by BeeTrade",
        description: "Commercial project for the book promotion. Took part in the development of this website as a part of Desight studio.",
        features: "Next.JS, React, Typescript, Vercel, Sass",
        web: 'none',
        id: 7,
        anchor: "beetrade"
    },
    {
        src: require("@images/libira.png").default,
        thumbnail: require("@images/thumbnail.png").default,
        link: 'https://github.com/matveisch/libiro',
        heading: "Libira Bar",
        description: "The first project I took part in making of as a part of the Desight team.",
        features: "Next.JS, React, Typescript, Vercel, Sass",
        web: 'https://libira.co.il/en/events/',
        id: 6,
        anchor: "libira"
    },
    {
        src: require("@images/habit.png").default,
        thumbnail: require("@images/thumbnail.png").default,
        link: 'https://github.com/mistifikatorcat/habit_tracker',
        heading: "Habit Tracker",
        description: "My first independent project. Web Application that lets you keep track of your habits. ",
        features: "Back-end authorization, Node.JS, React, Adaptive design, MongoDB",
        web: 'none',
        id: 5,
        anchor: "habit"
    },
    {
        src: require("@images/news.png").default,
        link: 'https://github.com/mistifikatorcat/news-explorer-frontend',
        thumbnail: require("@images/thumbnail.png").default,
        heading: "News Explorer",
        description: "Search the latest news by any topic you want, and save the articles from the NewsAPI you've liked to your page.",
        features: "Back-end authorization, Node.JS, React, Adaptive design, MongoDB, external API",
        web: 'none',
        id: 4,
        anchor: "news"
    },
    {
        src: require("@images/around.png").default,
        thumbnail: require("@images/thumbnail.png").default,
        link: 'https://github.com/mistifikatorcat/react-around-api-full',
        heading: "Around The Us",
        description: "The Around the US project is a photo-sharing web-application on React with node.js based back-end for users and content, where users can share their pictures and like pictures of the other users.",
        features: "Back-end authorization, Node.JS, React, Adaptive design",
        web: 'none',
        id: 3,
        anchor: "around"
    },
    {
        src: require("@images/homeland.png").default,
        thumbnail: require("@images/thumbnail.png").default,
        link: 'https://github.com/mistifikatorcat/web_project_3',
        heading: "From Homeland to Homeland",
        description: "This is the second project of the Web Development program at Practicum by Yandex. It was created using HTML and CSS, based on the design brief.",
        features: "Semantic HTML5, BEM, CSS",
        web: 'none',
        id: 2,
        anchor: "homeland"
    },
    {
        src: require("@images/coffeeshop.png").default,
        thumbnail: require("@images/thumbnail.png").default,
        link: 'https://github.com/mistifikatorcat/project_2',
        heading: "CoffeeShop",
        description: "My first project as a part of Practicum course. Plain html and css, nothing more, nothing less.",
        features: "html, css",
        web: 'none',
        id: 1,
        anchor: "coffeeshop"
    },
];


export const journey = [

    {
        year: 2022,
        description: `2022 was my last serious attempt to get into development. I’d tried before — countless tutorials, a bunch of abandoned side projects — but never got far. This time, I joined a structured course and stuck with it.
       Something clicked. For the first time, I built projects that felt real and they weren’t just exercises; they were working products with actual frontend and backend logic. 
       That’s when I realized that I'm really onto something.`,
        projects: [1, 2, 3, 4],
        stack: "HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB"
    },

    {
        year: 2023,
        description: "Finished the Practicum100 course, tried my own skills on building my own project from scratch. Then I've became a part of Desight web-studio team, where I polished my skills, by being provided real-world tasks and problems.",
        projects: [5, 6, 7, 9],
        stack: "Typescript, Vercel, Sass, Next.JS"
    },

    {
        year: 2024,
        description: "I started to work as a Junior Mobile Developer for 18/24 company, contributing its app to the production. Some of my changes like Login/Registration and Main Menu that I wrote, even made it to the App Store and Google Play! Also I wrote a brand-new website for them from scratch, for the first time trying mobile-first approach and Tailwind-CSS, as well as providing automated testing through Cypress.",
        projects: [10, 11],
        stack: "Swift, SwiftUI, UIKit, Kotlin, Jetpack Compose, Tailwind CSS, Cypress"
    },

    {
        year: 2025,
        description: "Right now I'm looking for a new opportunity to grow, collaborate, meet new great people with whom I can learn and build great products. So, feel free to reach out!",
        projects: [8]
    },

]

// export const currentProjects = [
//     { src: require("@images/placeholder.png").default, link: 'https://github.com/mistifikatorcat/tablemafia', heading: '10LN Mafia Club', description: "I like to play the intellectual game of Mafia, also known as Werewolf. Right now I'm working on an online-hub for the members of our club, where people can chat, discuss and keep track of their games and individual plays. As for now, I am working on a back-end side of the project, the design is under construction.", features: "To Be Determined" }
// ];

// export const plans = [

//     { title: "CREATING THE HUB FOR MAFIA-GAME CLUB.", steps: ['Collected the inital information about players', 'Based on the info, created a database on which the back-end will be formed'], haveTo: ['Create complete API for the hub', 'Design a website', 'Write the front-end and connect it to the back-end'] },
//     { title: "GETTING A JOB IN HI-TECH SPHERE", steps: ['Studied the Full-Stack development', 'Hardened up my skills in real-life projects', 'Created CV', 'Created own web-portfolio'], haveTo: ['Send my CV to the fellow HRs and organizations', 'Pass the interview', 'Become a part of a team, improve my skills, find friends within my fellow colleagues'] },

// ]