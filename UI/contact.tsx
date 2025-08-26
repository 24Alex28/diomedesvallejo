import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
   <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 20 }}>
            <Link href={'https://www.linkedin.com/in/diomedes-alexander-vallejo-perez/'}><LinkedinFilled style={{ fontSize: 40 }} /></Link>
            <Link href={'https://github.com/24Alex28'}><GithubFilled style={{ fontSize: 40 }} /></Link>
            <Link href={"https://mail.google.com/mail/?view=cm&fs=1&to=01davp@gmail.com&su=Hello&body=I%20want%20to%20connect!"}><MailFilled style={{ fontSize: 40 }} /></Link>
          </div>
  )
}

export default Contact