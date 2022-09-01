import Link from "next/link"
import Image from "next/image"

import logo from "../public/cat-dog.svg"
import MenuItem from "./menuitem"

function Header() {
  return (
    <header>
      <Link href='/' aria-label='На главную'>
        <a>
          <Image src={logo} alt='Логотип приюта' height={60} width={60} />
        </a>
      </Link>
      <nav className='header_navigation'>
        <ul className='header_navigation_section'>
          <li className='menu_item_0'>
            <MenuItem href='/news' text='Новости' />
          </li>
          <li className='menu_item_1'>
            <MenuItem href='/news/shelternews' text='Новости приюта' />
          </li>
          <li className='menu_item_2'>
            <MenuItem href='/news/worldnews' text='Новости мира' />
          </li>
          <li className='menu_item_3'>
            <MenuItem href='/news/actions' text='Акции приюта' />
          </li>
          <li className='menu_item_4'>
            <MenuItem href='/news/newsaboutus' text='СМИ о нас' />
          </li>
        </ul>
        <ul className='header_navigation_section'>
          <li className='menu_item_0'>
            <MenuItem href='/lodgers' text='Животные' />
          </li>
          <li className='menu_item_1'>
            <MenuItem href='/lodgers/newbies' text='Новички' />
          </li>
          <li className='menu_item_2'>
            <MenuItem href='/lodgers/finders' text='Ищут дом' />
          </li>
          <li className='menu_item_3'>
            <MenuItem href='/lodgers/finders/cats' text='Кошки' />
          </li>
          <li className='menu_item_4'>
            <MenuItem href='/lodgers/finders/dogs' text='Собаки' />
          </li>
          <li className='menu_item_5'>
            <MenuItem href='/lodgers/hards' text='Сложный случай' />
          </li>
          <li className='menu_item_6'>
            <MenuItem href='/lodgers/founds' text='Нашли дом' />
          </li>
        </ul>
        <ul className='header_navigation_section'>
          <li className='menu_item_0'>
            <MenuItem href='/help' text='Как помочь' />
          </li>
          <li className='menu_item_1'>
            <MenuItem href='/help/donate' text='Помощь онлайн' />
          </li>
        </ul>
        <ul className='header_navigation_section'>
          <li className='menu_item_0'>
            <MenuItem href='/info' text='Информация' />
          </li>
          <li className='menu_item_1'>
            <MenuItem href='/info/communication' text='Контакты' />
          </li>
          <li className='menu_item_2'>
            <MenuItem href='/info/docs' text='Документы' />
          </li>
          <li className='menu_item_3'>
            <MenuItem href='/info/toowners' text='Владельцам' />
          </li>
        </ul>
        <ul className='header_navigation_section'>
          <li className='menu_item_0'>
            <MenuItem href='/user/login' text='Вход' />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
