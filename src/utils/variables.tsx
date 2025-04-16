import { features } from "process";

export const skills = [
    { src: require("@images/icons/html.svg").default, alt: "HTML" },
    { src: require("@images/icons/css.svg").default, alt: "CSS" },
    { src: require("@images/icons/git.svg").default, alt: "Git" },
    { src: require("@images/icons/api.svg").default, alt: "REST API" },
    { src: require("@images/icons/jira.svg").default, alt: "Jira" },
    { src: require("@images/icons/js.svg").default, alt: "JavaScript" },
    // { src: require("@images/testing.svg").default, alt: "Testing" },
    { src: require("@images/icons/next.svg").default, alt: "Next.js" },
    { src: require("@images/icons/node.svg").default, alt: "Node.js" },
    { src: require("@images/icons/react.svg").default, alt: "React" },
    { src: require("@images/icons/responsive.svg").default, alt: "Adaptive Design" },
    { src: require("@images/icons/sass.svg").default, alt: "Sass" },
    { src: require("@images/icons/terminal.svg").default, alt: "Terminal" },
    { src: require("@images/icons/ts.svg").default, alt: "TypeScript" },
    { src: require("@images/icons/mongo.svg").default, alt: "MongoDB" },
    { src: require("@images/icons/tailwindcss-dark.svg").default, alt: "Tailwind CSS" },
    { src: require("@images/icons/jetpackcompose.svg").default, alt: "Jetpack Compose" },
    { src: require("@images/icons/kotlin-icon.svg").default, alt: "Kotlin" },
    { src: require("@images/icons/swiftui.svg").default, alt: "SwiftUI" },
    { src: require("@images/icons/swift.svg").default, alt: "Swift" },
    { src: require("@images/icons/uikit.svg").default, alt: "UIKit" },
    { src: require("@images/icons/expressjs-dark.svg").default, alt: "Express.js" },
    { src: require("@images/icons/vercel.svg").default, alt: "Vercel" },
    { src: require("@images/icons/cypress.svg").default, alt: "Cypress" },
    { src: require("@images/icons/githubactions.svg").default, alt: "Github Actions" },

];


export const projects = [
    {
        src: require("@images/1824website.png").default,
        thumbnail: require("@images/thumbnails/1824web.png").default,
        link: "nda",
        heading: '18/24 Website',
        description: `As part of my work with 18/24, I was tasked with rebuilding their entire website from the ground up.
            I replaced the old static version with a modern, fully responsive site. I handled the frontend architecture, design adaptation, animations, page-level optimization, and even wrote the automated tests for it.
            Even though I didn’t own the project, I was responsible for every part of its implementation — and proud to have seen it go live.`,
        features: "Next.JS, Tailwind CSS, mobile-first approach, Cypress Testing, React, Typescript",
        web: "https://www.1824.co.il/",
        id: 11,
        anchor: "1824Web"
    },
    {
        src: require("@images/1824app.png").default,
        thumbnail: require("@images/thumbnails/app.png").default,
        link: "nda",
        heading: '18/24 App',
        description: `I also contributed to the ongoing redesign of the 18/24 mobile app. I implemented several key screens — including Login, Registration, and the Main Menu — using SwiftUI for iOS and Jetpack Compose for Android.
Some of the features I worked on were published to the App Store and Google Play, which was a first for me. It gave me experience with real-world release cycles and the responsibility that comes with shipping to production.`,
        features: "SwiftUI, UIKit, Combine, Jetpack Compose, Appcompat",
        web: "none",
        id: 10,
        anchor: "1824App"
    },
    {
        src: require("@images/desight.png").default,
        thumbnail: require("@images/thumbnails/desight.png").default,
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
        thumbnail: require("@images/thumbnails/portfolio.png").default,
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
        thumbnail: require("@images/thumbnails/book-cover.svg").default,
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
        thumbnail: require("@images/thumbnails/libira.jpg").default,
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
        thumbnail: require("@images/thumbnails/habit.png").default,
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
        thumbnail: require("@images/thumbnails/news.png").default,
        heading: "News Explorer",
        description: "Search the latest news by any topic you want, and save the articles from the NewsAPI you've liked to your page.",
        features: "Back-end authorization, Node.JS, React, Adaptive design, MongoDB, external API",
        web: 'none',
        id: 4,
        anchor: "news"
    },
    {
        src: require("@images/around.png").default,
        thumbnail: require("@images/thumbnails/around.png").default,
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
        thumbnail: require("@images/thumbnails/homeland.jpg").default,
        link: 'https://github.com/mistifikatorcat/web_project_3',
        heading: "Practicum Art Gallery",
        description: "This is the second project of the Web Development program at Practicum by Yandex. It was created using HTML and CSS, based on the design brief.",
        features: "Semantic HTML5, BEM, CSS",
        web: 'none',
        id: 2,
        anchor: "homeland"
    },
    {
        src: require("@images/library.png").default,
        thumbnail: require("@images/thumbnails/library.png").default,
        link: 'https://github.com/mistifikatorcat/project_2',
        heading: "Practicum Library",
        description: "My first project as a part of Practicum course. Plain html and css, nothing more, nothing less.",
        features: "html, css",
        web: 'none',
        id: 1,
        anchor: "library"
    },
];


