import Link from "next/link"
import Image from "next/image"

import logo from "../../public/favicon.svg"

function Logo() {
  return (
    <div className='header_logo'>
      <Link href='/' aria-label='На главную'>
        <a>
          <Image className="logo-image" src={logo} alt='Логотип приюта' height={40} width={40} />
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
