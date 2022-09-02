import Link from "next/link"
import Image from "next/image"

import logo from "../public/cat-dog.svg"
import NavDesktop from "./navdesktop"
import NavMobile from "./navmobile"


function Header() {
  return (
    <header>
      <Link href='/' aria-label='На главную'>
        <a>
          <Image src={logo} alt='Логотип приюта' height={10} width={10} />
        </a>
      </Link>
      <NavDesktop />
      <NavMobile />
    </header>
  )
}

export default Header
