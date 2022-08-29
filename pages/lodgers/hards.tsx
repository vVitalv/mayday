import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const Hards: NextPage = () => {
  const title: string = "Герои дня"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Hards
