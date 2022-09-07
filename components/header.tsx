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
        <div className='header_logo'>
          <Link href='/' aria-label='На главную'>
            <a>
              <Image src={logo} alt='Логотип приюта' height={110} width={110} />
            </a>
          </Link>
          <div className='logo-text'>
            ПРОЕКТ <br />
            МАЙСКИЙ <br />
            ДЕНЬ
          </div>
        </div>
        <NavDesktop />
        <NavMobile />
        <div className='header-buttons'>
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
