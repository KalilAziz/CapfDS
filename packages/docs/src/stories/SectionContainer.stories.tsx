import { Meta, StoryObj } from '@storybook/react'
import { SectionContent, SectionContentProps } from '@capfds-ui/react'

export default {
  title: 'Interface/SectionContent',
  component: SectionContent,
  args: {
    css: { border: '1px solid blue' },
    children:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla',
  },
  decorators: [
    (Story) => (
      <div
        style={{ border: '1px solid white', width: '100vw', height: '100vh' }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    css: { table: { disable: true } },
  },
} as Meta<SectionContentProps>

export const Primary: StoryObj<SectionContentProps> = {}
