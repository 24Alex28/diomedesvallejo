import Image from "next/image"

export type aboutMe = {
    icon: any,
    description: string
}

export type project = {
    companyPhoto: string
    title: string,
    description: string,
    projectLink?: string
    stack: any[]
}

export type challenge = {
    companyPhoto: string
    companyName: string,
    challenge: string,
    solution: string,
    result: string
}

export const techStack = {
    Nextjs: { name: 'Nextjs', photo: '/Nextjs.png' },
    Firebase: { name: 'Firebase', photo: '/firebase.png' },
    Neon: { name: 'Neon DB', photo: '/Neon.png' },
    Postgres: { name: 'Postgres DB', photo: '/Postgre.png' },
    Gemini: { name: 'Google Gemini', photo: '/gemini.png' },
    Spring: { name: 'Spring boot', photo: '/spring.svg' },
    React: { name: 'React', photo: '/react.png' },
    Oracle: { name: 'Oracle DB', photo: '/oracle.png' },
    Openshift: { name: 'Openshift', photo: '/redhat.png' },
    SpringBatch: { name: 'Spring batch', photo: '/spring.svg' },
    Gitlab: { name: 'Gitlab', photo: '/gitlab.png' },
    Jenkins: { name: 'Jenkins', photo: '/jenkins.png' },
    Nexus: { name: 'Nextjs', photo: '/Nextjs.png' },
    Express: { name: 'Express', photo: '/express-js.png' },
    Html: { name: 'HTML', photo: '/html.png' },
    Css: { name: 'CSS', photo: '/css.png' },
    JavaScript: { name: "Java script", photo: '/js.png' },
    Vercel:{name:'Vercel', photo:'/vercel.svg'}
}

export const aboutMe: aboutMe[] = [{
    description: 'A web/mobile developer who has been shipping high quality software ready for users to consume on each demand.',
    icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/dev.svg'} alt="Diomedes Valllejo" />
},
{
    description: 'Someone with well knowledge of top/emerging technologies who keeps up to date with the tech industrie.',
    icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/tech.svg'} alt="Diomedes Valllejo" />
},
{
    description: 'A person who owns your ideas and understand that each project comes with a dream and a due date.',
    icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/time.svg'} alt="Diomedes Valllejo" />
}
]

export const projects: project[] = [
    {
        companyPhoto: '/Milett.png',
        title: 'Milett Nourishing Nature',
        description: `An Ecommerce/Blog web application that allows users to purchase an learn more abot Milett's products and services.`,
        projectLink: 'https://milett.vercel.app/',
        stack: [techStack.Nextjs, techStack.Firebase, techStack.Neon, techStack.Postgres, techStack.Gemini].map(({ name, photo }: { name: string, photo: string }) => { return { icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={photo} alt={name} />, name } })
    },

    {
        companyPhoto: '/claro.png',
        title: 'Prepaid Bounces | Claro DR',
        description: `A transactional web app capabble of handling more than 7M transactions per month.`,
        stack: [techStack.Spring, techStack.React, techStack.Oracle, techStack.Openshift, techStack.Nexus, techStack.Gitlab, techStack.Jenkins].map(({ name, photo }: { name: string, photo: string }) => { return { icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={photo} alt={name} />, name } })
    },
    {
        companyPhoto: '/claro.png',
        title: 'Prepaid promotions | Claro DR',
        description: 'A web application that provide users with bonuses based on their consumption.',
        stack: [{ name: 'Spring batch', photo: '/spring.svg' }, { name: 'Nextjs', photo: '/Nextjs.png' }, { name: 'Oracle DB', photo: '/oracle.png' }, { name: 'Openshift', photo: '/redhat.png' }, { name: 'Nexus', photo: '/nexus.png' }, { name: 'Gitlab', photo: '/gitlab.png' }, { name: 'Jenkins', photo: '/jenkins.png' }].map(({ name, photo }: { name: string, photo: string }) => { return { icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={photo} alt={name} />, name } })
    },
    {
        companyPhoto: '/ISFODOSU.gif',
        title: 'FEM Transportation | ISFODOSU',
        description: 'A web/mobile application for handing the transportation, allowing the live tracking of the buses and the students.',
        stack: [techStack.Nexus, techStack.Firebase, techStack.Neon, techStack.Postgres].map(({ name, photo }: { name: string, photo: string }) => { return { icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={photo} alt={name} />, name } })
    },

    {
        companyPhoto: '/ISFODOSU.gif',
        title: 'Recurring Files | ISFODOSU',
        description: 'A web application for handling the recurring files, allowing easy access to common shared files and documents.',
        stack: [techStack.Nexus, techStack.Firebase, techStack.Neon, techStack.Postgres].map(({ name, photo }: { name: string, photo: string }) => { return { icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={photo} alt={name} />, name } })

    },

]

