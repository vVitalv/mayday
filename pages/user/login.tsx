import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const Login: NextPage = () => {
  const title: string = "Вход"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Login
