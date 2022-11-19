import { Meta, StoryObj } from '@storybook/react'
import {
  Background,
  BoxContentSection,
  SectionContent,
  Text,
} from '@capfds-ui/react'

export default {
  title: 'Interface/BoxContentSection',
  component: BoxContentSection.Root,
  args: {
    children: (
      <>
        <BoxContentSection.Line />
        <BoxContentSection.Container>
          <BoxContentSection.Content>
            <BoxContentSection.BoxImage>
              <img src="./src/assets/images/notEvents.svg" alt="" />
            </BoxContentSection.BoxImage>
            <BoxContentSection.BoxContent>
              <Text>
                <strong>Não foram encontrados eventos no momento.</strong>
              </Text>
              <Text as="span">Tente novamente mais tarde</Text>
              <Text>
                <strong>Não foram encontrados eventos no momento.</strong>
              </Text>
              <Text as="span">Tente novamente mais tarde</Text>
              <Text>
                <strong>Não foram encontrados eventos no momento.</strong>
              </Text>
              <Text as="span">Tente novamente mais tarde</Text>
            </BoxContentSection.BoxContent>
          </BoxContentSection.Content>
          <BoxContentSection.Box></BoxContentSection.Box>
        </BoxContentSection.Container>
        <BoxContentSection.Line />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <Background.Root theme="dark">
        <Background.Content>
          <SectionContent>
            <Story />
          </SectionContent>
        </Background.Content>
      </Background.Root>
    ),
  ],
} as Meta

export const Primary: StoryObj = {}
