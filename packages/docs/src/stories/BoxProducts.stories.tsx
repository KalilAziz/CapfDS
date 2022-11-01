import { Meta, StoryObj } from '@storybook/react'
import { Products } from '@capfds-ui/react'

export default {
  title: 'interface/Productsbox',
  component: Products.Root,
  args: {
    children: (
      <>
        <Products.Box position="bottom">
          <Products.subBox position="left" />
          <Products.BoxProducts></Products.BoxProducts>
        </Products.Box>
        <Products.Box position="top">
          <Products.subBox position="right" />
          <Products.BoxContent></Products.BoxContent>
        </Products.Box>
      </>
    ),
  },
  argTypes: {},
  decorators: [(Story) => <Story />],
} as Meta

export const Primary: StoryObj = {}
