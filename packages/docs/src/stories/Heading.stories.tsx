import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@capfds-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: <h1>Heading</h1>,
    size: '5xl',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
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
          '8xl',
          '9xl',
        ],
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
