import type { NextPage } from "next"
import Head from "next/head"

const HeadTitle: NextPage = ({ title }) => {
  const pageTitle: string = `${title} | ${process.env.NEXT_PUBLIC_SITE_TITLE}`
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  )
}

export default HeadTitle
