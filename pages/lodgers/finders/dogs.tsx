import type { NextPage } from "next"

import HeadTitle from "../../../components/title"

const Dogs: NextPage = () => {
  const title: string = "Собаки"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Dogs
