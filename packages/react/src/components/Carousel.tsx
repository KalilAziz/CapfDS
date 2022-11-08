import { styled } from '../styles'
import { Slot } from '@radix-ui/react-slot'
import { Box } from './Box'

const Item = styled('div', {})
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
