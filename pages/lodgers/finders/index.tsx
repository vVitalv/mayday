import type { NextPage } from "next"

import HeadTitle from "../../../components/title"

const Finders: NextPage = () => {
  const title: string = "Ищут дом"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Finders
