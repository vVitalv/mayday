import type { AppProps } from "next/app"
import Head from "next/head"

import "../styles/globals.scss"
import MainLayout from "../components/main.layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Head>
        <meta
          name='description'
          content='Ивановский городской общественный фонд по спасению животных "Проект Майский день"'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='HandheldFriendly' content='true' />
        <meta name='MobileOptimized' content='width' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <link rel='icon' href='/favicon.svg' sizes='any' type='image/svg+xml' />
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
