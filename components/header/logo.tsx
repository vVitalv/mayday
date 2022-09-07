import Link from "next/link"
import Image from "next/image"

import logo from "../../public/favicon.svg"

function Logo() {
  return (
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
  )
}

export default Logo
