import NavSection from "./navsection"

function NavDesktop() {
  const navLinks = {
    news: ["shelternews", "worldnews", "newsaboutus", "actions"],
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
    </nav>
  )
}

export default NavDesktop
