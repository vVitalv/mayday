import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const Donate: NextPage = () => {
  const title: string = "Помощь онлайн"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Donate
