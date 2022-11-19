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
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <Background.Root theme="dark" css={css}>
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
        <ProductsArea.Image>
          <img src="./src/assets/images/caneca.svg" alt="" />
        </ProductsArea.Image>
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
        <ProductsArea.Image>
          <img src="./src/assets/images/caneca.svg" alt="" />
        </ProductsArea.Image>
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
        <ProductsArea.Image>
          <img src="./src/assets/images/caneca.svg" alt="" />
        </ProductsArea.Image>
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

export const Products: StoryObj = {
  args: {
    children: (
      <>
        <ProductsArea.Image>
          <img src="./src/assets/images/caneca.svg" alt="" />
        </ProductsArea.Image>
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
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
}
