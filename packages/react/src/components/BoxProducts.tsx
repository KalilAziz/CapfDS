import { styled } from '../styles'

const Root = styled('div', {
  display: 'flex',
  maxWidth: 950,
})

const Box = styled('div', {
  flex: 1,
  position: 'relative',
  height: 'auto',

  variants: {
    position: {
      top: {
        marginTop: '$6',
      },
      bottom: {
        marginBottom: '$6',
      },
    },
  },
})

const BoxProducts = styled('div', {
  backgroundColor: '$green600',
  minHeight: 500,
  borderRadius: '$lg',
  marginLeft: '$4',
  zIndex: 2,
})

const BoxContent = styled('div', {
  backgroundColor: '$green650',
  minHeight: 500,
  borderRadius: '$lg',
  marginRight: '$4',
  zIndex: 1,
})

const subBox = styled('div', {
  backgroundColor: '$green100',
  position: 'absolute',
  width: 100,
  height: '95%',
  margin: 'auto',
  borderRadius: '$lg',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: -1,

  variants: {
    position: {
      left: {
        left: 0,
      },
      right: {
        right: 0,
      },
    },
  },
})

export const Products = {
  Root,
  Box,
  subBox,
  BoxProducts,
  BoxContent,
}
