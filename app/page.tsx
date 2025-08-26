'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Comfortaa, Zen_Loop } from "next/font/google";
import { BulbFilled, BulbOutlined, CheckCircleOutlined, GithubFilled, LinkedinFilled, MailFilled, SettingOutlined } from "@ant-design/icons";
import Link from "next/link";
import { aboutMe, challenges, projects, stack } from "@/utils";
import ScrollReveal from "@/hook";
import Contact from "@/UI/contact";


const font = Comfortaa({
  subsets: ["latin"],
})
const font_1 = Zen_Loop({ subsets: ["latin-ext"], weight: "400" })

export default function Home() {

  return (
    <div style={{ backgroundColor: "#1a1a1a", ...font.style, }}>
      <div id="home" style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", height: "100dvh", flexWrap: "wrap", color: "#cacaca", flex: 1 }} className={styles.container}>
        <Image priority style={{ height: '100dvh', width: "100%", minWidth: "450px", maxWidth: "600px", objectFit: "cover" }} width={700} height={900} src={'/heroImage.jpeg'} alt="Diomedes Valllejo" />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", flex: 1, gap: 35, top: 0, zIndex: 2, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, }}>
          <Image width={60} height={60} src={'/bulb.gif'} alt="bulb light" />
          <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}>DO YOU HAVE AN IDEA?</h1>
          <h3 style={{ fontSize: 20, width: "70%", minWidth: 320, textAlign: "center", fontWeight: "normal" }}>Lets make it happen! my name is <strong style={{ fontWeight: "bold", color: "white" }}>Diomedes Vallejo</strong> and I have been developing people’s dreams and ideas since <strong style={{ fontWeight: "bold", color: "white" }}>2020</strong>.</h3>
          <h3 style={{ fontSize: 20, width: "70%", minWidth: 320, textAlign: "center" }}>Whether you are <strong style={{ fontWeight: "bold", color: "white" }}>starting</strong> your project or want to <strong style={{ fontWeight: "bold", color: "white" }}>level up</strong>. Im here to take it where it has to be taken.</h3>
          <Contact />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", width: "100%", backgroundColor: "black", color: "#cacaca", flex: 1, height: "100%", gap: 150 }}>
        <div id="about me" className={styles.section} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 35, marginTop: 150, top: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, height: "100vh", }} >
          <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={60} height={60} src={'/bulb.gif'} alt="bulb light" />
          <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}>Something you should know  <span style={{ fontWeight: "bold" }}>about me</span> </h1>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40 }}>

            {aboutMe.map(({ icon, description }, index) =>
              <ScrollReveal key={index}>
                <div className={styles.cardContainer} key={index} style={{ height: "400px", width: "300px", minWidth: 300, textAlign: "center", border: "1px solid #cacaca", padding: 20, borderRadius: 30, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                  {icon}
                  <p style={{ fontSize: 20, color: "white", fontWeight: "normal", marginTop: 40 }}>{description}</p>
                </div></ScrollReveal>)}
          </div>
        </div>

        <div id='projects' className={styles.section} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 35, top: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, position: "inherit", height: "100vh" }} >
          <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={60} height={60} src={'/bulb.gif'} alt="bulb light" />
          <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}><span style={{ fontWeight: "bold" }}>Once</span> ideas, <span style={{ fontWeight: "bold" }}>Now</span>  real projects</h1>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40 }}>

            {projects.map(({ companyPhoto, description, title, projectLink }, index) =>
              <ScrollReveal key={index}>
                <div className={styles.cardContainer} key={index} style={{ height: "500px", width: "300px", minWidth: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", textAlign: "center", border: "1px solid #cacaca", padding: 20, borderRadius: 30, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                  {companyPhoto && <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={companyPhoto} alt="Company Logo" />}
                  <p style={{ fontSize: 20, color: "white", fontWeight: "bold", marginTop: 5, flex: 1 }}>{title}</p>
                  <p style={{ fontSize: 20, color: "#cacaca", fontWeight: "normal", flex: 1 }}>{description}</p>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 10, width: "75%" }}>
                    {projects[index].stack.map(({name, icon}, i) => <div className={styles.techImage}  key={i}>
                      <div className={styles.textTag}> <span key={i} style={{ fontSize: 10 }}> {name}</span></div>
                      <span key={i} style={{ fontSize: 10 }}> {icon}</span>
                    </div>
                    )}
                  </div>
                  {projectLink ? <a style={{ color: "white" }} className={styles.button} href={projectLink}>View project</a> : <button className={styles.button}>Private project</button>}

                </div></ScrollReveal>)}
          </div>
        </div>

        <div id='achievements' className={styles.section} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 35, top: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, position: "inherit", height: "100vh" }} >
          <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={60} height={60} src={'/bulb.gif'} alt="bulb light" />
          <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}>No <span style={{ color: "white", fontWeight: "bold" }}>challenge</span> is too big to be <span style={{ color: "white", fontWeight: "bold" }}>handled</span></h1>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40 }}>

            {challenges.map(({ companyPhoto, challenge, result, solution, companyName }, index) =>
              <ScrollReveal key={index}>
                <div className={styles.cardContainer} key={index} style={{ minHeight: "300px", width: "100%", maxWidth: "720px", minWidth: 300, gap: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", textAlign: "center", border: "1px solid #cacaca", padding: 20, borderRadius: 30, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                  {companyPhoto && <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={40} height={40} src={companyPhoto} alt="Company Logo" />}
                  <p style={{ fontSize: 15, fontWeight: "bolder", color: "white", flex: 1, textAlign: "center" }}>{companyName}</p>
                  <div id="challenge" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 10, marginRight: 'clamp(0px, 2vw, 80px)', flexWrap: "wrap" }}>
                    <p style={{ fontSize: 15, fontWeight: "bolder", color: "#cacaca", flex: 1, textAlign: "justify", padding: 10, borderRadius: 10, }}><span style={{ color: "white", fontWeight: "bold" }}><SettingOutlined style={{ color: "orange" }} /> Challenge: </span>{challenge}</p>
                    <p style={{ fontSize: 15, color: "#cacaca", fontWeight: "normal", flex: 1, textAlign: "justify", padding: 10, borderRadius: 15 }}><span style={{ color: "white", fontWeight: "bold" }}><BulbFilled style={{ color: "yellow" }} /> Solution: </span>{solution}</p>
                    <p style={{ fontSize: 15, color: "#cacaca", fontWeight: "normal", flex: 1, textAlign: "justify", padding: 10, borderRadius: 15 }}><span style={{ color: "white", fontWeight: "bold" }}><CheckCircleOutlined style={{ color: "green" }} /> Results: </span>{result}</p>

                  </div>


                </div></ScrollReveal>)}
          </div>
        </div>

        <div id="frameworks and tools" className={styles.section} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 35, top: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, position: "inherit", height: "100vh" }} >
          <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={60} height={60} src={'/bulb.gif'} alt="bulb light" />
          <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}><span style={{ fontWeight: "bold" }}>Right</span> tools, <span style={{ fontWeight: "bold" }}>Faster </span>deployment</h1>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40 }}>

            {stack.map(({ companyPhoto, description, title , stack}, index) =>
              <ScrollReveal key={index}>
                <div className={styles.cardContainer} key={index} style={{ height: "400px", width: "300px", minWidth: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", textAlign: "center", border: "1px solid #cacaca", padding: 20, borderRadius: 30, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                  {companyPhoto && <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={150} height={150} src={companyPhoto} alt="Company Logo" />}
                  <p style={{ fontSize: 20, color: "white", fontWeight: "bold", marginTop: 5, flex: 1 }}>{title}</p>
                  <p style={{ fontSize: 20, color: "#cacaca", fontWeight: "normal", flex: 1 }}>{description}</p>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 10, width: "100%" }}>
                    {stack.map(({name, icon}, i) => <div className={styles.techImage}  key={i}>
                      <div className={styles.textTag}> <span key={i} style={{ fontSize: 10 }}> {name}</span></div>
                      <span key={i} style={{ fontSize: 10 }}> {icon}</span>
                    </div>
                    )}
                  </div>
                </div></ScrollReveal>)}
          </div>
        </div>


        <ScrollReveal key={'contact me'}> <div id="contact me" className={styles.section} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, marginBottom: "clamp(1px , 20vw, 10px)", gap: 35, top: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, position: "inherit", height: "100vh" }} >

          <Image style={{ textAlign: "center", alignSelf: "center", justifySelf: "center" }} width={60} height={60} src={'/bulb.gif'} alt="bulb light" />
          <h1 style={{ fontSize: 'clamp(30px,20vw,90px)', textAlign: "center", color: "white" }} className={font_1.className}>Still thinking about it? <span style={{ fontWeight: "bold" }}>let&apos;s talk</span></h1>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
            <Image style={{ objectFit: "cover", borderRadius: "100%" }} width={260} height={260} src={'/heroImage.jpeg'} alt="Diomedes Valllejo" />
          </div>
          <Contact />
        </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
