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
          <ul className='header_navigation_list_section'>
            <li className='menu_item_0'>
              <Link href='/news'>Новости</Link>
            </li>
            <li className='menu_item_1'>
              <Link href='/news/shelternews'>Новости приюта</Link>
            </li>
            <li className='menu_item_2'>
              <Link href='/news/worldnews'>Новости мира</Link>
            </li>
            <li className='menu_item_3'>
              <Link href='/news/actions'>Акции приюта</Link>
            </li>
            <li className='menu_item_4'>
              <Link href='/news/newsaboutus'>СМИ о нас</Link>
            </li>
          </ul>

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
