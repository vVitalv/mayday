import "../styles/globals.scss"
import Head from "next/head"
import type { AppProps } from "next/app"
import MainLayout from "../components/main.layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Head>
        <title> | May Day</title>
        <meta
          name='description'
          content='Ивановский городской общественный фонд по спасению животных "Проект Майский день"'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
