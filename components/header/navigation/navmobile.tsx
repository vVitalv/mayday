import MenuIcon from "./header/menuicon"
import MenuItem from "./header/menuitem"

function NavMobile() {
  return (
    <div className="mobile-menu">
      <button type='button' className='navigation_button'>
        <MenuIcon />
      </button>
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
            <MenuItem href='/info/toowners' text='Будущим владельцам' />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavMobile
