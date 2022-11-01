import { styled } from '../../styles'

export const TextComponent = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: '0',
  color: 'inherit',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
    colors: {
      green50: { color: '$green50' },
      green500: { color: '$green500' },
      green700: { color: '$green700' },
      green900: { color: '$green900' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
