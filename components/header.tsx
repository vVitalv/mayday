import Link from "next/link"
import Image from "next/image"

import logo from "../public/cat-dog.svg"

function Header() {
  return (
    <header>
      <Link href='/'>
        <a>
          <Image src={logo} alt='May Day logotype' height={60} width={60} />
        </a>
      </Link>
      <nav className='header_navigation'>
        <div className='header_navigation_list'>
          <Link href='/news'>Новости</Link>
          <Link href='/lodgers'>Животные</Link>
          <Link href='/help'>Помощь</Link>
          <Link href='/info'>Информация</Link>
        </div>
        <Link href='/user/login'>Вход</Link>
      </nav>
    </header>
  )
}

export default Header
