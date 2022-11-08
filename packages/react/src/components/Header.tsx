import { Slot } from '@radix-ui/react-slot'
import { ReactNode, useState } from 'react'
import { styled } from '../styles'
import { SectionContent } from './SectionContent'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { BsFillSunFill, BsMoon } from 'react-icons/bs'

const Container = styled('header', {
  backgroundColor: '$green400',
  width: '100%',
})

const Logo = styled('img', {
  '@bp1': {
    width: '70px',
  },
})

const Navbar = styled('nav', {
  color: '$white',
  ul: {
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',

    li: {
      position: 'relative',
      padding: '$3 $4',

      '&:hover ul, &:focus ul': {
        visibility: 'visible',
        opacity: '1',
        transform: 'translateY(1.5rem)',
      },

      span: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',

        svg: {
          color: '$yellow900',
          fontSize: '1.5rem',
        },
      },

      ul: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        visibility: 'none',
        opacity: '0',
        transition: 'all 300ms ease-in-out',

        li: {
          backgroundColor: '$green400',
          width: '12rem',
          transition: 'all 300ms ease-in-out',

          '&:first-child': {
            borderTopLeftRadius: '$sm',
            borderTopRightRadius: '$sm',
          },

          '&:last-child': {
            borderBottomLeftRadius: '$sm',
            borderBottomRightRadius: '$sm',
          },

          '&:hover, &:focus': {
            transform: 'scale(1.1)',
            backgroundColor: '$yellow900',
            color: '$green400',
            borderRadius: '$sm',
          },
        },
      },
    },
  },

  '@bp1': {
    backgroundColor: '$green400',
    visibility: 'none',
    opacity: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    minHeight: '100vh',
    paddingTop: '10rem',
    transition: 'all 300ms ease-in-out',
    transform: 'translateX(-100px)',

    ul: {
      flexDirection: 'column',
      margin: '0',
      alignItems: 'center',

      li: {
        textAlign: 'center',

        '&:hover ul, &:focus ul': {
          transform: 'translateY(0)',
        },

        ul: {
          position: 'relative',
          visibility: 'visible',
          opacity: '1',

          li: {
            border: '1px solid rgba(253, 200, 59, 0.3)',
          },
        },
      },
    },
  },

  variants: {
    openMenu: {
      true: {
        visibility: 'visible',
        opacity: '1',
        transform: 'translateX(0px)',
      },
      false: {},
    },
  },
})

const Ul = styled('ul', {})

const Li = styled('li', {})

const ToggleMenu = styled(Slot, {
  zIndex: '6',
  position: 'absolute',
  right: '2rem',
  width: '2rem',
  height: '2rem',
  backgroundColor: '$green400',
  color: '$white',
  border: 'none',
  display: 'none',
  transition: 'all 300ms ease-in-out',

  '@bp1': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  variants: {
    openMenu: {
      true: {
        transition: 'all 300ms ease-in-out',
        color: '$yellow900',
      },
      false: {},
    },
  },
})

interface ThemeProps {
  theme: boolean
}

const Theme = ({ theme }: ThemeProps) => {
  return theme ? <BsFillSunFill /> : <BsMoon />
}

interface HeaderComponentProps {
  children: ReactNode
  logoUrl: string
  iconMenu: ReactNode
}

const HeaderComponent = ({ children, logoUrl }: HeaderComponentProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Container>
      <SectionContent
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Logo src={logoUrl} alt="CapFDS" />
        <ToggleMenu
          onClick={() => setIsMenuOpen((op) => !op)}
          openMenu={isMenuOpen}
        >
          {isMenuOpen ? <IoMdClose /> : <HiOutlineMenu />}
        </ToggleMenu>
        <Navbar openMenu={isMenuOpen}>{children}</Navbar>
      </SectionContent>
    </Container>
  )
}

export const Header = {
  Root: HeaderComponent,
  Ul,
  Li,
  Theme,
}