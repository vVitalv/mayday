import NavSection from "./navsection"

function NavDesktop() {
  const navLinks = {
    news: ["shelternews", "worldnews", "worldnews", "actions"],
    lodgers: ["newbies", "finders", "hards", "founds"],
    help: ["howhelp", "donate"],
    info: ["about", "communication", "docs", "toowners"],
  }
  return (
    <nav className='desktop_navigation'>
      <NavSection navLinks={navLinks.news} section='/news' />
      <NavSection navLinks={navLinks.lodgers} section='/lodgers' />
      <NavSection navLinks={navLinks.help} section='/help' />
      <NavSection navLinks={navLinks.info} section='/info' />
      {/* <ul className='navigation_section'>
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
        <li>
          <MenuItem href='/lodgers' text='Животные' />
        </li>
        <li>
          <MenuItem href='/lodgers/newbies' text='Новички' />
        </li>
        <li>
          <MenuItem href='/lodgers/finders' text='Ищут дом' />
        </li>
        <li>
          <MenuItem href='/lodgers/hards' text='Сложный случай' />
        </li>
        <li>
          <MenuItem href='/lodgers/founds' text='Нашли дом' />
        </li>
      </ul>
      <ul className='navigation_section'>
        <li>
          <MenuItem href='/help' text='Как помочь' />
        </li>
        <li>
          <MenuItem href='/help/donate' text='Помощь онлайн' />
        </li>
      </ul>
      <ul className='navigation_section'>
        <li>
          <MenuItem href='/info' text='Информация' />
        </li>
        <li>
          <MenuItem href='/info/communication' text='Контакты' />
        </li>
        <li>
          <MenuItem href='/info/docs' text='Документы' />
        </li>
        <li>
          <MenuItem href='/info/toowners' text='Правила' />
        </li>
      </ul> */}
    </nav>
  )
}

export default NavDesktop
