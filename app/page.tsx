'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Comfortaa, Zen_Loop } from "next/font/google";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";
import Link from "next/link";
import { aboutMe, projects, stack } from "@/utils";


const font = Comfortaa({
  subsets: ["latin"],
})
const font_1 = Zen_Loop({ subsets: ["latin-ext"], weight: "400" })

export default function Home() {

  return (
    <div style={{ backgroundColor: "#1a1a1a", ...font.style, }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", height: "100vh", flexWrap: "wrap", color: "#cacaca", flex: 1 }} className={styles.container}>
        <Image priority style={{ height: '100vh', width: "100%", minWidth: "450px", maxWidth: "600px", objectFit: "cover" }} width={700} height={900} src={'/heroImage.jpeg'} alt="Diomedes Valllejo" />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", flex: 1, gap: 35, top: 0, zIndex: 2, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, }}>
          <Image width={60} height={60} src={'/bulb.gif'} alt="bulb light" />
          <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}>DO YOU HAVE AN IDEA?</h1>
          <h3 style={{ fontSize: 20, width: "70%", minWidth: 320, textAlign: "center", fontWeight: "normal" }}>Lets make it happen! my name is <strong style={{ fontWeight: "bold", color: "white" }}>Diomedes Vallejo</strong> and I have been developing people’s dreams and ideas since <strong style={{ fontWeight: "bold", color: "white" }}>2020</strong>.</h3>
          <h3 style={{ fontSize: 20, width: "70%", minWidth: 320, textAlign: "center" }}>Whether you are <strong style={{ fontWeight: "bold", color: "white" }}>starting</strong> your project or want to <strong style={{ fontWeight: "bold", color: "white" }}>level up</strong>. Im here to take it where it has to be taken.</h3>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 20 }}>
            <Link href={'https://www.linkedin.com/in/diomedes-alexander-vallejo-perez/'}><LinkedinFilled style={{ fontSize: 40 }} /></Link>
            <Link href={'https://github.com/24Alex28'}><GithubFilled style={{ fontSize: 40 }} /></Link>
            <Link href={"https://mail.google.com/mail/?view=cm&fs=1&to=01davp@gmail.com&su=Hello&body=I%20want%20to%20connect!"}><MailFilled style={{ fontSize: 40 }} /></Link>
          </div>
        </div>
      </div>
      
   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: "black", color: "#cacaca", flex: 1 }}>
       <div className={styles.section} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 35, top: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, position: "inherit" }} >
        <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={60} height={60} src={'/bulb.gif'} alt="bulb light" />
        <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}>Something you should know  <span style={{ fontWeight: "bold" }}>about me</span> </h1>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40 }}>

          {aboutMe.map(({ icon, description }, index) =>
            <div className={styles.cardContainer} key={index} style={{ height: "400px", width: "300px", minWidth: 300, textAlign: "center", border: "1px solid #cacaca", padding: 20, borderRadius: 30, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              {icon}
              <p style={{ fontSize: 20, color: "white", fontWeight: "normal", marginTop: 40 }}>{description}</p>
            </div>)}
        </div>
      </div>

      <div className={styles.section} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 35, top: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, position: "inherit" }} >
        <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={60} height={60} src={'/bulb.gif'} alt="bulb light" />
        <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}><span style={{ fontWeight: "bold" }}>Once</span> ideas, <span style={{ fontWeight: "bold" }}>Now</span>  real projects</h1>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40 }}>

          {projects.map(({ companyPhoto, description, title, projectLink }, index) =>
            <div className={styles.cardContainer} key={index} style={{ height: "500px", width: "300px", minWidth: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", textAlign: "center", border: "1px solid #cacaca", padding: 20, borderRadius: 30, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              {companyPhoto && <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={companyPhoto} alt="Company Logo" />}
              <p style={{ fontSize: 20, color: "white", fontWeight: "bold", marginTop: 5, flex: 1 }}>{title}</p>
              <p style={{ fontSize: 20, color: "#cacaca", fontWeight: "normal", flex: 1 }}>{description}</p>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 10, width: "75%" }}>
                {projects[index].stack.map((icon, i) => (
                  <span key={i} style={{ fontSize: 10 }}>{icon}</span>
                ))}
              </div>
              {projectLink ? <a className={styles.button} href={projectLink}>View Project</a> : <button className={styles.button}>Private project</button>}

            </div>)}
        </div>
      </div>

      <div className={styles.section} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 35, top: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, position: "inherit" }} >
        <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={60} height={60} src={'/bulb.gif'} alt="bulb light" />
        <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}><span style={{ fontWeight: "bold" }}>Right</span> tools, <span style={{ fontWeight: "bold" }}>Faster </span>deployment</h1>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40 }}>

          {stack.map(({ companyPhoto, description, title }, index) =>
            <div className={styles.cardContainer} key={index} style={{ height: "400px", width: "300px", minWidth: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", textAlign: "center", border: "1px solid #cacaca", padding: 20, borderRadius: 30, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              {companyPhoto && <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={companyPhoto} alt="Company Logo" />}
              <p style={{ fontSize: 20, color: "white", fontWeight: "bold", marginTop: 5, flex: 1 }}>{title}</p>
              <p style={{ fontSize: 20, color: "#cacaca", fontWeight: "normal", flex: 1 }}>{description}</p>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 10, width: "100%" }}>
                {stack[index].stack.map((icon, i) => (
                  <span key={i} style={{ fontSize: 10 }}>{icon}</span>
                ))}
              </div>
            </div>)}
        </div>
      </div>


      <div className={styles.section} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 35, top: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, position: "inherit" }} >
        <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={60} height={60} src={'/bulb.gif'} alt="bulb light" />
        <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}>Still thinking about it? <span style={{ fontWeight: "bold" }}>let&apos;s talk</span></h1>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
          <Image style={{ objectFit: "cover", borderRadius: "100%" }} width={260} height={260} src={'/heroImage.jpeg'} alt="Diomedes Valllejo" />
        </div>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 20 }}>
          <Link href={'https://www.linkedin.com/in/diomedes-alexander-vallejo-perez/'}><LinkedinFilled style={{ fontSize: 40 }} /></Link>
          <Link href={'https://github.com/24Alex28'}><GithubFilled style={{ fontSize: 40 }} /></Link>
          <Link href={"https://mail.google.com/mail/?view=cm&fs=1&to=01davp@gmail.com&su=Hello&body=I%20want%20to%20connect!"}><MailFilled style={{ fontSize: 40 }} /></Link>
        </div>
      </div>
   </div>
    </div>
  );
}
