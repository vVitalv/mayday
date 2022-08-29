import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const Communication: NextPage = () => {
  const title: string = "Связаться с нами"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Communication
