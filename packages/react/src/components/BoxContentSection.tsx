import { styled } from '../styles'

const Root = styled('div', {})

const Container = styled('div', {
  position: 'relative',
  margin: '50px auto',
  maxWidth: 900,
})

const Content = styled('div', {
  backgroundColor: '$green600',
  minHeight: 325,
  display: 'flex',
  flexWrap: 'wrap',
  border: '4px solid',
  borderColor: '$green100',
  borderRadius: '$sm',
})

const BoxContent = styled('div', {
  flex: 1,
  minWidth: 325,
  borderLeft: '2px solid',
  borderColor: '$green100',
  padding: '$3 $4',

  p: {
    color: '$green50',
  },
  span: {
    color: '$green50',
  },

  '@bp1': {
    borderLeft: 'none',
    borderTop: '2px solid',
    borderColor: '$green100',

    p: {
      color: '$green50',
    },
    span: {
      color: '$green50',
    },
  },
})
const BoxImage = styled('div', {
  flex: 1,
  minWidth: 325,
  borderRight: '2px solid',
  borderColor: '$green100',
  padding: '$3 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  img: {
    width: 'auto',
    objectFit: 'cover',
  },

  '@bp1': {
    borderRight: 'none',
    borderBottom: '2px solid',
    borderColor: '$green100',
  },
})

const Box = styled('div', {
  width: '95%',
  minHeight: 50,
  margin: 'auto',
  backgroundColor: '$green50',
  border: '4px solid',
  borderColor: '$green100',
  borderRadius: '$lg',
  position: 'absolute',
  left: '-50%',
  right: '-50%',
  bottom: -15,
  zIndex: -1,
})

const Line = styled('div', {
  border: '2px solid',
  borderColor: '$green100',
  margin: '$2 0',
  borderRadius: '$full',
})

export const BoxContentSection = {
  Root,
  Container,
  Content,
  BoxContent,
  BoxImage,
  Box,
  Line,
}