export const stack: project[] = [
    {
        companyPhoto: '/frontend.svg',
        title: 'Frontend development',
        description: `Your idea should be smooth, fast and easy to use. I can help you with that!`,
        projectLink: 'https://milett.vercel.app/',
        stack: [techStack.Nextjs, techStack.React, techStack.Html, techStack.Css, techStack.JavaScript].map(({ name, photo }: { name: string, photo: string }) => { return { icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={photo} alt={name} />, name } })
    },

    {
        companyPhoto: '/backend.svg',
        title: 'Backend development',
        description: `A strong backend is the foundation of a great application like yours.`,
        stack: [techStack.Spring, techStack.Express, techStack.Nextjs].map(({ name, photo }: { name: string, photo: string }) => { return { icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={photo} alt={name} />, name } })
    },
    {
        companyPhoto: '/database.svg',
        title: 'Database management',
        description: 'A well managed database is the key to a successful and fast application.',
        stack: [techStack.Oracle, techStack.Postgres, techStack.Neon, techStack.Firebase].map(({ name, photo }: { name: string, photo: string }) => { return { icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={photo} alt={name} />, name } })
    },
    {
        companyPhoto: '/deployment.svg',
        title: 'Deployment and DevOps',
        description: 'Present your idea to the world with the right tools and deployment strategy.',
        stack: [techStack.Openshift, techStack.Firebase, techStack.Gitlab, techStack.Jenkins, techStack.Vercel, techStack.Nexus].map(({ name, photo }: { name: string, photo: string }) => { return { icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={photo} alt={name} />, name } })
    },

]

export const challenges: challenge[] = [
    {
        companyPhoto: '/Milett.png',
        companyName: 'Milett Nourishing Nature',
        challenge: 'The design: The website had to be modern, and AI had to be integrated for customer service, always visible.',
        solution: `I made the hero section move to the background when the user scrolls down, and return to the front when the user scrolls up. 
        There is a floating button for AI assistance. The site is fast, easy to use, and provides a great user experience.`,
        result: 'A smooth, fast, and easy-to-use web application with AI integration for customer service and sales.'
    },

    {
        companyPhoto: '/claro.png',
        companyName: 'Claro | Prepaid Bounces',
        challenge: 'I had to catch all the transactions made by nine microservices and process them in a fast and reliable way.',
        solution: `I added triggers to the database that catch each transaction made by the microservices and send them to two well indexed tables, organizing them into categories.`,
        result: 'We are able to handle more than 7M transactions per month. The app runs fast, and when there is a bounce, we can send it back to its corresponding microservice to be reprocessed.'
    },
    {
        companyPhoto: '/claro.png',
        companyName: 'Claro | Prepaid Promotions',
        challenge: 'To segregate the customers.',
        solution: 'I had to make a query across tables from different schemas in order to create the correct segregation based on events defined by the user.',
        result: 'A new system for providing bonuses that allows segregation of users by dealer, activation date, or zone.'
    },
    {
        companyPhoto: '/ISFODOSU.gif',
        companyName: 'ISFODOSU | FEM Transportation',
        challenge: 'A reliable way to live-track buses and manage approval requests.',
        solution: 'I used Firebase Realtime Database to handle live locations of drivers’ phones and built an integration with Google Apps Script that hits an endpoint where I receive user approvals from Gmail.',
        result: 'A fully digitalized transportation system.'
    },

    {
        companyPhoto: '/ISFODOSU.gif',
        companyName: 'ISFODOSU | Recurring Files',
        challenge: 'To gather all the required information.',
        solution: 'I had to meet with each department leader to get the description of their recurring documents and available services.',
        result: 'A centralized platform where anyone with an institutional email can find recurring files and services organized by department.'
    },

]
