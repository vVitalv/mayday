import Link from "next/link"

import NavDesktop from "./navigation/navdesktop"
import NavMobile from "./navigation/navmobile"
import UnderHeader from "./underheader"
import Logo from "./logo"
import HeaderButtons from "./buttons/buttons"

function Header() {
  return (
    <header>
      <div className='upperheader'>
        <Logo />
        <NavDesktop />
        <NavMobile />
        <HeaderButtons />
      </div>
      <UnderHeader />
    </header>
  )
}

export default Header
