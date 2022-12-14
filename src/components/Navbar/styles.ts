import { styled } from '../../styles'

import Link from 'next/link'

export const Header = styled('header', {
  backgroundColor: '$zinc800',
  color: '$white',
  // position: 'fixed',
  zIndex: '1',
  width: '100%',
  top: 0,
  left: 0,
})

export const NavbarContainer = styled('div', {
  height: '6rem',
  padding: '0 20px',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@bp1': {
    width: '90%',
  },
})

export const LogoLink = styled(Link, {
  height: '100%',
  color: '#61DBFB',
  marginRight: '10px',

  display: 'flex',
  alignItems: 'center',

  span: {
    marginLeft: '10px',
    fontWeight: '700',
    fontSize: '2rem',
    lineHeight: '2rem',
  },
})

export const NavLink = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  height: '100%',
})

export const ALink = styled(Link, {
  color: '$white',
  fontWeight: '300',
  fontSize: '2rem',
})
