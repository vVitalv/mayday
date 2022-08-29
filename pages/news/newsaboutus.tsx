import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const NewsAboutUs: NextPage = () => {
  const title: string = "СМИ о нас"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default NewsAboutUs
