import NavSection from "./navsection"

function NavMobile() {
  const navLinks = [
    "/news/shelternews",
    "/lodgers/newbies",
    "/lodgers/finders",
    "/lodgers/hards",
    "/help/howhelp",
    "/help/donate",
    "/info/communication",
    "/info/toowners",
  ]
  return (
    <nav className='navigation mobile_navigation'>
      <NavSection navLinks={navLinks} />
    </nav>
  )
}

export default NavMobile
