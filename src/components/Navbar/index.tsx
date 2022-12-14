import { Header, NavbarContainer, NavLink } from './styles'

import Image from 'next/image'

import logo from '../../../public/logo-react.svg'

export function Navbar() {
  return (
    <Header>
      <NavbarContainer>
        <NavLink href="/">
          <Image src={logo} alt="logo react" width={20} height={20} />
          <span>React</span>
        </NavLink>
      </NavbarContainer>
    </Header>
  )
}
