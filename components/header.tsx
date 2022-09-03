import Link from "next/link"
import Image from "next/image"

import logo from "../public/cat-dog.svg"
import NavDesktop from "./navdesktop"
import NavMobile from "./navmobile"
import UnderHeader from "./underheader"

function Header() {
  return (
    <header>
      <Link href='/' aria-label='На главную'>
        <a>
          <div className='header_logo'>
            <Image src={logo} alt='Логотип приюта' height={50} width={50} />
            <span>
              МАЙСКИЙ <br />
              ДЕНЬ
            </span>
          </div>
        </a>
      </Link>
      <NavDesktop />
      <NavMobile />
    </header>
  )
}

export default Header
