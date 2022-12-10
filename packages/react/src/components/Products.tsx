import { styled } from '../styles'
import { Text } from './Text'
import { Slot } from '@radix-ui/react-slot'

const Root = styled('div', {
  backgroundColor: '$green100',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'stretch',

  minWidth: 300,
  maxWidth: 450,
  minHeight: 500,
  margin: '0 auto',

  borderRadius: '$lg',
  boxShadow: 'inset 0px 3.48721px 3.48721px rgba(0, 0, 0, 0.25)',

  '&:hover': {
    transition: 'all 0.3s ease',
    scale: 1.1,
    backgroundColor: '$green200',
    color: '$white',

    button: {
      backgroundColor: '$green200',
      transition: 'all 0.3s ease',
    },
  },

  '@bp3': {
    minHeight: 400,
  },
})

const Image = styled(Slot, {
  border: '5px solid',
  borderColor: '$green900',
  borderRadius: '$lg',
  margin: 'auto',
  maxWidth: 300,
})

const Title = styled(Slot, {
  display: 'block',
  margin: '$10 0',
  color: '$gray100',
  fontWeight: 700,

  '&:hover': {
    transition: 'all 0.3s ease',
  },
})
const Line = styled('hr', {
  width: '80%',
  height: 3,
  borderColor: '$green900',
  backgroundColor: '$green900',
  margin: 'auto',
})

const Button = styled('button', {
  backgroundColor: '$green600',
  color: '$white',
  width: '100%',
  height: '50px',
  border: 'none',
  borderBottomLeftRadius: '$lg',
  borderBottomRightRadius: '$lg',
  boxShadow: 'inset 0px 3.48721px 3.48721px rgba(0, 0, 0, 0.25);',
  cursor: 'pointer',
  fontSize: '$xl',

  '&:hover': {
    transition: 'all 0.3s ease',
    color: '$white',
  },
})

interface ContainerProps {
  children: string
}

const container = ({ children }: ContainerProps) => {
  return (
    <>
      <Line />
      <Title>
        <Text size="2xl">{children}</Text>
      </Title>
    </>
  )
}

export const ProductsArea = {
  Root,
  Image,
  container,
  Button,
}
