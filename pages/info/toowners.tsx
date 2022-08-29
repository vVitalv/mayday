import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const ToOwners: NextPage = () => {
  const title: string = "Будущим владельцам"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default ToOwners
