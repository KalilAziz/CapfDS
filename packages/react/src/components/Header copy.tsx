import { Slot } from '@radix-ui/react-slot'
import { ReactNode, useState } from 'react'
import { styled } from '../styles'
import { SectionContent } from './SectionContent'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

const Root = styled('header', {
  backgroundColor: '$green400',
  border: '1px solid red',
  width: '100%',
})

const Logo = styled('img', {})

const Navbar = styled('nav', {
  ul: {
    '@bp1': {
      display: 'none',
    },
  },

  variants: {
    openMenu: {
      true: {
        ul: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          top: '150px',
          right: '0',
          height: '100%',
          backgroundColor: '$green400',
          zIndex: '1',

          li: {
            all: 'unset',

            '&:hover ul': {
              all: 'unset',
            },

            ul: {
              all: 'unset',
              display: 'flex',
              flexDirection: 'column',

              li: {
                all: 'unset',
              },
            },
          },
        },
      },
      false: {},
    },
  },
})

const Ul = styled('ul', {
  color: '$white',
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
})

const Li = styled('li', {
  position: 'relative',
  padding: '$2 $3',

  '&:hover ul': {
    display: 'block',
  },

  ul: {
    all: 'unset',
    position: 'absolute',
    backgroundColor: '$green400',
    borderRadius: '$small',
    display: 'none',
    top: '100%',
    left: 0,

    li: {
      all: 'unset',
      display: 'inline-block',
      padding: '$1 $2',
    },
  },

  span: {
    display: 'flex',
    alignItems: 'center',

    svg: {
      fontSize: '$2xl',
      color: '$yellow900',
      fontWeight: '$bold',
    },
  },

  svg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const ToggleMenu = styled(Slot, {
  display: 'none',
  color: '$white',
  fontSize: '$2xl',

  '@bp1': {
    display: 'inline-block',
  },
})

interface HeaderComponentProps {
  children: ReactNode
  logoUrl: string
  iconMenu: ReactNode
}

const HeaderComponent = ({
  children,
  logoUrl,
  iconMenu,
}: HeaderComponentProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Root>
      <SectionContent
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Logo src={logoUrl} alt="CapFDS" />
        <ToggleMenu onClick={() => setIsMenuOpen((op) => !op)}>
          {isMenuOpen ? <IoMdClose /> : <HiOutlineMenu />}
        </ToggleMenu>
        <Navbar openMenu={isMenuOpen}>{children}</Navbar>
      </SectionContent>
    </Root>
  )
}

export const Header = {
  Root: HeaderComponent,
  Ul,
  Li,
}
