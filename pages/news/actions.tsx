import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const Actions: NextPage = () => {
  const title: string = "Акции приюта"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Actions
