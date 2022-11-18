import { Meta, StoryObj } from '@storybook/react'
import { HeaderDashboard } from '@capfds-ui/react'
import { BsCalendar2Minus } from 'react-icons/bs'

export default {
  title: 'Components/HeaderDashboard',
  component: HeaderDashboard.Root,
  args: {
    imageUserUrl: 'https://avatars.githubusercontent.com/u/70586283?v=4',
    name: 'Kalil Aziz Santos Chami',
    status: 'Estudante',
    college: 'UFCAT',
    course: 'Medicina',
    period: '5',
    registration: '202002444',
    children: (
      <>
        <HeaderDashboard.Ul>
          <HeaderDashboard.UserType>Usuário</HeaderDashboard.UserType>
          <HeaderDashboard.Li>
            <BsCalendar2Minus />
            <span>Eventos Disponíveis</span>
          </HeaderDashboard.Li>
          <HeaderDashboard.Li>
            <BsCalendar2Minus />
            <span>Meus eventos</span>
          </HeaderDashboard.Li>
          <HeaderDashboard.Li>
            <BsCalendar2Minus />
            <span>Certificados</span>
          </HeaderDashboard.Li>
          <HeaderDashboard.Li>
            <BsCalendar2Minus />
            <span>Projetos</span>
          </HeaderDashboard.Li>
          <HeaderDashboard.UserType>Gestor de ligas</HeaderDashboard.UserType>
          <HeaderDashboard.Li>
            <BsCalendar2Minus />
            <span>Ligas</span>
          </HeaderDashboard.Li>
          <HeaderDashboard.UserType>Gestor da Colig</HeaderDashboard.UserType>
          <HeaderDashboard.Li>
            <BsCalendar2Minus />
            <span>Usuários</span>
          </HeaderDashboard.Li>
          <HeaderDashboard.UserType>Administrador</HeaderDashboard.UserType>
          <HeaderDashboard.Li>
            <BsCalendar2Minus />
            <span>Gestor do site</span>
          </HeaderDashboard.Li>
        </HeaderDashboard.Ul>
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
} as Meta

export const Default: StoryObj = {}
