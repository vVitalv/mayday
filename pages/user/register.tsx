import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const Register: NextPage = () => {
  const title: string = "Регистрация"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Register
