import { Meta, StoryObj } from '@storybook/react'
import { Box, Input, InputRootProps, Text } from '@capfds-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { FiSmartphone } from 'react-icons/fi'
import { BiLock } from 'react-icons/bi'

export default {
  title: 'Form/Input',
  component: Input.Root,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text colors="green50">Nome:</Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<InputRootProps>

export const Primary: StoryObj<InputRootProps> = {
  args: {
    children: (
      <>
        <Input.icon>
          <AiOutlineUser />
        </Input.icon>
        <Input.Input placeholder="Digite seu nome" type="text" />
      </>
    ),
  },
}

export const Secondary: StoryObj<InputRootProps> = {
  args: {
    children: (
      <>
        <Input.icon>
          <HiOutlineMail />
        </Input.icon>
        <Input.Input placeholder="Digite seu e-mail" type="email" />
      </>
    ),
  },
}

export const Tertiary: StoryObj<InputRootProps> = {
  args: {
    children: (
      <>
        <Input.icon>
          <FiSmartphone />
        </Input.icon>
        <Input.Input placeholder="Digite seu celular" type="cell" />
      </>
    ),
  },
}

export const Quaternary: StoryObj<InputRootProps> = {
  args: {
    children: (
      <>
        <Input.icon>
          <BiLock />
        </Input.icon>
        <Input.Input placeholder="Digite sua senha" type="password" />
      </>
    ),
  },
}
