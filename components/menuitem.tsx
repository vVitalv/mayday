import Link from "next/link"

function MenuItem({ href, text}) {
  return (
    <Link href={href}>
      <a>
        <div>{text}</div>
      </a>
    </Link>
  )
}

export default MenuItem
