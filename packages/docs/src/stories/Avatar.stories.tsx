import { Meta, StoryObj } from '@storybook/react'
import { Avatar, RootAvatarProps, Text } from '@capfds-ui/react'
import { AiOutlineSetting } from 'react-icons/ai'

export default {
  title: 'Components/Avatar',
  component: Avatar.Root,
  args: {
    imageUserUrl: 'https://avatars.githubusercontent.com/u/70586283?v=4',
    name: 'Kalil Aziz Santos Chami',
    status: 'Estudante',
    children: (
      <>
        <Avatar.Portal>
          <Avatar.Content>
            <Avatar.Settings href="/">
              <AiOutlineSetting />
            </Avatar.Settings>
            <Avatar.Container
              flexColumn
              css={{
                alignItems: 'center',
              }}
            >
              <Avatar.Img
                size="large"
                src="./src/assets/images/avatar.svg"
                alt="Radix UI"
              />
              <Avatar.Container
                flexColumn
                gap="large"
                css={{
                  alignItems: 'center',
                  minWidth: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    colors="green50"
                    size="lg"
                    css={{
                      fontWeight: 'bold',
                    }}
                  >
                    Kalil Aziz
                  </Text>
                  <Text colors="green900">Aluno</Text>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    minWidth: '100%',
                  }}
                >
                  <Text colors="green50">Faculdade: Ufcat</Text>
                  <Text colors="green50">Curso: Medicina</Text>
                </div>
                <Avatar.Container gap="large">
                  <Avatar.Container gap="small">
                    <Text colors="green50">Matrícula: 202002444</Text>
                  </Avatar.Container>
                </Avatar.Container>
              </Avatar.Container>
            </Avatar.Container>
            <Avatar.Arrow />
          </Avatar.Content>
        </Avatar.Portal>
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
} as Meta<RootAvatarProps>

export const Default: StoryObj<RootAvatarProps> = {}
