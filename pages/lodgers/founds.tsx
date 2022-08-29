import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const Founds: NextPage = () => {
  const title: string = "Нашли дом"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Founds
