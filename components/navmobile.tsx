import MenuIcon from "./menuicon"
import MenuItem from "./menuitem"

function NavMobile() {
  return (
    <button type='button' className='navigation_button'>
      <MenuIcon />
      <nav className='mobile_navigation'>
        <ul className='navigation_section'>
          <li className='menu_item_0'>
            <MenuItem href='/news' text='Новости' />
          </li>
          <li className='menu_item_0'>
            <MenuItem href='/lodgers' text='Животные' />
          </li>
          <li className='menu_item_0'>
            <MenuItem href='/help' text='Как помочь' />
          </li>
          <li className='menu_item_0'>
            <MenuItem href='/info' text='Информация' />
          </li>
          <li className='menu_item_1'>
            <MenuItem href='/info/communication' text='Контакты' />
          </li>
          <li className='menu_item_3'>
            <MenuItem href='/info/toowners' text='Владельцам' />
          </li>
          <li className='menu_item_0'>
            <MenuItem href='/user/login' text='Вход' />
          </li>
        </ul>
      </nav>
    </button>
  )
}

export default NavMobile
