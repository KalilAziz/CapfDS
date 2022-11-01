import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@capfds-ui/react'

export default {
  title: 'Interface/Box',
  component: Box,
  args: {
    colors: 'green600',
  },
  argTypes: {
    border: {
      control: {
        type: 'select',
        options: ['lg', 'full'],
      },
    },
    colors: {
      control: {
        type: 'select',
        options: ['green600', 'green650'],
      },
    },
    css: { table: { disable: true } },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    border: 'lg',
    css: {
      width: '100px',
      height: '100px',
    },
  },
}
export const Full: StoryObj<BoxProps> = {
  args: {
    border: 'full',
    css: {
      width: '100px',
      height: '100px',
    },
  },
}
