import type { NextPage } from "next"
import Head from "next/head"
// import Image from "next/image"

const NewsAboutUs: NextPage = () => {
  const title: string = "СМИ о нас"
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
    </div>
  )
}

export default NewsAboutUs
