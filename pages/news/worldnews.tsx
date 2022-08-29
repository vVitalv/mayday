import type { NextPage } from "next"
import Head from "next/head"
// import Image from "next/image"

const WorldNews: NextPage = () => {
  const title: string = "Новости мира"
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
    </div>
  )
}

export default WorldNews
