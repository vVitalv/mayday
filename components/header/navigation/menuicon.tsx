function MenuIcon() {
  return (
    <svg
      className='menu_icon'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <line id='line1' strokeLinecap='round' x1='2' y1='4' x2='18' y2='4' />
      <use href='#line1' y='6' />
      <use href='#line1' y='12' />
    </svg>
  )
}

export default MenuIcon
