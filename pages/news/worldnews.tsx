import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const WorldNews: NextPage = () => {
  const title: string = "Новости мира"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default WorldNews
