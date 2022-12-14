import { useRef } from "react"
import Link from "next/link"

import { pagesList } from "./pagesList"
import MenuIcon from "./menuicon"

function NavSection({ navLinks, section }) {
  const ulRef = useRef(null)

  const toggleMenu = () => {
    ulRef.current.classList.toggle("show_menu")
  }

  const mediaQueryHover = window.matchMedia("(any-hover: hover)")
  const showMenu = (e) => {
    if (mediaQueryHover.matches) {
      e.currentTarget.classList.add("show_menu")
    }
  }
  const hideMenu = (e) => {
    if (mediaQueryHover.matches) {
      e.currentTarget.classList.remove("show_menu")
    }
  }
  return (
    <ul
      ref={ulRef}
      className='navigation_section'
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
    >
      <button className='section_button' type='button' onClick={toggleMenu}>
        {section ? pagesList[section] : <MenuIcon />}
      </button>
      {navLinks.map((linkParam, ind) => {
        const link: string = section ? `${section}/${linkParam}` : linkParam
        return (
          <li key={ind}>
            <Link href={link}>
              <a>
                <div>{pagesList[link]}</div>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavSection
