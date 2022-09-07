import Link from "next/link"
import Image from "next/image"

import logo from "../public/favicon.svg"
import NavDesktop from "./navigation/navdesktop"
import NavMobile from "../navmobile"
import UnderHeader from "./underheader"
import LoginIcon from "./buttons/loginicon"
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
