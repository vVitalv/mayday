import type { NextPage } from "next"

import HeadTitle from "../../components/title"

const ShelterNews: NextPage = () => {
  const title: string = "Новости приюта"
  return (
    <div>
      <HeadTitle title={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default ShelterNews
