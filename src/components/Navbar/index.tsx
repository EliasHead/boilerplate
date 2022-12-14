import { ALink, Header, LogoLink, NavbarContainer, NavLink } from './styles'

import Image from 'next/image'

import logo from '../../../public/logo-react.svg'

export default function Navbar() {
  return (
    <Header>
      <NavbarContainer>
        <LogoLink href="/">
          <Image src={logo} alt="logo react" width={20} height={20} />
          <span>React</span>
        </LogoLink>
        <NavLink>
          <ALink href="/docs">Docs</ALink>
          <ALink href="/learn">Tutorial</ALink>
          <ALink href="/blog">Blog</ALink>
        </NavLink>
      </NavbarContainer>
    </Header>
  )
}
