import MenuIcon from "./menuicon"
import MenuItem from "./menuitem"

function NavMobile() {
  return (
    <nav className='mobile_navigation'>
      <button type='button' className='navigation_button'>
        <MenuIcon />
      </button>
      <ul className='navigation_section'>
        <li>
          <MenuItem href='/news' text='Новости' />
        </li>
        <li>
          <MenuItem href='/lodgers' text='Животные' />
        </li>
        <li>
          <MenuItem href='/help' text='Как помочь' />
        </li>
        <li>
          <MenuItem href='/info' text='Информация' />
        </li>
        <li>
          <MenuItem href='/info/communication' text='Контакты' />
        </li>
        <li>
          <MenuItem href='/info/toowners' text='Правила' />
        </li>
      </ul>
    </nav>
  )
}

export default NavMobile
