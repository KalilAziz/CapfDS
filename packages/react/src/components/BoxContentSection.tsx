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
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$green50',
  gap: '$4',

  p: {
    color: '$green50',
    fontSize: '$4xl',
  },
  span: {
    color: '$green50',
    fontSize: '$2xl',
  },

  '@bp1': {
    borderLeft: 'none',
    borderTop: '2px solid',
    borderColor: '$green100',

    p: {
      color: '$green50',
      fontSize: '$2xl',
    },
    span: {
      color: '$green50',
      fontSize: '$xl',
    },
  },
})
const BoxImage = styled('div', {
  flex: 1,
  minWidth: 325,
  borderRight: '2px solid',
  borderColor: '$green100',

  display: 'flex',
  alignItems: 'center',

  img: {
    width: '100%',
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