export const journey = [

    {
        year: 2022,
        description: `2022 was my last serious attempt to get into development. I’d tried before — countless tutorials, a bunch of abandoned side projects — but never got far. This time, I joined a structured course and followed it through.
      
        ||Something clicked. For the first time, I built projects that felt real and they weren’t just exercises; they were working products with actual frontend and backend logic. 

       ||That’s when I realized that I'm really onto something.`,
        projects: [1, 2, 3, 4],
        stack: "HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB"
    },

    {
        year: 2023,
        description: `2023 started with my first solo project — a habit tracker. It was technically similar to the News Explorer I built earlier, but this time I built it entirely on my own, from setup to deployment.

||Later that year, I teamed up with a few friends to start what we called Desight Studio — our own little web studio experiment. We took on real projects, split responsibilities, and worked like a small product team. My focus was mostly on UI implementation and responsive layout, but I learned a lot about team communication, fast feedback loops, and keeping a consistent codebase across contributors.

||That year, I also added TypeScript, Next.js, Vercel, and SASS to my stack. Slowly but surely, I was becoming the kind of developer I had once looked up to.`,

        projects: [5, 6, 7, 9],
        stack: "Typescript, Vercel, Sass, Next.JS, Three.js, Framer-motion"
    },

    {
        year: 2024,
        description: `
        2024 took an unexpected turn. I ran into someone who was looking for a junior mobile developer to help with a project called 18/24. At that point, I hadn’t planned to get into mobile — but I was curious, and said yes.
       
            ||A few months later, I had contributed production-level code to their mobile app: registration flow, login, main menu — all live on the App Store and Google Play.

            ||I also built their new marketing site from scratch. It was my first time working mobile-first, using Tailwind CSS, and writing automated tests with Cypress. It pushed me out of my comfort zone, and helped me grow faster than any course ever did.
        `,
        projects: [10, 11],
        stack: "Swift, SwiftUI, UIKit, Kotlin, Jetpack Compose, Tailwind CSS, Cypress"
    },

    {
        year: 2025,
        description: `
        After wrapping up my work with 18/24, I’ve been refining my skills, experimenting with new tools, and planning the next step. I’m looking for a new challenge — ideally one where I can contribute to real products, collaborate with smart people, and keep leveling up as a developer.

            ||I’m ready for it.
        `,
        projects: [8],
        stack: "Refreshing everything I know, to keep up to the rest of the world :)"
    },

]

// export const currentProjects = [
//     { src: require("@images/placeholder.png").default, link: 'https://github.com/mistifikatorcat/tablemafia', heading: '10LN Mafia Club', description: "I like to play the intellectual game of Mafia, also known as Werewolf. Right now I'm working on an online-hub for the members of our club, where people can chat, discuss and keep track of their games and individual plays. As for now, I am working on a back-end side of the project, the design is under construction.", features: "To Be Determined" }
// ];

// export const plans = [

//     { title: "CREATING THE HUB FOR MAFIA-GAME CLUB.", steps: ['Collected the inital information about players', 'Based on the info, created a database on which the back-end will be formed'], haveTo: ['Create complete API for the hub', 'Design a website', 'Write the front-end and connect it to the back-end'] },
//     { title: "GETTING A JOB IN HI-TECH SPHERE", steps: ['Studied the Full-Stack development', 'Hardened up my skills in real-life projects', 'Created CV', 'Created own web-portfolio'], haveTo: ['Send my CV to the fellow HRs and organizations', 'Pass the interview', 'Become a part of a team, improve my skills, find friends within my fellow colleagues'] },

// ]