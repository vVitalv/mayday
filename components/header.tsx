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
        <div className='header_navigation_section'>
          <Link href='/news'>
            <a>
              <div className='menu_item menu_item_0'>Новости</div>
            </a>
          </Link>
          <Link href='/news/shelternews'>
            <a>
              <div className='menu_item menu_item_1'>Новости приюта</div>
            </a>
          </Link>
          <Link href='/news/worldnews'>
            <a>
              <div className='menu_item menu_item_2'>Новости мира</div>
            </a>
          </Link>
          <Link href='/news/actions'>
            <a>
              <div className='menu_item menu_item_3'>Акции приюта</div>
            </a>
          </Link>
          <Link href='/news/newsaboutus'>
            <a>
              <div className='menu_item menu_item_4'>СМИ о нас</div>
            </a>
          </Link>
        </div>
        <div className='header_navigation_section'>
          <Link href='/lodgers'>
            <a>
              <div className='menu_item menu_item_0'>Животные</div>
            </a>
          </Link>
          <Link href='/lodgers/newbies'>
            <a>
              <div className='menu_item menu_item_1'>Новички</div>
            </a>
          </Link>
          <Link href='/lodgers/finders'>
            <a>
              <div className='menu_item menu_item_2'>Ищут дом</div>
            </a>
          </Link>
          <Link href='/lodgers/finders/cats'>
            <a>
              <div className='menu_item menu_item_3'>Кошки</div>
            </a>
          </Link>
          <Link href='/lodgers/finders/dogs'>
            <a>
              <div className='menu_item menu_item_4'>Собаки</div>
            </a>
          </Link>
          <Link href='/lodgers/hards'>
            <a>
              <div className='menu_item menu_item_5'>Сложные</div>
            </a>
          </Link>
          <Link href='/lodgers/founds'>
            <a>
              <div className='menu_item menu_item_6'>Нашли дом</div>
            </a>
          </Link>
        </div>
        <div className='header_navigation_section'>
          <Link href='/help'>
            <a>
              <div className='menu_item menu_item_0'>Как помочь</div>
            </a>
          </Link>
          <Link href='/help/donate'>
            <a>
              <div className='menu_item menu_item_1'>Помощь онлайн</div>
            </a>
          </Link>
        </div>
        <div className='header_navigation_section'>
          <Link href='/info'>
            <a>
              <div className='menu_item menu_item_0'>Информация</div>
            </a>
          </Link>
          <Link href='/info/communication'>
            <a>
              <div className='menu_item menu_item_1'>Контакты</div>
            </a>
          </Link>
          <Link href='/info/docs'>
            <a>
              <div className='menu_item menu_item_2'>Документы</div>
            </a>
          </Link>
          <Link href='/info/toowners'>
            <a>
              <div className='menu_item menu_item_3'>Владельцам</div>
            </a>
          </Link>
        </div>
        <div className='header_navigation_section'>
          <Link href='/user/login'>
            <a>
              <div className='menu_item menu_item_0'>Вход</div>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
