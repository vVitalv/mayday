import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const Newbies: NextPage = () => {
  const title: string = "Новички"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Newbies
