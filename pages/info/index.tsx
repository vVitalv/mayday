import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const About: NextPage = () => {
  const title: string = "О нас"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default About
