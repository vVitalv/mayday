import type { NextPage } from "next"

import HeadTitle from "../../../components/title"

const Cats: NextPage = () => {
  const title: string = "Кошки"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Cats
