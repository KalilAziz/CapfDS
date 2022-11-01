import { Meta, StoryObj } from '@storybook/react'
import { Box, Input, InputRootProps, Text } from '@capfds-ui/react'
import { AiOutlineUser } from 'react-icons/ai'

export default {
  title: 'Form/Input',
  component: Input.Root,
  args: {
    children: (
      <>
        <Input.icon>
          <AiOutlineUser />
        </Input.icon>
        <Input.Input placeholder="Digite seu nome" type="cel" />
      </>
    ),
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

export const Primary: StoryObj<InputRootProps> = {}
