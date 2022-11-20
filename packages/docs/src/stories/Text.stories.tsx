import { Meta, StoryObj } from '@storybook/react'
import { Text } from '@capfds-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Text Component Text',
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
        options: [
          'green50',
          'green100',
          'green150',
          'green200',
          'green300',
          'green400',
          'green500',
          'green600',
          'green650',
          'green700',
          'green800',
          'green900',
          'yellow900',
        ],
      },
    },
  },
} as Meta

export const Primary: StoryObj = {}
