import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const LastNews: NextPage = () => {
  const title: string = "Последние новости"
  const pageTitle: string = `${title} | ${process.env.NEXT_PUBLIC_SITE_TITLE}`
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default LastNews
