import Link from "next/link"
import Image from "next/image"

import logo from '../public/logo.png'

function Header() {
  return (
    <header>
      <figure>
        <Image src={logo} layout='fill' />
      </figure>
      <nav>
        <Link href='/news'>Новости</Link>
        <Link href='/lodgers/newbies'>Животные</Link>
        <Link href='/help'>Помощь</Link>
        <Link href='/info'>Информация</Link>
      </nav>
    </header>
  )
}

export default Header