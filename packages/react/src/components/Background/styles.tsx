import { styled } from '../../styles'

// import image for assets/image/circle.png
export const BackgroundContainer = styled('div', {
  overflowX: 'hidden',
  position: 'relative',
  backgroundColor: '$backgroundColor',
  zIndex: 1,
})

export const Content = styled('div', {
  zIndex: 5,
})

export const CircleLeft = styled('div', {
  backgroundColor: '$green400',
  position: 'absolute',
  borderRadius: '$full',
  width: '500px',
  height: '500px',
  left: '0',
  bottom: '50px',
  transform: 'translateX(-40%)',
  zIndex: -1,

  '@bp2': {
    display: 'none',
  },
})

export const CircleRight = styled('div', {
  position: 'absolute',
  backgroundColor: '$green400',
  borderRadius: '$full',
  width: '500px',
  height: '500px',
  top: '50px',
  right: '0',
  transform: 'translateX(40%)',
  zIndex: -1,

  '@bp2': {
    display: 'none',
  },
})
