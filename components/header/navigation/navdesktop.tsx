import MenuItem from "./menuitem"

function NavDesktop() {
  return (
    <nav className='desktop_navigation'>
      <ul className='navigation_section'>
        <li>
          <MenuItem href='/news' text='Новости' />
        </li>
        <li>
          <MenuItem href='/news/shelternews' text='Новости приюта' />
        </li>
        <li>
          <MenuItem href='/news/worldnews' text='Новости мира' />
        </li>
        <li>
          <MenuItem href='/news/actions' text='Акции приюта' />
        </li>
        <li>
          <MenuItem href='/news/newsaboutus' text='СМИ о нас' />
        </li>
      </ul>
      <ul className='navigation_section'>
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
          <MenuItem href='/lodgers/hards' text='Сложный случай' />
        </li>
        <li className='menu_item_4'>
          <MenuItem href='/lodgers/founds' text='Нашли дом' />
        </li>
      </ul>
      <ul className='navigation_section'>
        <li className='menu_item_0'>
          <MenuItem href='/help' text='Как помочь' />
        </li>
        <li className='menu_item_1'>
          <MenuItem href='/help/donate' text='Помощь онлайн' />
        </li>
      </ul>
      <ul className='navigation_section'>
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
          <MenuItem href='/info/toowners' text='Правила' />
        </li>
      </ul>
    </nav>
  )
}

export default NavDesktop