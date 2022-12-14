import { Meta, StoryObj } from '@storybook/react'
import {
  Background,
  ContainerBackgroundProps,
  SectionContent,
  Text,
} from '@capfds-ui/react'

export default {
  title: 'Interface/Background',
  component: Background.Root,
  args: {
    css: { height: '100vh' },
    theme: 'light',
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ContainerBackgroundProps>

export const Primary: StoryObj<ContainerBackgroundProps> = {
  args: {
    children: (
      <>
        <Background.CL />
        <Background.Content>
          <SectionContent>
            <Text colors="green700">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullalorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullalorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullalorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullalorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullalorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullalorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </SectionContent>
        </Background.Content>
        <Background.CR />
      </>
    ),
  },
}

export const NoCircle: StoryObj<ContainerBackgroundProps> = {
  args: {
    children: (
      <Background.Content>
        <SectionContent>
          <Text colors="green700">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nullalorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullalorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla
          </Text>
        </SectionContent>
      </Background.Content>
    ),
  },
}
