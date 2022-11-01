import { Meta, StoryObj } from '@storybook/react'
import {
  Background,
  ProductsArea,
  SectionContent,
  Text,
} from '@capfds-ui/react'

const css = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default {
  title: 'Components/Products',
  component: ProductsArea.Root,
  decorators: [
    (Story) => (
      <Background.Root dark css={css}>
        <Background.CL />
        <Background.Content>
          <SectionContent>
            <Story />
          </SectionContent>
        </Background.Content>
        <Background.CR />
      </Background.Root>
    ),
  ],
} as Meta

export const Caneca: StoryObj = {
  args: {
    children: (
      <>
        <ProductsArea.Image src="./src/assets/images/caneca.svg" />
        <div>
          <ProductsArea.container>Caneca CAPF</ProductsArea.container>
          <ProductsArea.Button>
            <Text css={{ color: '$white' }} size="xl">
              Saiba mais
            </Text>
          </ProductsArea.Button>
        </div>
      </>
    ),
  },
}

export const Garrafa: StoryObj = {
  args: {
    children: (
      <>
        <ProductsArea.Image src="./src/assets/images/garrafa.svg" />
        <div>
          <ProductsArea.container>Garrafa CAPF</ProductsArea.container>
          <ProductsArea.Button>
            <Text css={{ color: '$white' }} size="xl">
              Saiba mais
            </Text>
          </ProductsArea.Button>
        </div>
      </>
    ),
  },
}

export const Caneta: StoryObj = {
  args: {
    children: (
      <>
        <ProductsArea.Image src="./src/assets/images/caneta.svg" />
        <div>
          <ProductsArea.container>Caneta CAPF</ProductsArea.container>
          <ProductsArea.Button>
            <Text css={{ color: '$white' }} size="xl">
              Saiba mais
            </Text>
          </ProductsArea.Button>
        </div>
      </>
    ),
  },
}
