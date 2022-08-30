import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const Lodgers: NextPage = () => {
  const title: string = "Животные"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Lodgers
