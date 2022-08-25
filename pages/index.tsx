import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.scss"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1 className={styles.title}>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>
    </div>
  )
}

export default Home
