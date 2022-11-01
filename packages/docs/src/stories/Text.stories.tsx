import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@capfds-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Text Component Text',
    dark: false,
    colors: 'green700',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          'xxs',
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
          '8xl',
          '9xl',
        ],
      },
    },
    colors: {
      control: {
        type: 'select',
        options: ['green50', 'green500', 'green700', 'green900'],
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
