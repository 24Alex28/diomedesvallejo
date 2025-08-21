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

export const aboutMe: aboutMe[] = [{
    description: 'A web/mobile developer who has been shipping high quality software ready for users to consume on each demand.',
    icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/dev.svg'} alt="Diomedes Valllejo" />
},
{
    description: 'Someone with well knowledge of top/emerging technologies who keeps up to date with the tech industrie.',
    icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/tech.svg'} alt="Diomedes Valllejo" />
},
{
    description: 'A person that owns your idea and understand that each project comes with a dream and a due date.',
    icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/time.svg'} alt="Diomedes Valllejo" />
}
]

export const projects: project[] = [
    {
        companyPhoto: '/Milett.png',
        title: 'Milett Nourishing Nature',
        description: `An Ecommerce/Blog web application that allows users to purchase an learn more abot Milett's products and services.`,
        projectLink: 'https://milett.vercel.app/',
        stack: ['/Nextjs.png', '/firebase.png', '/Neon.png', '/Postgre.png', '/gemini.png'].map((icon: string) => <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={icon} alt="tech icon" />)
    },

    {
        companyPhoto: '/claro.png',
        title: 'Prepaid Bounces | Claro DR',
        description: `A transactional web app capabble of handling more than 7M transactions per month.`,
        stack: ['/spring.svg', '/react.png', '/oracle.png', '/redhat.png', '/nexus.png', '/gitlab.png', '/jenkins.png',].map((icon: string) => <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={icon} alt="tech icon" />)
    },
    {
        companyPhoto: '/claro.png',
        title: 'Prepaid promotions | Claro DR',
        description: 'A web application that provide users with bonuses based on their consumption.',
        stack: ['/spring.svg', '/Nextjs.png', '/oracle.png', '/redhat.png', '/nexus.png', '/gitlab.png', '/jenkins.png',].map((icon: string) => <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={icon} alt="tech icon" />)
    },
    {
        companyPhoto: '/ISFODOSU.gif',
        title: 'FEM Transportation | ISFODOSU',
        description: 'A web/mobile application for handing the transportation, allowing the live tracking of the buses and the students.',
        stack: ['/Nextjs.png', '/firebase.png', '/Neon.png', '/Postgre.png'].map((icon: string) => <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={icon} alt="tech icon" />)
    },

    {
        companyPhoto: '/ISFODOSU.gif',
        title: 'Recurring Files | ISFODOSU',
        description: 'A web application for handling the recurring files, allowing easy access to common shared files and documents.',
        stack: ['/Nextjs.png', '/firebase.png', '/Neon.png', '/Postgre.png',].map((icon: string) => <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={icon} alt="tech icon" />)

    },

]

export const stack: project[] = [
    {
        companyPhoto: '/frontend.svg',
        title: 'Frontend development',
        description: `Your idea should be smooth, fast and easy to use. I can help you with that!`,
        projectLink: 'https://milett.vercel.app/',
        stack: ['/Nextjs.png', '/react.png', '/html.png', '/css.png', '/js.png'].map((icon: string) => <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={icon} alt="tech icon" />)
    },

    {
        companyPhoto: '/backend.svg',
        title: 'Backend development',
        description: `A strong backend is the foundation of a great application like yours.`,
        stack: ['/spring.svg', '/express-js.png', '/Nextjs.png'].map((icon: string) => <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={icon} alt="tech icon" />)
    },
    {
        companyPhoto: '/database.svg',
        title: 'Database management',
        description: 'A well managed database is the key to a successful and fast application.',
        stack: ['/oracle.png', '/Postgre.png', '/firebase.png', '/Neon.png'].map((icon: string) => <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={icon} alt="tech icon" />)
    },
    {
        companyPhoto: '/deployment.svg',
        title: 'Deployment and DevOps',
        description: 'Present your idea to the world with the right tools and deployment strategy.',
        stack: ['/redhat.png', '/firebase.png', '/gitlab.png', '/jenkins.png', '/vercel.svg', '/nexus.png'].map((icon: string) => <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={30} height={30} src={icon} alt="tech icon" />)
    },

]