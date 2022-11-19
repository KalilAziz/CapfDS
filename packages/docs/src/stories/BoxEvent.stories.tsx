import { Meta, StoryObj } from '@storybook/react'
import { Background, BoxEvents, SectionContent, Text } from '@capfds-ui/react'

export default {
  title: 'Interface/BoxEvents',
  component: BoxEvents.Root,
  args: {
    children: (
      <>
        <BoxEvents.Line />
        <BoxEvents.Container>
          <BoxEvents.Content>
            <BoxEvents.BoxImage>
              <img src="./src/assets/images/notEvents.svg" alt="" />
            </BoxEvents.BoxImage>
            <BoxEvents.BoxContent>
              <Text>
                <strong>Não foram encontrados eventos no momento.</strong>
              </Text>
              <Text as="span">Tente novamente mais tarde</Text>
            </BoxEvents.BoxContent>
          </BoxEvents.Content>
          <BoxEvents.Box></BoxEvents.Box>
        </BoxEvents.Container>
        <BoxEvents.Line />
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
