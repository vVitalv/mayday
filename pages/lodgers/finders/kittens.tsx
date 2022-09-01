import type { NextPage } from "next"

import HeadTitle from "../../../components/title"

const Kittens: NextPage = () => {
  const title: string = "Котята"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Kittens
