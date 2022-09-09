import React, { useRef } from "react"
import Link from "next/link"

import { pagesList } from "./pagesList"

function NavSection({ navLinks, section }) {
  const ulRef = useRef()
  const toggleMenu = (e) => {
    ulRef.current.classList.toggle("show_menu")
  }
  const showMenu = (e) => {
    e.stopPropagation()
    e.currentTarget.classList.add("show_menu")
  }
  const hideMenu = (e) => {
    e.stopPropagation()
    e.currentTarget.classList.remove("show_menu")
  }
  return (
    <ul
      ref={ulRef}
      className='navigation_section'
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
    >
      <button className='section_button' type='button' onClick={toggleMenu}>
        {pagesList[section]}
      </button>
      {navLinks.map((linkParam, ind) => {
        const link: string = `${section}/${linkParam}`
        return (
          <li key={ind}>
            <Link href={link}>
              <a>{pagesList[link]}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default React.memo(NavSection)
