import Link from "next/link"
import Image from "next/image"

import logo from "../public/favicon.svg"
import NavDesktop from "./navdesktop"
import NavMobile from "./navmobile"
import UnderHeader from "./underheader"
import LoginIcon from "./loginicon"

function Header() {
  return (
    <header>
      <div className='upperheader'>
        <Link href='/' aria-label='На главную'>
          <a>
            <div className='header_logo'>
              <Image src={logo} alt='Логотип приюта' height={50} width={50} />
              <span className="logo-text">
                МАЙСКИЙ <br />
                ДЕНЬ
              </span>
            </div>
          </a>
        </Link>
        <NavDesktop />
        <NavMobile />
        <div className="header-buttons">
          <button type='button' className='login-button'>
            <LoginIcon />
          </button>
          <button type='button' className='login-button'>
            <LoginIcon />
          </button>
        </div>
      </div>
      <UnderHeader />
    </header>
  )
}

export default Header
