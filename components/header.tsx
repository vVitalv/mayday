import Link from "next/link"

function Header() {
  return (
    <header>
      <nav>
        <Link href='/news'>Новости</Link>
        <Link href='/lodgers/newbies'>Новички</Link>
        <Link href='/lodgers/hards'>Сложный случай</Link>
        <Link href='/lodgers/finders'>В приюте</Link>
        <Link href='/lodgers/founds'>Нашли хозяев</Link>
      </nav>
    </header>
  )
}

export default Header