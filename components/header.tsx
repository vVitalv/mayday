import Link from "next/link"

export default function Header() {
  return (
    <header>
      <nav>
        <Link href='/news'>Новости</Link>
        <Link href='/newbes'>Новички</Link>
        <Link href='/hards'>Сложный случай</Link>
        <Link href='/finders'>В приюте</Link>
        <Link href='/founds'>Нашли хозяев</Link>
      </nav>
    </header>
  )
}
