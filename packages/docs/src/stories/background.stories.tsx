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
    dark: false,
  },
  argTypes: {},
} as Meta<ContainerBackgroundProps>

export const Primary: StoryObj<ContainerBackgroundProps> = {
  args: {
    children: (
      <>
        <Background.CL />
        <Background.Content>
          <SectionContent>
            <Text>
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
          <Text>
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
