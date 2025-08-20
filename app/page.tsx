'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Comfortaa, Zen_Loop } from "next/font/google";
import { BranchesOutlined, GithubFilled, LinkedinFilled } from "@ant-design/icons";
import Link from "next/link";


const font = Comfortaa({
  subsets: ["latin"],
})
const font_1 = Zen_Loop({ subsets: ["latin-ext"], weight: "400" })
type aboutMe = {
  icon: any,
  description: string
}

type project = {
  companyPhoto: string
  title: string,
  description: string,
  projectLink?: string
  stack: any[]
}
export default function Home() {

  const aboutMe: aboutMe[] = [{
    description: 'A web/mobile developer who has been shipping high quality software ready for users to consume on each demand',
    icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/dev.svg'} alt="Diomedes Valllejo" />
  },
  {
    description: 'Someone with well knowledge of top/emerging technologies who keeps up to date with the tech industrie',
    icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/tech.svg'} alt="Diomedes Valllejo" />
  },
  {
    description: 'A person that owns your idea and understand that each project comes with a dream and a due date',
    icon: <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/time.svg'} alt="Diomedes Valllejo" />
  }
  ]

  const projects: project[] = [
    {
      companyPhoto: '/Milett.png',
      title: 'Milett Nourishing Nature',
      description: `An Ecommerce/Blog web application that allows users to purchase an learn more abot Milett's products and services.`,
      projectLink: 'https://milett.vercel.app/',
      stack: [<Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/dev.svg'} alt="Diomedes Valllejo" />]
    },

    {
      companyPhoto: '/claro.png',
      title: 'Prepaid Bounces | Claro DR',
      description: 'A transactional web app capabble of handling more than 7M transactions per month.',
      stack: [<Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/dev.svg'} alt="Diomedes Valllejo" />]
    },
    {
      companyPhoto: '/claro.png',
      title: 'Prepaid promotions | Claro DR',
      description: 'A web application that provide users with bonuses and promotions based on their usage and consumption services.',
      stack: [<Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/dev.svg'} alt="Diomedes Valllejo" />]
    }, {
      companyPhoto: '/ISFODOSU.gif',
      title: 'FEM Transportation | ISFODOSU',
      description: 'A web/mobile application for handing the transportation, allowing the live tracking of the buses and the students.',
      stack: [<Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/dev.svg'} alt="Diomedes Valllejo" />]
    },

    {
      companyPhoto: '/ISFODOSU.gif',
      title: 'Recurring Files | ISFODOSU',
      description: 'A web application for handling the recurring files, allowing easy access to common shared files and documents.',
      stack: [<Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={'/dev.svg'} alt="Diomedes Valllejo" />]
    },

  ]



  return (
    <div style={{ backgroundColor: "#1a1a1a", ...font.style, }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", height: "100vh", flexWrap: "wrap", color: "#cacaca", flex: 1 }} className={styles.container}>
        <Image style={{ height: '100vh', width: "100%", minWidth: "450px", maxWidth: "600px", objectFit: "cover" }} width={700} height={900} src={'/heroImage.jpeg'} alt="Diomedes Valllejo" />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", flex: 1, gap: 35, top: 0, zIndex: 2, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, }}>
          <Image width={60} height={80} src={'/bulb.gif'} alt="Diomedes Valllejo" />
          <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}>DO YOU HAVE AN IDEA?</h1>
          <h3 style={{ fontSize: 20, width: "70%", minWidth: 320, textAlign: "center", fontWeight: "normal" }}>Lets make it happen! my name is <strong style={{ fontWeight: "bold", color: "white" }}>Diomedes Vallejo</strong> and I have been developing people’s dreams and ideas since <strong style={{ fontWeight: "bold", color: "white" }}>2020</strong>.</h3>
          <h3 style={{ fontSize: 20, width: "70%", minWidth: 320, textAlign: "center" }}>Whether you are <strong style={{ fontWeight: "bold", color: "white" }}>starting</strong> your project or want to <strong style={{ fontWeight: "bold", color: "white" }}>level up</strong>. Im here to take it where it has to be taken.</h3>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 20 }}>
            <Link href={'https://www.linkedin.com/in/diomedes-alexander-vallejo-perez/'}><LinkedinFilled style={{ fontSize: 40 }} href="www.google.com" /></Link>
            <Link href={'https://github.com/24Alex28'}><GithubFilled style={{ fontSize: 40 }} /></Link>
          </div>
        </div>
      </div>
      <div className={styles.section} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 35, top: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, position: "inherit" }} >
        <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={60} height={80} src={'/bulb.gif'} alt="Diomedes Valllejo" />
        <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}>Something you should know about me </h1>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40 }}>

          {aboutMe.map(({ icon, description }, index) =>
            <div className={styles.cardContainer} key={index} style={{ height: "400px", width: "300px", minWidth: 300, textAlign: "center", border: "1px solid #cacaca", padding: 20, borderRadius: 30, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              {icon}
              <p style={{ fontSize: 20, color: "white", fontWeight: "normal", marginTop: 40 }}>{description}</p>
            </div>)}
        </div>
      </div>

      <div className={styles.section} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 35, top: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, position: "inherit" }} >
        <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={60} height={80} src={'/bulb.gif'} alt="Diomedes Valllejo" />
        <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}><span style={{fontWeight:"bold"}}>Once</span> ideas, <span style={{fontWeight:"bold"}}>Now</span>  real projects</h1>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40 }}>

          {projects.map(({ companyPhoto, description, title, projectLink }, index) =>
            <div className={styles.cardContainer} key={index} style={{ height: "500px", width: "300px", minWidth: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", textAlign: "center", border: "1px solid #cacaca", padding: 20, borderRadius: 30, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              {companyPhoto && <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={companyPhoto} alt="Company Logo" />}
              <p style={{ fontSize: 20, color: "white", fontWeight: "bold", marginTop: 0, flex: 1 }}>{title}</p>
              <p style={{ fontSize: 20, color: "#cacaca", fontWeight: "normal", flex: 1, alignSelf: "flex-end" }}>{description}</p>
              {projectLink ? <a className={styles.button} href={projectLink}>View Project</a> : <a className={styles.button}>Private project</a>}

            </div>)}
        </div>
      </div>
    </div>
  );
}
