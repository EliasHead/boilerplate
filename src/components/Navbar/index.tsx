import Link from 'next/link'

export function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
        <li>
          <Link href="/story">Loja</Link>
        </li>
      </ul>
    </>
  )
}
