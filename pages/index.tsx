import type { NextPage } from "next"

import HeadTitle from "../components/title"

const Home: NextPage = () => {
  const title: string = "Привет!"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default Home
