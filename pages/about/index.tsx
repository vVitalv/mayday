import type { NextPage } from "next"
import Head from "next/head"
// import Image from "next/image"

const About: NextPage = () => {
  const title: string = "О нас"
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
    </div>
  )
}

export default About
