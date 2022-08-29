import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const User: NextPage = () => {
  const title: string = "Профиль"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default User
