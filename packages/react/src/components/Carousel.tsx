import { styled } from '../styles'
import { Slot } from '@radix-ui/react-slot'
import { Box } from './Box'
import { CSSProperties } from 'react'

export const arrowStyles: CSSProperties = {
  position: 'absolute',
  top: 'calc(50% - 15px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  height: 30,
  backgroundColor: '#90B49C',
  boxShadow: '5px 5px 52px rgba(0, 0, 0, 0.14)',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  zIndex: 2,
}

export const indicatorStyles: CSSProperties = {
  display: 'none',
}

const Item = styled('div', {
  '@bp1': {
    padding: '$12',
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
})

const Content = styled(Box, {
  maxWidth: '600px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})
const Legend = styled(Slot, {})

export const CarouselComponent = {
  Item,
  Content,
  Legend,
}
