import NavSection from "./navsection"

function NavMobile() {
  const navLinks = [
    "/news/shelternews",
    "/news/worldnews",
    "/news/newsaboutus",
    "/news/actions",
    "/lodgers/newbies",
    "/lodgers/finders",
    "/lodgers/hards",
    "/lodgers/founds",
    "/help/howhelp",
    "/help/donate",
    "/info/about",
    "/info/communication",
    "/info/docs",
    "/info/toowners",
  ]
  return (
    <nav className='navigation mobile_navigation'>
      <NavSection navLinks={navLinks} />
    </nav>
  )
}

export default NavMobile
