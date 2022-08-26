import Link from "next/link"

function Header() {
  return (
    <header>
      <nav>
        <Link href='/news'>Новости</Link>
        <Link href='/newbies'>Новички</Link>
        <Link href='/hards'>Сложный случай</Link>
        <Link href='/finders'>В приюте</Link>
        <Link href='/founds'>Нашли хозяев</Link>
      </nav>
    </header>
  )
}

export default Header