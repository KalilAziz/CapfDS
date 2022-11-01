import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps, Text } from '@capfds-ui/react'
import { BsBoxArrowInRight } from 'react-icons/bs'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: (
      <>
        <Text size="lg">Compre pelo Whatsapp</Text>
      </>
    ),
    colors: 'yellow900',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    colors: {
      control: {
        type: 'select',
        options: ['yellow900', 'green50'],
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const WithIconLeft: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <BsBoxArrowInRight />
        <Text size="lg">TextComponent</Text>
      </>
    ),
  },
}

export const WithIconRight: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Text css={{ width: '100%' }} size="lg">
          TextComponent
        </Text>
        <BsBoxArrowInRight />
      </>
    ),
  },
}
