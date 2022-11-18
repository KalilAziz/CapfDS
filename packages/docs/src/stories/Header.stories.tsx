import { Meta, StoryObj } from '@storybook/react'
import { Button, Header, Text } from '@capfds-ui/react'
import { BsBoxArrowInRight } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'
import imageLogo from '../assets/images/logoCapf.svg'
export default {
  title: 'Components/Header',
  component: Header.Root,
  args: {
    children: [
      <Header.Logo key="">
        <a href="">
          <img src={imageLogo} alt="logo" />
        </a>
      </Header.Logo>,
      <Header.Navbar key="">
        <Header.Ul>
          <Header.Li>Home</Header.Li>

          <Header.Li>Produtos</Header.Li>

          <Header.Li>
            <span>
              Quem Somos <IoIosArrowDown />
            </span>
            <Header.Ul>
              <Header.Li>Contato</Header.Li>
              <Header.Li>Reclamações</Header.Li>
            </Header.Ul>
          </Header.Li>

          <Header.Li>
            <span>
              Áreas Acadêmicas <IoIosArrowDown />
            </span>

            <Header.Ul>
              <Header.Li>Grupo Estudantil</Header.Li>
              <Header.Li>Espaço dos Calouros</Header.Li>
              <Header.Li>Colig</Header.Li>
            </Header.Ul>
          </Header.Li>

          <Header.Li>Eventos</Header.Li>

          <Header.Li>
            <Button>
              <Text colors="green500" size="lg">
                Login
              </Text>
              <BsBoxArrowInRight />
            </Button>
          </Header.Li>

          <Header.Li>
            <Header.Theme theme={true} />
          </Header.Li>
        </Header.Ul>
      </Header.Navbar>,
    ],
  },
  argTypes: {
    logoUrl: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      const state = useState(false)
      return <Story menu={state} />
    },
  ],
} as Meta

export const Default: StoryObj = {}
