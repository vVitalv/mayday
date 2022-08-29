import type { NextPage } from "next"
import Head from "next/head"
// import Image from "next/image"

const ShelterNews: NextPage = () => {
  const title: string = "Новости приюта"
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
    </div>
  )
}

export default ShelterNews
